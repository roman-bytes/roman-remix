import {
    Link,
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useCatch,
} from '@remix-run/react';
import Layout from './components/layout';
import type { LinksFunction } from '@remix-run/node';

import tailwindUrl from './styles/tailwind.css';

// https://remix.run/api/app#links
export let links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: tailwindUrl }];
};

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
    return (
        <Document>
            <Layout>
                <Outlet />
            </Layout>
        </Document>
    );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
    console.error(error);
    return (
        <Document title="Error!">
            <Layout>
                <div>
                    <h1>There was an error</h1>
                    <p>{error.message}</p>
                    <hr />
                    <p>
                        Hey, developer, you should replace this with what you
                        want your users to see.
                    </p>
                </div>
            </Layout>
        </Document>
    );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
    let caught = useCatch();

    let message;
    switch (caught.status) {
        case 401:
            message = (
                <p>
                    Oops! Looks like you tried to visit a page that you do not
                    have access to.
                </p>
            );
            break;
        case 404:
            message = (
                <p>
                    What you are looking for is not there. Please visit the home
                    page and try again.
                </p>
            );
            break;

        default:
            throw new Error(caught.data || caught.statusText);
    }

    return (
        <Document title={`${caught.status} ${caught.statusText}`}>
            <Layout>
                <div className="mt-20 mb-40 mx-auto p-14 text-md font-sans text-white border border-white bg-romanBlack">
                    <h1 className="text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading">
                        {caught.status}: {caught.statusText}
                    </h1>
                </div>
            </Layout>
        </Document>
    );
}

function Document({
    children,
    title,
}: {
    children: React.ReactNode;
    title?: string;
}) {
    return (
        <html lang="en" className="w-full h-full font-mono">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                {title ? <title>{title}</title> : null}
                <Meta />
                <Links />
            </head>
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-T0T5SRHCGN"
            ></script>
            <body className="bg-romanBlack w-full h-full">
                {children}
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === 'development' && <LiveReload />}
            </body>
        </html>
    );
}
