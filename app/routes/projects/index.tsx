import { useLoaderData, Link } from "@remix-run/react";

type RepoData = {
    topics: Array<string>;
    url: string;
    id: string;
    private: boolean;
    name: string;

};

export const loader = async () => {
    const fusilierRepos = fetch('https://api.github.com/orgs/fusilier-farms/repos').then(res => {
        console.log('res', res)
        return res.json();
    });
    const bytesRepos = await fetch('https://api.github.com/users/roman-bytes/repos').then(response => response.json());
    // const data = [...bytesRepos, ...fusilierRepos];
    // const portfolio = data.filter((repo: RepoData) => repo.topics.includes('portfolio'))
    // return portfolio;
    return fusilierRepos;
};

export default function Projects() {
    const repos = useLoaderData();
    console.log('repos', repos);

    const repoTiles = repos.map((repo: RepoData) => {
        return (
            <Link
                to={repo.private ? '' : repo.url}
                key={repo.id}
                target="_blank"
                className="w-full overflow-hidden my-2 px-2 xl:w-1/3"
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
            </Link>
        );
    });

    return (
        <div className="container flex flex-col">
            <h1 className="text-4xl text-white p-4 border-b border-white">
                Projects
            </h1>
            <div className="flex flex-wrap p-4 xl:-mx-2 overflow-hidden lg:mt-4 text-white mb-20">
                {repoTiles}
            </div>
        </div>
    );
}