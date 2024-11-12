import React from 'react';
import {useMatches} from "react-router";
import RomanBytesLogo from "~/components/roman-bytes-logo";

function NewFooter() {
    const socialLinks = [
        {
            social: 'X',
            link: 'https://x.com/romanbytes',
        },
        {
            social: 'github',
            link: 'https://github.com/roman-bytes',
        },
        {
            social: 'codepen',
            link: 'https://codepen.io/romanbytes',
        },
        {
            social: 'dev.to',
            link: 'https://dev.to/romanbytes',
        }
    ]
    const matches = useMatches();
    const currentRoute = matches[1];

    if (currentRoute.pathname === '/') {
        return (
            <ul className="flex flex-col lg:items-end mt-10 lg:mt-0 ">
                {socialLinks.map(link => (
                    <a
                        key={link.social}
                        href={link.link}
                        className="text-romanPrimary w-28 text-left"
                        target="_blank"
                    >
                        // {link.social}
                    </a>
                ))}
            </ul>
        );
    }
   return (
       <div className="flex flex-row justify-between">
           <RomanBytesLogo/>
           <ul className="flex flex-col items-end">
               {socialLinks.map(link => (
                   <a
                       key={link.social}
                       href={link.link}
                       className="text-romanPrimary w-28 text-left"
                       target="_blank"
                   >
                       // {link.social}
                   </a>
               ))}
           </ul>
       </div>
   )
}

export default NewFooter;