import React, { forwardRef } from 'react';
import Page from './Page';

const EmptyPage = forwardRef<HTMLDivElement, {}>((_props, ref) => {
    return <Page ref={ref} content={null} />;
});

interface ContentPageProps {
    header?: string;
    image?: React.ReactNode;
    text: string;
    footer?: string;
    hasBorder?: boolean;
}

const ContentPage = forwardRef<HTMLDivElement, ContentPageProps>(
    ({ header, image, text, footer, hasBorder = true }, ref) => {
        return (
            <Page
                ref={ref}
                hasBorder={hasBorder}
                content={
                    <>
                        {header && <h2 className="page-header">{header}</h2>}
                        {image && <div className="page-image">{image}</div>}
                        <div className="page-text">{text}</div>
                        {footer && <div className="page-footer">{footer}</div>}
                    </>
                }
            />
        );
    }
);

interface CoverPageProps {
    title: string;
    isCoverTop?: boolean;
    isCoverBottom?: boolean;
}

const CoverPage = forwardRef<HTMLDivElement, CoverPageProps>(
    ({ title, isCoverTop = false, isCoverBottom = false }, ref) => {
        return (
            <Page
                ref={ref}
                className="page-cover"
                isHardPage
                isTopCover={isCoverTop}
                isBottomCover={isCoverBottom}
                content={<h2>{title}</h2>}
            />
        );
    }
);

export { EmptyPage, ContentPage, CoverPage };
