import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import "./Home.css";

const handleGetStarted = () => {
    const homeContainer = document.querySelector(".home-container");
    homeContainer.classList.add("active");
    // Smooth scrolling
    const financialData = document.querySelector("#financial-data");
    financialData.scrollIntoView({ behavior: "smooth" });
};

export const Home = () => {
    return (
        <HelmetProvider>
            <div className="home-container">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>InvestiLearn | Financial Data Filtering App</title>
                    <meta name="description" content="The Duolingo for Investing and Stocks." />
                </Helmet>

                <div className="home-content">
                    <h2 className="home-subtitle">Welcome to InvestiLearn</h2>
                    <h1 className="home-title">
                        <Typewriter
                            options={{
                                strings: ["Learn Investing", "Analyze Stocks", "Grow Your Wealth"],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 10,
                            }}
                        />
                    </h1>
                    <a href="#financial-data" className="home-button" onClick={handleGetStarted}>
                        Get Started
                    </a>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Home;