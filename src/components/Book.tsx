import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import RandomPageButton from './RandomPageButton'; // 랜덤 페이지 버튼 임포트
import './Book.scss';

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
                <div className="page page-cover page-cover-top" data-density="hard">
                    <div className="page-content">
                        <h2>책님...</h2>
                    </div>
                </div>
                <div className="page">
                    <div className="top-background"></div>
                    <div className="page-content"></div>
                    <div className="bottom-background"></div>
                </div>
                <div className="page">
                    <div className="top-background"></div>
                    <div className="page-content">
                        <h2>기다리면 된다.</ h2>
                    </div>
                    <div className="bottom-background"></div>
                </div>
                <div className="page">
                    <div className="page-content">
                        <h2 className="page-header">Page header 1</h2>
                        <div className="page-image"></div>
                        <div className="page-text">기다리면 된다.
                        </div>
                        <div className="page-footer">2</div>
                    </div>
                </div>
                <div className="page">
                    <div className="top-background"></div>
                    <div className="page-content"></div>
                    <div className="bottom-background"></div>
                </div>
                <div className="page">
                    <div className="page-content">
                        <h2 className="page-header">Page header 1</h2>
                        <div className="page-image"></div>
                        <div className="page-text">포기해라.
                        </div>
                        <div className="page-footer">2</div>
                    </div>
                </div>
                <div className="page">
                    <div className="top-background"></div>
                    <div className="page-content"></div>
                    <div className="bottom-background"></div>
                </div>
                <div className="page">
                    <div className="page-content">
                        <h2 className="page-header">Page header 1</h2>
                        <div className="page-image"></div>
                        <div className="page-text">무조건 믿어라
                        </div>
                        <div className="page-footer">2</div>
                    </div>
                </div>
                <div className="page">
                    <div className="top-background"></div>
                    <div className="page-content"></div>
                    <div className="bottom-background"></div>
                </div>
                <div className="page">
                    <div className="page-content">
                        <h2 className="page-header">Page header 1</h2>
                        <div className="page-image"></div>
                        <div className="page-text">반대로 생각해라
                        </div>
                        <div className="page-footer">2</div>
                    </div>
                </div>
                <div className="page page-cover page-cover-top demoPage" data-density="hard">
                    <div className="page-content">
                        <h2>끝...</h2>
                    </div>
                </div>
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
