import React from "react";

const BottomBar: React.FC = () => {
    return (
        <div className="relative flex bg-gradient-to-t from-baddie-pink h-16 w-screen p-5 items-center">
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <span className="text-lg text-white border-b-2 border-transparent hover:border-b-white cursor-pointer">
                    baddiebashpresents@gmail.com
                </span>
            </div>
            <div className="flex gap-5 absolute right-10">
                <a href="https://www.instagram.com/baddiebashpresents/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="instagram-logo.png"
                        alt="Instagram logo"
                        className="h-8 cursor-pointer"
                    />
                </a>
                <a href="https://www.tiktok.com/@baddiebashpresents?lang=en" target="_blank" rel="noopener noreferrer">
                    <img
                        src="tiktok-logo.png"
                        alt="Tiktok logo"
                        className="h-8 cursor-pointer"
                    />
                </a>
                <a href="https://www.facebook.com/p/Baddie-Bash-Presents-61555679796746/?paipv=0&eav=AfZ7hrAW0kx6WqWN1jfKlP3oIuz4SE5AM6K10whIlSVqEaS5JnLjvkI4X0NvEAaPhjk&_rdr" target="_blank" rel="noopener noreferrer">
                    <img
                        src="facebook-logo.png"
                        alt="Facebook logo"
                        className="h-8 cursor-pointer"
                    />
                </a>
            </div>
        </div>
    );
};

export default BottomBar;

