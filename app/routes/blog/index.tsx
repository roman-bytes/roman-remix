import React from 'react';
import RomanBytesLogo from "~/components/roman-bytes-logo";
import {useMatches} from "react-router";
import Plus from "~/components/plus";
import {Link, useLoaderData} from "@remix-run/react";
import {json} from "@remix-run/node";
import { parseISO, format } from "date-fns";

export const loader = async () => {
    const articles = await fetch(`https://dev.to/api/articles?username=romanbytes`).then((res) => res.json());

    return json({
        posts: articles,
    })
}

const formatTime = (time: string) => {
    return format(parseISO(time), 'MM/dd/yyyy');
}

export default function Blog() {
    const { posts } = useLoaderData();
    const matches = useMatches();
    const currentRoute = matches[1];

    console.log('post', posts);

    return (
        <main className="container relative border-2 border-romanBlack rounded-3xl bg-white pt-32 px-28 pb-28 my-28">
            <div className="absolute top-10 left-0 right-0 text-center text-romanPrimary mb-16">{`~ ${currentRoute.pathname} `}</div>
            <RomanBytesLogo/>

            <section className="mt-32">
                {posts.map((post) => (
                    <div key={post.id} className="relative w-full lg:w-1/2 max-w-[400] max-h-[225] min-w-[400] min-h-[225] border border-dashed border-romanText hover:border-solid hover:border-romanPrimary p-8 mt-[-1px] ml-0 lg:ml-[-1px]">
                        <div className="ml-16">{formatTime(post.created_at)}</div>
                        <Link to={`/blog/${post.id}`}>
                            <h2 className="text-4xl flex my-4">
                                <span className="text-romanText mr-6">//</span>
                                <span className="block">{post.title}</span>
                            </h2>
                        </Link>
                        <div className="flex items-center ml-16">
                            {post.tags.map((tag) => <div key={tag} className="text-romanPrimary text-md mr-4">#{tag}</div>)}
                        </div>
                        <Plus className="absolute top-[-3px] left-[-3px]" />
                        <Plus className="absolute top-[-3px] right-[-3px]" />
                        <Plus className="absolute bottom-[-3px] left-[-3px]" />
                        <Plus className="absolute bottom-[-3px] right-[-3px]" />
                    </div>
                ))}
            </section>
        </main>
    );
}