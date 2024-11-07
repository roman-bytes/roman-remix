import React from 'react';

interface PlusProps {
    className?: string;
}

function Plus({ className }: PlusProps) {
    return (
        <svg className={className} width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.96429 5V2.97968H0V1.99774H1.96429V0H3.03571V1.99774H5V2.97968H3.03571V5H1.96429Z" fill="black"/>
        </svg>
    );
}

export default Plus;