import React from 'react';

function NewFooter() {
    const socialLinks = [
        {
            social: 'X',
            link: 'https://x.com/romanbytes',
        },
        {
            social: 'github',
            link: 'https://github.com/roman-bytes',
        },
        {
            social: 'codepen',
            link: 'https://codepen.io/romanbytes',
        },
        {
            social: 'dev.to',
            link: 'https://dev.to/romanbytes',
        }
    ]

    return (
        <ul className="flex flex-col items-end">
            {socialLinks.map(link => (
                <a
                    key={link.social}
                    href={link.link}
                    className="text-romanPrimary w-28 text-left"
                    target="_blank"
                >
                    // {link.social}
                </a>
            ))}
        </ul>
    );
}

export default NewFooter;