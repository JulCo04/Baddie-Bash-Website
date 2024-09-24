import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;