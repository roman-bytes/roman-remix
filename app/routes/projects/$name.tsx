import React from 'react';
import { json, LoaderArgs } from '@remix-run/node';
import RomanBytesLogo from "~/components/roman-bytes-logo";
import { useMatches } from "react-router";
import { useLoaderData, Link } from "@remix-run/react";

export const loader = async ({ params }: LoaderArgs) => {
    let path = params;
    console.log(path);

    const currentRepo = await fetch(`https://api.github.com/repos/roman-bytes/${path.name}`).then(res => res.json());

    // https://api.github.com/repos/roman-bytes/romanum

    return json({
        repo: currentRepo,
    })
}

function Name() {
    const matches = useMatches();
    const currentRoute = matches[1];
    const { repo } = useLoaderData();
    console.log("repo", repo);

    return(
        <div className="container relative border-2 border-romanBlack rounded-3xl bg-white pt-32 px-28 pb-28 my-28">
            <div className="absolute top-10 left-0 right-0 text-center text-romanPrimary mb-16">{`~ ${currentRoute.pathname} `}</div>
            <RomanBytesLogo/>
            <Link to="/projects">../ Back to projects</Link>
            <div>
                add in CMS here.
            </div>
        </div>
    );
}

export default Name;