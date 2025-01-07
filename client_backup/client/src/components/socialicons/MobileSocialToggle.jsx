import { motion } from "framer-motion";
import React from "react";
import { FiLink, FiX } from "react-icons/fi"; // Import minimal Feather Icons
import "./style.css";

const buttonVariants = {
    rest: {
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 25,
        },
    },
    hover: {
        scale: 1.05,
        rotate: 3,
        transition: {
            duration: 0.2,
        },
    },
    tap: {
        scale: 0.95,
    },
    open: {
        rotate: 90,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 25,
            duration: 0.3,
        },
    },
    close: {
        rotate: -90,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 25,
            duration: 0.3,
        },
    },
};

const MobileSocialToggle = ({ isOpen, onToggle }) => {
    return (
        <motion.button
            className={`mobile_social_toggle ${isOpen ? "open" : ""}`}
            onClick={onToggle}
            aria-label={isOpen ? "Close Social Icons" : "Open Social Icons"}
            variants={buttonVariants}
            initial="rest"
            animate={isOpen ? "open" : "close"}
            whileHover="hover"
            whileTap="tap"
        >
            {isOpen ? <FiX /> : <FiLink />}
        </motion.button>
    );
};

export default MobileSocialToggle;