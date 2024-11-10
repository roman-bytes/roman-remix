import type { ReactNode, ReactElement } from "react";
import {useMatches} from "react-router";

interface NewLayoutProps {
    children?: ReactNode;
}

export default function NewLayout({ children }: NewLayoutProps): ReactElement {
    const matches = useMatches();
    // const currentRoute = matches[1];
    console.log('currentRoute', matches);
    const isHomePage = false;

    return (
        <div className={`flex flex-col items-center ${isHomePage ? 'justify-center' : ''} h-full w-full`}>
            {children}
        </div>
    );
}
