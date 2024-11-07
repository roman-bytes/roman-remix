import RomanBytesLogo from "~/components/roman-bytes-logo";
import { Link } from '@remix-run/react';
import NewFooter from "~/components/newFooter";
import {useMatches} from "react-router";

export default function NewIndex() {
    const matches = useMatches();
    const currentRoute = matches[1];

  return (
         <div className="container relative border-2 border-romanBlack rounded-3xl bg-white pt-32 px-28 pb-28">
             <div className="absolute top-10 left-0 right-0 text-center text-romanPrimary">{`~ ${currentRoute.pathname} `}</div>
             <RomanBytesLogo />
             <div className="font-newMono mt-12 w-5/12">
                 <p>
                     I’m Jacob Roman, also known as Roman Bytes, a Senior Digital Engineer with over a decade of
                     experience leading multiple teams to build high-performance web applications. I love clean design,
                     video games, and hockey.
                 </p>
                 <h2 className="font-bold mt-8">Thoughts</h2>
                 <p>
                     I don’t write much. I am looking to change that. You can see any future posts on {' '}
                     <Link
                         to="/blog"
                         className="text-romanPrimary underline"
                     >
                         my blog page.
                     </Link>
                 </p>
                 <h2 className="font-bold mt-8">Other</h2>
                 <p>
                     I have a number of side projects that I am currently working on. You can see {' '}
                     <Link
                         to="/projects"
                         className="text-romanPrimary underline"
                     >
                         those projects here.
                     </Link>
                 </p>
             </div>
             <NewFooter/>
         </div>
  );
}