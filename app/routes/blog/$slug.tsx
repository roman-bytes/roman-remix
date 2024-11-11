import React from 'react';
import RomanBytesLogo from "~/components/roman-bytes-logo";
import { useMatches } from "react-router";
import {Link, useLoaderData} from "@remix-run/react";
import { json, type LoaderArgs } from '@remix-run/node';
import {format, parseISO} from "date-fns";

export const loader = async ({ params }: LoaderArgs) => {
    let path = params;
    console.log('path', path);

    const currentDevToPost = await fetch(`https://dev.to/api/articles/${path.slug}`).then(res => res.json());

    console.log('current post', currentDevToPost);

    return json({
        article: currentDevToPost,
    })
}

const formatTime = (time: string) => {
    return format(parseISO(time), 'MM/dd/yyyy');
}

function Slug() {
    const matches = useMatches();
    const currentRoute = matches[1];
    const data = useLoaderData();

    console.log('data', data);

    return (
        <main
            className="container relative border-2 font-newMono border-romanBlack rounded-3xl bg-white my-28 bg-contain overflow-hidden"
            style={{
                backgroundImage: `url(${data.article.cover_image})`,
            }}
        >
            <div className="absolute top-10 left-0 right-0 text-center text-romanPrimary mb-16 bg-white w-fit mx-auto">{`~ ${currentRoute.pathname} `}</div>
            <div className="pt-48 px-28 pb-10 bg-white bg-opacity-90 relative">
                <RomanBytesLogo/>
                <Link className="absolute right-28 bottom-10" to="/blog">../ Back to blog</Link>
                <h2 className="font-extrabold text-5xl mt-20">{data.article.title}</h2>
            </div>
            <div className="bg-white px-28">
                <div className="w-4/12">
                    <div>{formatTime(data.article.created_at)}</div>
                    <div className="flex items-center ml-16">
                        {data.article.tags.map((tag) => <div key={tag} className="text-romanPrimary text-md mr-4">#{tag}</div>)}
                    </div>
                    <div className="mt-20" dangerouslySetInnerHTML={{__html: data.article.body_html}}/>
                </div>
            </div>
        </main>
    );
}

export default Slug;