import React from "react";

const NavigationBar: React.FC = () => {
    
    return (
      <div className="flex bg-gradient-to-b from-baddie-pink h-20 w-screen p-5 items-center">
        
        {/* Icon */}
        <button className="absolute left-5 p-2 select-none">
        <img
            src="BaddieBashLogo.png"
            alt="BaddieBash Icon"
            className="h-16"
        />
        </button>

        <div className="flex w-full justify-center text-lg font-semibold select-none">
            <div className="flex gap-32">
                <span className="text-white border-b-2 border-transparent hover:border-b-white cursor-pointer">
                    ABOUT US
                </span>
                <span className="text-white border-b-2 border-transparent hover:border-b-white cursor-pointer">
                    UPCOMING EVENTS
                </span>
                <span className="text-white border-b-2 border-transparent hover:border-b-white cursor-pointer">
                    GALLERY
                </span>
                <span className="text-white border-b-2 border-transparent hover:border-b-white cursor-pointer">
                    CONTACT US
                </span>
            </div>
        </div>

      </div>
    );
  };
  
  export default NavigationBar;