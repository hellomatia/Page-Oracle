import React, { forwardRef } from 'react';

interface PageProps {
    content: React.ReactNode;
    className?: string;
    isHardPage?: boolean;
    isTopCover?: boolean;
    isBottomCover?: boolean;
    hasBorder?: boolean;
}

const Page = forwardRef<HTMLDivElement, PageProps>(
    ({ content, className = '', isHardPage = false, isTopCover = false, isBottomCover = false, hasBorder = false }, ref) => {
        const pageClassName = `page ${className} ${isHardPage ? 'hard' : ''} ${
            isTopCover ? 'page-cover page-cover-top' : ''
        } ${isBottomCover ? 'page-cover page-cover-bottom' : ''}`;

        return (
            <div ref={ref} className={pageClassName}>
                {hasBorder && <div className="top-background"></div>}
                {isTopCover && <div className="golden-frame"></div>}
                <div className="page-content">{content}</div>
                {hasBorder && <div className="bottom-background"></div>}
            </div>
        );
    }
);

export default Page;
