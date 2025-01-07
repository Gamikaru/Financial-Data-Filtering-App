import React from "react";
import HeaderMain from "../header/HeaderMain";
import AnimatedCursor from "../hooks/AnimatedCursor";
import SinglePage from "../pages/SinglePage";
import "./App.css";

export default function App() {
    return (
        <>
            {/* Optional Custom Cursor */}
            <div className="cursor__dot">
                <AnimatedCursor /* your props here */ />
            </div>

            {/* Header */}
            <HeaderMain />

            {/* Main Content */}
            <main id="main-content">
                <SinglePage />
            </main>
        </>
    );
}