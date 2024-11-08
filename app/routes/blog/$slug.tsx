import React from 'react';
import RomanBytesLogo from "~/components/roman-bytes-logo";
import { useMatches } from "react-router";
import { Link } from "@remix-run/react";

function Slug() {
    const matches = useMatches();
    const currentRoute = matches[1];


    return (
        <main className="container relative border-2 border-romanBlack rounded-3xl bg-white pt-32 px-28 pb-28 my-28">
            <div className="absolute top-10 left-0 right-0 text-center text-romanPrimary mb-16">{`~ ${currentRoute.pathname} `}</div>
            <RomanBytesLogo/>
            <Link to="/blog">../ Back to blog</Link>
            <div>
                This is a single blog post
            </div>
        </main>
    );
}

export default Slug;