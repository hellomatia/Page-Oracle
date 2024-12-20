import { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import RandomPageButton from './RandomPageButton'; // 랜덤 페이지 버튼 임포트
import { EmptyPage, ContentPage, CoverPage } from './PageComponents'; // 컴포넌트 임포트
import './Book.css';
import bookData from '../data/BookData.json'; // JSON 데이터 가져오기

function Book() {
    const flipBookRef = useRef(null); // FlipBook 참조 생성
    const totalPages = bookData.length * 2; // 총 페이지 수

    const goToRandomPage = () => {
        // 커버 페이지를 제외한 범위에서 랜덤 페이지를 선택
        const randomPage = Math.floor(Math.random() * ((totalPages - 2) / 2)) * 2 + 2; // 짝수 페이지만 선택
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if (flipBookRef.current.pageFlip().getCurrentPageIndex() != 0) {
            // 먼저 커버 페이지로 이동 후 랜덤 페이지로 이동
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            flipBookRef.current.pageFlip().flip(0); // 첫 번째 커버 페이지로 이동
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                flipBookRef.current.pageFlip().flip(randomPage); // 랜덤 페이지로 이동
            }, 1100); // 약간의 딜레이 추가
        } else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            flipBookRef.current.pageFlip().flip(randomPage); // 랜덤 페이지로 이동
        }
    };

    // JSON 데이터 기반으로 페이지 생성 함수
    const createBookPages = () => {
        const pages = [];

        // CoverPage 추가
        pages.push(<CoverPage key="cover-top" title="책님..." isCoverTop />);

        // bookData로 페이지 추가
        bookData.forEach((page, index) => {
            pages.push(<EmptyPage key={`empty-${index}`} />);
            pages.push(<ContentPage key={`content-${index}`} text={page.text} />);
        });

        // 마지막 CoverPage 추가
        pages.push(<CoverPage key="cover-bottom" title="끝..." isCoverBottom />);

        return pages;
    };

    return (
        <div className={"container"}>
            <div className="bookContainer">
                <HTMLFlipBook className="flip-book"
                              autoSize={true}
                              width={400}
                              height={535}
                              size={"stretch"}
                              minWidth={315}
                              maxWidth={500}
                              minHeight={420}
                              maxHeight={600}
                              maxShadowOpacity={0.5}
                              showCover={true}
                              mobileScrollSupport={false}
                              ref={flipBookRef}
                              clickEventForward={true}
                              disableFlipByClick={true}
                              drawShadow={true}
                              flippingTime={1000}
                              showPageCorners={true}
                              startPage={0}
                              startZIndex={0}
                              style={{}}
                              swipeDistance={0}
                              useMouseEvents={true}
                              usePortrait={false}
                    >
                {createBookPages()}
            </HTMLFlipBook></div>


            <br />
            <br />
            <br />

            <div className="buttonContainer">
                <RandomPageButton onClick={goToRandomPage}/> {/* 랜덤 페이지 버튼 추가 */}
            </div>
        </div>
    );
}

export default Book;
