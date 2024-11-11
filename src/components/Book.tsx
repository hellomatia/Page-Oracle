import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import RandomPageButton from './RandomPageButton'; // 랜덤 페이지 버튼 임포트
import { EmptyPage, ContentPage, CoverPage } from './PageComponents'; // 컴포넌트 임포트
import './Book.css';
import bookData from '../data/BookData.json'; // JSON 데이터 가져오기

function Book() {
    const flipBookRef = useRef(null); // FlipBook 참조 생성
    const totalPages = bookData.length * 2; // 총 페이지 수

    const goToRandomPage = () => {
        const randomPage = Math.floor(Math.random() * totalPages); // 랜덤 페이지 계산
        if (flipBookRef.current) {
            flipBookRef.current.pageFlip().flip(randomPage); // 랜덤 페이지로 이동
        }
    };

    // JSON 데이터 기반으로 페이지 생성 함수
    const createBookPages = () => {
        const pages = [];
        console.log("Creating pages...");

        // CoverPage 추가
        pages.push(<CoverPage key="cover-top" title="책님..." isCoverTop />);

        // bookData로 페이지 추가
        bookData.forEach((page, index) => {
            pages.push(<EmptyPage key={`empty-${index}`} />);
            pages.push(<ContentPage key={`content-${index}`} text={page.text} />);
        });

        // 마지막 CoverPage 추가
        pages.push(<CoverPage key="cover-bottom" title="끝..." isCoverBottom />);
        console.log(pages);

        return pages;
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
                {createBookPages()}
            </HTMLFlipBook>

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
