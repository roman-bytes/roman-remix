import type { MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from "@remix-run/react";
import React from 'react';
import pic from '../../public/profile-pic.jpg';
import RomanTerminal from '../components/terminal';
import NewIndex from "~/components/new-index";
import NewLayout from "~/components/new-layout"

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
    return {
        title: 'Roman Bytes | Senior Digital Engineer',
        description:
            'Experienced Senior Digital Engineer with a demonstrated history of working in the computer software industry. Skilled in modern Front-end technologies, and Fron-end design. Strong engineering professional with a Bachelor of Arts focused on Graphic Design from Spring Arbor University.',
        'og:url': 'https://romanbytes.dev/',
        'og:type': 'website',
        'og:image': pic,
        'twitter:image': pic,
        'twitter:card': 'summary_large_image',
    };
};
// https://remix.run/guides/routing#index-route
//

export async function loader() {
    return json({
        ENV: {
            FEATURE_NEW_BRAND: process.env.FEATURE_NEW_BRAND,
        }
    })
}

export default function Index() {
    const data = useLoaderData();
    const isNewLayout = data.ENV.FEATURE_NEW_BRAND === 'true';

    if (isNewLayout) {
        return (
            <NewLayout>
                <NewIndex />
            </NewLayout>
        )
    }

    return (
        <div className="flex justify-center items-center w-full">
            <h1 className="font-sans text-white left-2.5 lg:right-2.5 xl:right-5 absolute top-2.5 xl:top-5 text-2xl text-left lg:text-right">
                Hello, I am Jacob Roman, a self taught
                <br /> Senior Digital Engineer based in Michigan.
            </h1>
            <RomanTerminal />
        </div>
    );
}
