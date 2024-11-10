import React from 'react';
import RomanBytesLogo from "~/components/roman-bytes-logo";
import { useMatches } from "react-router";
import {Link, useLoaderData} from "@remix-run/react";
import { json, LoaderArgs } from '@remix-run/node';

export const loader = async ({ params }: LoaderArgs) => {
    let path = params;
    console.log('path', path);

    const currentDevToPost = await fetch(`https://dev.to/api/articles/${path.slug}`).then(res => res.json());

    console.log('current post', currentDevToPost);

    return json({
        article: currentDevToPost,
    })
}

function Slug() {
    const matches = useMatches();
    const currentRoute = matches[1];
    const data = useLoaderData();

    console.log('data', data);

    return (
        <main className="container relative border-2 border-romanBlack rounded-3xl bg-white pt-32 px-28 pb-28 my-28">
            <div className="absolute top-10 left-0 right-0 text-center text-romanPrimary mb-16">{`~ ${currentRoute.pathname} `}</div>
            <RomanBytesLogo/>
            <Link to="/blog">../ Back to blog</Link>
            <div>
                <h2 className="font-extrabold text-5xl">{data.article.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: data.article.body_html }} />
            </div>
        </main>
    );
}

export default Slug;