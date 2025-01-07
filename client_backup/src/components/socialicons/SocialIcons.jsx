import { motion } from "framer-motion";
import React from "react";
import {
    FaCircle,
    FaEnvelope,
    FaGithub,
    FaGlobe,
    FaHackerrank,
    FaLinkedin,
} from "react-icons/fa";
import "./style.css";

const ICON_MAPPING = {
    default: FaCircle,
    website: FaGlobe,
    email: FaEnvelope,
    linkedin: FaLinkedin,
    github: FaGithub,
    hackerrank: FaHackerrank,
};

// Variants for the icon container and each icon link
const listVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
            duration: 0.5,
            ease: "easeOut",
        },
    },
    exit: { opacity: 0, y: 10, transition: { duration: 0.5, ease: "easeIn" } },
};

const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
        scale: 1.2,
        rotate: 10,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 12,
        },
    },
    tap: { scale: 0.9 },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3 } },
};

const socialProfiles = {
    website: "https://gamikaru.dev",
    email: "mailto:gavriel@gamikaru.dev",
    linkedin: "https://linkedin.com/in/gavriel-rudolph",
    github: "https://github.com/GAMIKARU",
    hackerrank: "https://www.hackerrank.com/profile/gavrielmrudolph",
};

export const Socialicons = ({ isMobile, isOpen }) => {
    return (
        <motion.nav
            className={`stick_follow_icon ${isMobile ? "mobile" : ""} ${isOpen ? "open" : ""}`}
            variants={isMobile ? listVariants : {}}
            initial={isMobile ? "hidden" : false}
            animate={isMobile ? (isOpen ? "visible" : "hidden") : false}
            exit={isMobile ? "exit" : false}
            aria-label="Social media links"
        >
            <motion.ul>
                {Object.entries(socialProfiles).map(([platform, url]) => {
                    const IconComponent =
                        ICON_MAPPING[platform] || ICON_MAPPING.default;

                    return (
                        <motion.li key={platform} variants={isMobile ? listVariants : {}}>
                            <motion.a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={isMobile ? iconVariants : {}}
                                initial={isMobile ? "rest" : false}
                                whileHover={isMobile ? "hover" : false}
                                whileTap={isMobile ? "tap" : false}
                                exit={isMobile ? "exit" : false}
                                aria-label={`Visit my ${platform} profile`}
                            >
                                <IconComponent />
                            </motion.a>
                        </motion.li>
                    );
                })}
            </motion.ul>
        </motion.nav>
    );
};

export default Socialicons;