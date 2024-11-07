import { useLoaderData, Link } from '@remix-run/react';
import {json} from "@remix-run/node";
import RomanBytesLogo from "~/components/roman-bytes-logo";
import {useMatches} from "react-router";
import Plus from "~/components/plus";

type RepoData = {
    languages_url: string;
    languages: string;
    topics: Array<string>;
    html_url: string;
    id: string;
    private: boolean;
    name: string;
    updated_at: string;
    description: string;
};

export const loader = async () => {

    const bytesRepos = await fetch(
        'https://api.github.com/users/roman-bytes/repos?sort=updated_at'
    ).then((response) => response.json());

    const portfolio = bytesRepos.filter((repo: RepoData) =>
        repo.topics.includes('portfolio')
    );

    const projects = await Promise.all(portfolio.map(async (repo: RepoData) => {
        return {
           topics: repo.topics,
           html_url: repo.html_url,
           id: repo.id,
           private: repo.private,
           name: repo.name,
           updated_at: repo.updated_at,
           description: repo.description,
           languages:  await fetch(repo.languages_url).then((response) => response.json()),
        }
    }));

    return json({
        repos: projects,
        ENV: {
            FEATURE_NEW_BRAND: process.env.FEATURE_NEW_BRAND,
        }
    });
};

export default function Projects() {
    const { repos, ENV } = useLoaderData();
    const matches = useMatches();
    const currentRoute = matches[1];
    const isNewLayout = ENV?.FEATURE_NEW_BRAND === 'true';

    const repoTiles = repos.map((repo: RepoData) => {
        return (
            <a
                href={repo.private ? '' : repo.html_url}
                key={repo.id}
                target="_blank"
                className="w-full overflow-hidden my-2 px-2 xl:w-1/3"
                rel="noreferrer"
            >
                <div className="border border-white bg-romanBlack p-4 flex justify-between items-center cursor-pointer hover:border-romanYellow hover:bg-romanYellow hover:text-romanBlack">
                    <div>{repo.name}</div>
                    {repo.private ? (
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            className="fill-current"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17 8.5H18C19.1 8.5 20 9.4 20 10.5V20.5C20 21.6 19.1 22.5 18 22.5H6C4.90002 22.5 4 21.6 4 20.5V10.5C4 9.4 4.90002 8.5 6 8.5H7V6.5C7 3.74 9.23999 1.5 12 1.5C14.76 1.5 17 3.74 17 6.5V8.5ZM12 3.5C10.34 3.5 9 4.84 9 6.5V8.5H15V6.5C15 4.84 13.66 3.5 12 3.5ZM6 20.5V10.5H18V20.5H6ZM14 15.5C14 16.6 13.1 17.5 12 17.5C10.9 17.5 10 16.6 10 15.5C10 14.4 10.9 13.5 12 13.5C13.1 13.5 14 14.4 14 15.5Z"
                            />
                        </svg>
                    ) : (
                        <svg
                            width={8}
                            height={12}
                            viewBox="0 0 8 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.70504 0L0.295044 1.41L4.87504 6L0.295044 10.59L1.70504 12L7.70504 6L1.70504 0Z"
                                fill="white"
                            />
                        </svg>
                    )}
                </div>
            </a>
        );
    });
    //TODO: Add this to utils?
    const getLastUpdated = (dateString: string | number | Date) => {
        const date = new Date(dateString);
        const now = new Date();
        const differenceInTime = now.getTime() - date.getTime();

        const minutes = Math.floor(differenceInTime / (1000 * 60));
        const hours = Math.floor(differenceInTime / (1000 * 60 * 60));
        const days = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

        if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else {
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        }
    }

    if (isNewLayout) {

        const repoCards = repos.map((repo: RepoData, ix: number) => {
            const langs = Object.keys(repo.languages);
            return (
                <section key={repo.id} className="w-full lg:w-1/2 max-w-[400] max-h-[225] min-w-[400] min-h-[225] border border-dashed hover:border-solid hover:border-romanPrimary border-romanText p-6 mt-[-1px] ml-0 lg:ml-[-1px] relative">
                    <p className="text-md text-romanPrimary">{getLastUpdated(repo.updated_at)}</p>
                    <h2 className="text-xl">{repo.name}</h2>
                    <p className="mt-8 text-md text-romanPrimary">{repo.description ? repo.description : 'No description'}</p>
                    <footer className="flex justify-between items-center mt-36">
                        <div className="flex flex-row">
                            {langs.map(lang => (
                                <div className="w-10 h-10 ml-[-10px] bg-romanText text-slate-700 rounded-full border-2 border-slate-500 font-bold text-2xl flex items-center justify-center">
                                    {lang[0]}
                                </div>
                            ))}
                        </div>
                        <Link
                            to={`/projects/${repo.name}`}
                        >
                            <svg
                                width="107"
                                height="16"
                                viewBox="0 0 107 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M106.707 8.70711C107.098 8.31658 107.098 7.68342 106.707 7.29289L100.343 0.928932C99.9526 0.538408 99.3195 0.538408 98.9289 0.928932C98.5384 1.31946 98.5384 1.95262 98.9289 2.34315L104.586 8L98.9289 13.6569C98.5384 14.0474 98.5384 14.6805 98.9289 15.0711C99.3195 15.4616 99.9526 15.4616 100.343 15.0711L106.707 8.70711ZM0 9H106V7H0V9Z"
                                    fill="#BF860F"
                                />
                            </svg>
                        </Link>
                    </footer>
                    <Plus className="absolute top-[-3px] left-[-3px]" />
                    <Plus className="absolute top-[-3px] right-[-3px]" />
                </section>
            )
        })

        return (
            <div className="container relative border-2 border-romanBlack rounded-3xl bg-white pt-32 px-28 pb-28 my-28">
                <div className="absolute top-10 left-0 right-0 text-center text-romanPrimary mb-16">{`~ ${currentRoute.pathname} `}</div>
                <RomanBytesLogo/>

                <div className="flex flex-wrap mt-28 w-full lg:w-10/12">
                    {repoCards}
                </div>
            </div>
        )
    }


    return (
        <div className="container flex flex-col items-center justify-center">
            <h1 className="text-4xl text-white p-4 border-b border-white">
                Projects
            </h1>
            <div className="flex flex-wrap p-4 xl:-mx-2 overflow-hidden lg:mt-4 text-white mb-20">
                {repoTiles}
            </div>
        </div>
    );
}

