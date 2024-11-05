import React from 'react';

interface RandomPageButtonProps {
    onClick: () => void; // 클릭 시 호출될 함수
}

const RandomPageButton: React.FC<RandomPageButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick}>Go to Random Page</button>
    );
};

export default RandomPageButton;
