import { motion } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from 'react-dom';
import ThemeToggle from "../components/themetoggle/ThemeToggle";
import "./HeaderMain.css";

// Menu animation variants
const menuVariants = {
    hidden: {
        opacity: 0,
        y: -20,
        transition: { when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.05,
            staggerDirection: 1,
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

const menuItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } }
};

const HeaderPortal = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    const portalElement = document.getElementById('header-portal');

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    return mounted && portalElement ? createPortal(children, portalElement) : null;
};

const HeaderMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState("Home");
    const [isSolid, setIsSolid] = useState(false);
    const [isHome, setIsHome] = useState(true);
    const menuButtonRef = useRef(null);
    const menuRef = useRef(null);

    const handleToggle = () => {
        setMenuOpen(prev => !prev);
        if (menuButtonRef.current) menuButtonRef.current.blur();
    };

    const handleKeyDown = useCallback((e) => {
        if (e.key === "Escape" && menuOpen) {
            setMenuOpen(false);
            if (menuButtonRef.current) {
                menuButtonRef.current.focus();
            }
        }
    }, [menuOpen]);

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.removeEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown, menuOpen]);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const options = {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const newActive = entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1);
                    setCurrentSection(newActive);
                    setIsHome(entry.target.id === 'home');
                }
            });
        }, options);

        sections.forEach(sect => observer.observe(sect));
        return () => sections.forEach(sect => observer.unobserve(sect));
    }, []);

    const handleScroll = useCallback(() => {
        const homeSection = document.querySelector(".home-container");
        const header = document.querySelector(".site__header");
        if (homeSection && header) {
            const shouldBeSolid = window.scrollY > homeSection.offsetHeight - header.offsetHeight;
            setIsSolid(shouldBeSolid);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const handleMenuItemClick = (section) => {
        setMenuOpen(false);
        const targetId = section.toLowerCase();
        const element = document.getElementById(targetId);
        if (element) {
            const offset = 80;
            const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
        setCurrentSection(section);
    };

    const navigationLinks = (
        <ul className="the_menu-horizontal">
            {["Home", "About", "Portfolio", "Contact"].map(item => (
                <li key={item} className={`menu_item ${currentSection === item ? "active" : ""}`}>
                    <a href={`#${item.toLowerCase()}`}
                        onClick={() => handleMenuItemClick(item)}
                        aria-label={`Go to ${item} section`}>
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    );

    const headerContent = (
        <div className="header-portal-content">
            <a className="navbar-brand simple-brand"
                href="#home"
                onClick={() => handleMenuItemClick('Home')}
                aria-label="Go to home section">
                Invest<span style={{ fontWeight: 'bold' }}>Learn</span>
            </a>
            {navigationLinks}
            <div className="header-buttons">
                <ThemeToggle />
                <motion.button
                    className={`menu__button ${menuOpen ? "open" : ""}`}
                    onClick={handleToggle}
                    aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                    aria-controls="primary-navigation"
                    aria-expanded={menuOpen}
                    ref={menuButtonRef}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                    initial={false}
                    transition={{ duration: 0.3 }}
                >
                    {[...Array(3)].map((_, i) => (
                        <span className="bar" key={i}>
                            <span className="bar-left"></span>
                            <span className="bar-right"></span>
                        </span>
                    ))}
                </motion.button>
            </div>
        </div>
    );

    return (
        <>
            {/* Header Background */}
            <header className={`site__header ${isSolid ? "solid" : ""}`} role="banner">
                {/* No interactive content here */}
            </header>

            {/* Portal Header Content */}
            <HeaderPortal>
                {headerContent}
            </HeaderPortal>

            {/* Decorative corners */}
            <div className="decorative-corners">
                <div className="br-top"></div>
                <div className="br-bottom"></div>
                <div className="br-left"></div>
                <div className="br-right"></div>
            </div>
        </>
    );
};

export default React.memo(HeaderMain);