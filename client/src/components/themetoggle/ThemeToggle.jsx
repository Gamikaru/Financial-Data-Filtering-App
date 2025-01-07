import { motion } from "framer-motion";
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

    const iconVariants = {
        initial: { rotate: 0 },
        animate: { rotate: 360 },
    };

    return (
        <motion.button
            className="themetoggle-button"
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Theme"
            aria-pressed={theme === "dark"}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
                if (e.key === "Enter") toggleTheme();
            }}
            transition={{ duration: 1.5 }} // Increased duration for smoother effect
        >
            <motion.span
                key={theme}
                variants={iconVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 1.5, ease: "easeInOut" }} // Increased duration
            >
                {theme === "dark" ? <FiMoon /> : <FiSun />}
            </motion.span>
        </motion.button>
    );
};

export default ThemeToggle;