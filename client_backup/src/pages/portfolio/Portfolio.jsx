import { motion } from "framer-motion";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "../../content_option";
import "./Portfolio.css";

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export const Portfolio = () => {
    return (
        <HelmetProvider>
            <motion.section
                className="portfolio-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={containerVariants}
            >
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Portfolio | InvestiLearn</title>
                    <meta name="description" content={meta.description} />
                </Helmet>

                <h1 className="portfolio-title">Our Projects</h1>

                <div className="portfolio-grid">
                    {dataportfolio.map((data, i) => (
                        <motion.div
                            className="portfolio-card"
                            variants={itemVariants}
                            key={i}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0,0,0,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img src={data.img} alt={`${data.title} Screenshot`} className="portfolio-image" />
                            <div className="portfolio-content">
                                <h2 className="portfolio-project-title">{data.title}</h2>
                                <p className="portfolio-description">{data.description}</p>
                                <div className="portfolio-links">
                                    {data.videoUrl && (
                                        <a href={data.videoUrl} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                                            Watch Video
                                        </a>
                                    )}
                                    {data.repoUrl && (
                                        <a href={data.repoUrl} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                                            View Repository
                                        </a>
                                    )}
                                    {data.link && (
                                        <a href={data.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                                            Learn More
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </HelmetProvider>
    );
};

export default Portfolio;