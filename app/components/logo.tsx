import type { FunctionComponent, ReactElement } from 'react';
import React from 'react';

const Logo: FunctionComponent = (): ReactElement => (
    <a href="/" aria-label="Go back to home page">
        <img
            className="w-16"
            src="/roman-bytes-mark.svg"
            alt="Roman Bytes Logo Mark"
        />
    </a>
);

export default Logo;
