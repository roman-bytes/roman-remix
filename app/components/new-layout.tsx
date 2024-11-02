import type { ReactNode, ReactElement } from "react";

interface NewLayoutProps {
    children?: ReactNode;
}

export default function NewLayout({ children }: NewLayoutProps): ReactElement {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            {children}
        </div>
    );
}
