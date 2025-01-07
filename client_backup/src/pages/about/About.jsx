import { motion } from "framer-motion";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./About.css";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const barVariants = {
    hidden: { width: 0 },
    visible: (custom) => ({
        width: `${custom}%`,
        transition: { duration: 1.2, ease: "easeInOut" },
    }),
};

export const About = () => {
    return (
        <HelmetProvider>
            <motion.section
                className="about-container section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={containerVariants}
            >
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>About | InvestiLearn</title>
                    <meta name="description" content="Learn more about InvestiLearn." />
                </Helmet>

                {/* About Header */}
                <motion.div className="about-header" variants={sectionVariants}>
                    <h1 className="about-title">About InvestiLearn</h1>
                    <hr className="about-divider" />
                </motion.div>

                {/* About Content */}
                <motion.div className="about-content" variants={sectionVariants}>
                    <div className="about-section">
                        <h2 className="section-subtitle">Our Mission</h2>
                        <p className="section-description">
                            InvestiLearn aims to democratize financial education by providing users with the tools to analyze and understand stock data seamlessly.
                        </p>
                    </div>
                    <div className="about-section">
                        <h2 className="section-subtitle">Our Vision</h2>
                        <p className="section-description">
                            To become the go-to platform for investors of all levels, bridging the gap between complex financial data and user-friendly analysis tools.
                        </p>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.div className="skills-section" variants={sectionVariants}>
                    <h2 className="skills-title">Our Expertise</h2>
                    <div className="skills-list">
                        <div className="skill-item">
                            <h3 className="skill-title">Data Analysis</h3>
                            <motion.div className="skill-bar data-analysis" custom={90} variants={barVariants} initial="hidden" animate="visible"></motion.div>
                        </div>
                        <div className="skill-item">
                            <h3 className="skill-title">User Experience</h3>
                            <motion.div className="skill-bar user-experience" custom={80} variants={barVariants} initial="hidden" animate="visible"></motion.div>
                        </div>
                        <div className="skill-item">
                            <h3 className="skill-title">Mobile Optimization</h3>
                            <motion.div className="skill-bar mobile-optimization" custom={85} variants={barVariants} initial="hidden" animate="visible"></motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.section>
        </HelmetProvider>
    );
};

export default About;