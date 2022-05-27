import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

const Social: FunctionComponent = (): ReactElement => (
    <ul className="social">
        <li>
            <a
                target="_blank"
                href="https://twitter.com/romanbytes"
                className="hover:text-white relative"
            >
                Twitter
            </a>
        </li>
        <li>
            <a
                target="_blank"
                href="https://github.com/roman-bytes"
                className="hover:text-white relative"
            >
                Github
            </a>
        </li>
        <li>
            <a
                target="_blank"
                href="https://codepen.io/romanbytes"
                className="hover:text-white relative"
            >
                CodePen
            </a>
        </li>
        <li>
            <a
                target="_blank"
                href="https://dev.to/romanbytes"
                className="hover:text-white relative"
            >
                Dev.to
            </a>
        </li>
    </ul>
);

export default Social;
