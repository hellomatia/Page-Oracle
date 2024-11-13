import React from 'react';

interface RandomPageButtonProps {
    onClick: () => void; // 클릭 시 호출될 함수
}

const RandomPageButton: React.FC<RandomPageButtonProps> = ({ onClick }) => {
    return (
        <button className={'btn'} onClick={onClick}>답을 알려주세요~~</button>
    );
};

export default RandomPageButton;
