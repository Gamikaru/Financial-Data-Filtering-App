import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import "./style.css";

const ThemeToggle = () => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme ? storedTheme : prefersDark ? "dark" : "light";

    const [theme, setTheme] = useState(initialTheme);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            className="themetoggle-button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            aria-pressed={theme === "dark"}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
                if (e.key === "Enter") toggleTheme();
            }}
        >
            {theme === "dark" ? <FiMoon /> : <FiSun />}
        </button>
    );
};

export default ThemeToggle;