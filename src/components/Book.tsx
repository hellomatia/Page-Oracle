import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import RandomPageButton from './RandomPageButton'; // 랜덤 페이지 버튼 임포트
import { EmptyPage, ContentPage, CoverPage } from './PageComponents';
import './Book.css';

function Book() {
    const flipBookRef = useRef(null); // FlipBook 참조 생성
    const totalPages = 8; // 총 페이지 수

    const goToRandomPage = () => {
        const randomPage = Math.floor(Math.random() * totalPages * 2) / 2; // 0에서 totalPages까지 랜덤 페이지 생성
        if (flipBookRef.current) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            flipBookRef.current.pageFlip().flip(randomPage); // 랜덤 페이지로 이동
        }
    };

    const pageRefs = {
        emptyPage: useRef<HTMLDivElement>(null),
        contentPage: useRef<HTMLDivElement>(null),
        coverPage: useRef<HTMLDivElement>(null),
    };

    return (
        <div className={"container"}>
            <HTMLFlipBook className="flip-book"
                          autoSize={true}
                          width={550}
                          height={733}

                          size={"stretch"}
                          minWidth={315}
                          maxWidth={1000}
                          minHeight={420}
                          maxHeight={1350}

                          maxShadowOpacity={0.5}
                          showCover={true}
                          mobileScrollSupport={false}
                          ref={flipBookRef}>
                <CoverPage ref={pageRefs.coverPage} title="책님..." isCoverTop />
                <EmptyPage ref={pageRefs.emptyPage} />
                <ContentPage
                    ref={pageRefs.contentPage}
                    text="기다리면 된다."
                />
                <EmptyPage ref={pageRefs.emptyPage} />
                <ContentPage
                    ref={pageRefs.contentPage}
                    text="포기해라."
                />
                <EmptyPage ref={pageRefs.emptyPage} />
                <ContentPage
                    ref={pageRefs.contentPage}
                    text="무조건 믿어라"
                />
                <EmptyPage ref={pageRefs.emptyPage} />
                <ContentPage
                    ref={pageRefs.contentPage}
                    text="반대로 생각해라"
                />
                <CoverPage ref={pageRefs.coverPage} title="끝..." isCoverBottom />
            </HTMLFlipBook>

            <br></br>
            <br></br>
            <br></br>

            <div className="buttonContainer">
                <RandomPageButton onClick={goToRandomPage}/> {/* 랜덤 페이지 버튼 추가 */}
            </div>
        </div>
    );
}

export default Book;
