import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
        </Routes>
    );
}

export default AppRouter;