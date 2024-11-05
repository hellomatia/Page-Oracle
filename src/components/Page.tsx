// components/Page.tsx
import React from 'react';

interface PageProps {
    text: string;
}

const Page: React.FC<PageProps> = ({ text }) => {
    return (
        <div className="page">
            <p>{text}</p>
        </div>
    );
}

export default Page;
