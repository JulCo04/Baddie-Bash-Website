import React from "react";
import PinkNeonText from "./PinkNeonText";

const Events: React.FC = () => {
    return (
        <div className="w-full h-fit pl-96 pr-96 pt-24 pd-24 ">
            <div className="flex flex-col gap-10">
                <h1 className="text-6xl text-center">Upcoming Events</h1>
                <span className="text-center">Click to view find to see upcoming events</span>
                <button className="border-[0.1rem] border-[#62B2DE] bg-transparent rounded-full shadow-[0_0_25px_8px_rgba(98,178,222,0.5)] px-4 py-2 max-w-fit m-auto">
                    <PinkNeonText text="Events" size="3xl" />
                </button>
            </div>
        </div>
    );
};

export default Events;