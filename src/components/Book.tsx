import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import RandomPageButton from './RandomPageButton'; // 랜덤 페이지 버튼 임포트
import './Book.css';

function Book() {
    const flipBookRef = useRef(null); // FlipBook 참조 생성
    const totalPages = 4; // 총 페이지 수

    const goToRandomPage = () => {
        const randomPage = Math.floor(Math.random() * totalPages); // 1에서 totalPages까지 랜덤 페이지 생성
        if (flipBookRef.current) {
            flipBookRef.current.pageFlip().flip(randomPage); // 랜덤 페이지로 이동
        }
    };

    return (
        <div>
            <HTMLFlipBook width={300} height={500} ref={flipBookRef}>
                <div className="demoPage">기다리면 된다.</div>
                <div className="demoPage">포기해라.</div>
                <div className="demoPage">무조건 믿어라</div>
                <div className="demoPage">반대로 생각해라</div>
            </HTMLFlipBook>
            <div className="buttonContainer">
                <RandomPageButton onClick={goToRandomPage}/> {/* 랜덤 페이지 버튼 추가 */}
            </div>
        </div>
    );
}

export default Book;
