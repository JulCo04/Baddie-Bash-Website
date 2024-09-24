import React from "react";
import NavigationBar from "../components/NavigationBar";
import BottomBar from "../components/BottomBar";
import TopSection from "../components/TopSection";
import AboutUs from "../components/AboutUs";
import Events from "../components/Events";
import ContactUs from "../components/ContactUs";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Navigation Bar */}
      <header className="fixed z-10">
        <NavigationBar />
      </header>

      {/* Main content with HELLO */}
      <main className="flex flex-col justify-center pt-24 pb-24 bg-black text-white">
        <TopSection />
        <AboutUs />
        <Events />
        <ContactUs />
      </main>

      {/* Footer Bar */}
      <footer className="fixed z-10 bottom-0 left-0 ">
        <BottomBar />
      </footer>
    </div>
  );
};

export default HomePage;
