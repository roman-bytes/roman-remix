import React from 'react';
import RomanBytesLogo from "~/components/roman-bytes-logo";
import { useMatches } from "react-router";
import {Link, useLoaderData} from "@remix-run/react";
import { json, type LoaderArgs } from '@remix-run/node';
import {format, parseISO} from "date-fns";

export const loader = async ({ params }: LoaderArgs) => {
    let path = params;
    const currentDevToPost = await fetch(`https://dev.to/api/articles/${path.slug}`).then(res => res.json());

    return json({
        article: currentDevToPost,
    })
}

const formatTime = (time: string) => {
    return format(parseISO(time), 'MMMM dd, yyyy');
}

function Slug() {
    const matches = useMatches();
    const currentRoute = matches[1];
    const data = useLoaderData();
    const hasCoverImage = data.article.cover_image;

    return (
        <main
            className="content container relative border-2 font-newMono border-romanBlack rounded-3xl bg-white my-28 bg-contain overflow-hidden"
            style={{
                backgroundColor: hasCoverImage ? '' : '#1F242B',
                backgroundImage: `url(${data.article.cover_image})`,
            }}
        >
            <div className={`${hasCoverImage ? 'bg-white' : 'bg-romanBlack'} absolute top-10 left-0 right-0 text-center text-romanPrimary mb-16 w-fit mx-auto`}>{`~ ${currentRoute.pathname} `}</div>
            <div className="pt-48 px-28 pb-10 relative">
                <RomanBytesLogo/>
                <Link className="absolute right-28 bottom-10" to="/blog">../ Back to blog</Link>
                <h2 className={`${hasCoverImage ? "" : 'text-romanPrimary'} font-extrabold text-5xl mt-20 w-3/4`}>{data.article.title}</h2>
            </div>
            <div className="bg-white px-28 pb-24">
                <div className="w-6/12">
                    <div className="text-romanPrimary font-bold pt-10">{formatTime(data.article.created_at)}</div>
                    <div className="flex items-center">
                        {data.article.tags.map((tag) => <div key={tag} className="text-romanPrimary text-md mr-4">#{tag}</div>)}
                    </div>
                    <div className="mt-20" dangerouslySetInnerHTML={{__html: data.article.body_html}}/>
                </div>
            </div>
        </main>
    );
}

export default Slug;