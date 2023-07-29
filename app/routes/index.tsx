import type { MetaFunction } from "@remix-run/node";
import React from 'react';
import pic from "../../public/profile-pic.jpg";
import RomanTerminal from '../components/terminal';


// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Roman Bytes | Senior Digital Engineer",
    description: "Experienced Senior Digital Engineer with a demonstrated history of working in the computer software industry. Skilled in modern Front-end technologies, and Fron-end design. Strong engineering professional with a Bachelor of Arts focused on Graphic Design from Spring Arbor University.",
    "og:url": "https://romanbytes.dev/",
    "og:type": "website",
    "og:image": pic,
    "twitter:image": pic,
    "twitter:card": "summary_large_image"
  };
};
                        // https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
      <>
        <h1 className="font-sans text-white left-2.5 lg:right-2.5 xl:right-5 absolute top-2.5 xl:top-5 text-2xl text-left lg:text-right">
          Hello, I am Jacob Roman, a{' '}
          <span className="text-romanYellow line-through"> designer </span>
          <br /> Senior Digital Engineer based in Michigan.
        </h1>
        <RomanTerminal />
      </>
  );
}
