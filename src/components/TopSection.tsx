import React from "react";
import PinkNeonText from "./PinkNeonText";

const TopSection: React.FC = () => {
    return (
        <div className="relative w-full h-[45rem] overflow-hidden flex items-center justify-center">
            <img src="video_placeholder.jpg" alt="video" className="w-full h-full" />
            
            <img 
                src="BaddieBashLogo.png" 
                alt="center" 
                className="absolute bottom-48 h-3/4"
            />

            <button className="absolute bottom-32 border-[0.1rem] border-[#62B2DE] bg-transparent rounded-full shadow-[0_0_50px_8px_rgba(98,178,222,1)] px-4 py-2">
                <PinkNeonText text="Buy Tickets" size="3xl" />
            </button>
        </div>
    );
};

export default TopSection;
