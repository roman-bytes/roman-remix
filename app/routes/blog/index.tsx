import React from 'react';
import RomanBytesLogo from "~/components/roman-bytes-logo";
import {useMatches} from "react-router";
import Plus from "~/components/plus";
import {Link} from "@remix-run/react";

const posts = [
    {
        id: 1,
        date: new Date().toISOString(),
        title: 'How to build a blog and deploy to Netlify.',
        tags: ['web-development', 'coding', 'javascript'],
        slug: 'how-to-build',
    },
    {
        id: 2,
        date: new Date().toISOString(),
        title: 'How to build a blog and deploy to Netlify.',
        tags: ['web-development', 'coding', 'javascript'],
        slug: 'how-to-build',
    },
    {
        id: 3,
        date: new Date().toISOString(),
        title: 'How to build a blog and deploy to Netlify.',
        tags: ['web-development', 'coding', 'javascript'],
        slug: 'how-to-build',
    },
]

export default function Blog() {
    const matches = useMatches();
    const currentRoute = matches[1];

    return (
        <main className="container relative border-2 border-romanBlack rounded-3xl bg-white pt-32 px-28 pb-28 my-28">
            <div className="absolute top-10 left-0 right-0 text-center text-romanPrimary mb-16">{`~ ${currentRoute.pathname} `}</div>
            <RomanBytesLogo/>

            <section>
                {posts.map((post) => (
                    <div key={post.id} className="relative w-full lg:w-1/2 max-w-[400] max-h-[225] min-w-[400] min-h-[225] border border-dashed border-romanText hover:border-solid hover:border-romanPrimary p-8 mt-[-1px] ml-0 lg:ml-[-1px]">
                        <div className="ml-16">{post.date}</div>
                        <Link to={`/blog/${post.slug}`}>
                            <h2 className="text-4xl flex my-4"><span className="text-romanText mr-6">//</span><span className="block">{post.title}</span></h2>
                        </Link>
                        <div className="flex items-center ml-16">
                            {post.tags.map((tag) => <div className="text-romanPrimary text-md mr-4">#{tag}</div>)}
                        </div>
                        <Plus className="absolute top-[-3px] left-[-3px]" />
                        <Plus className="absolute top-[-3px] right-[-3px]" />
                    </div>
                ))}
            </section>
        </main>
    );
}