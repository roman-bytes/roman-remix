import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

const Nav: FunctionComponent = (): ReactElement => (
    <ul className="text-right nav">
        <li>
            <a href="/" className="hover:text-white relative">
                Index
            </a>
        </li>
        <li>
            <a href="/projects" className="hover:text-white relative">
                Projects
            </a>
        </li>
        <li>
            <a href="/about" className="hover:text-white relative">
                About
            </a>
        </li>
    </ul>
);

export default Nav;
