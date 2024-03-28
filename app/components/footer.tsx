import type { FunctionComponent, ReactElement } from 'react';

const Footer: FunctionComponent = (): ReactElement => (
    <footer className="hidden lg:block w-full fixed top-1/2 text-romanText">
        <div className="absolute xl:left-5 lg:left-2.5 text-sm origin-center transform -rotate-90 -translate-x-1/2">
            Made with love from Michigan.
        </div>
        <div className="absolute xl:right-5 lg:right-2.5 text-sm origin-center transform rotate-90 translate-x-1/2">
            <a href="https://github.com/roman-bytes/roman-remix">Source Code</a>
        </div>
    </footer>
);

export default Footer;
