import React from "react";

interface PinkNeonTextProps {
    text: string;
    size: string;
}

const PinkNeonText: React.FC<PinkNeonTextProps> = ({ text, size }) => {
    return (
        <div className="tracking-widest">
            <span className={`absolute mx-auto py-2 flex w-fit blur-sm bg-pink-500 bg-clip-text text-${size} box-content text-transparent text-center select-none`}>
                {text}
            </span>
            <span className={`absolute mx-auto py-2 flex w-fit blur-sm bg-pink-500 bg-clip-text text-${size} box-content text-transparent text-center select-none`}>
                {text}
            </span>
            <span className={`absolute mx-auto py-2 flex w-fit blur-sm bg-pink-500 bg-clip-text text-${size} box-content text-transparent text-center select-none`}>
                {text}
            </span>
            <h1
                className={`relative top-0 w-fit h-auto py-2 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-${size} text-white text-center select-auto`}>
                {text}
            </h1>
        </div>
    );
};

export default PinkNeonText;
