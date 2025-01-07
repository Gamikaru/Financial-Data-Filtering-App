// filepath: /Ubuntu/home/gamikarudev/projects/python-projects/financial-data-filtering-app/client/src/pages/SinglePage.jsx
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import FinancialData from "../components/financial-data/FinancialData";
import Socialicons from "../components/socialicons/SocialIcons";
import About from "./about/About";
import ContactUs from "./contact/ContactUs";
import Home from "./home/Home";
import Portfolio from "./portfolio/Portfolio";

export default function SinglePage() {
    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.4, ease: "easeIn" },
        },
    };

    return (
        <>
            <Socialicons />
            <AnimatePresence>
                <motion.section
                    id="home"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Home />
                </motion.section>
            </AnimatePresence>

            <AnimatePresence>
                <motion.section
                    id="financial-data"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <FinancialData />
                </motion.section>
            </AnimatePresence>

            <AnimatePresence>
                <motion.section
                    id="about"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <About />
                </motion.section>
            </AnimatePresence>

            <AnimatePresence>
                <motion.section id="portfolio" className="section-gap">
                    <Portfolio />
                </motion.section>
            </AnimatePresence>

            <AnimatePresence>
                <motion.section
                    id="contact"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <ContactUs />
                </motion.section>
            </AnimatePresence>

            <footer className="bg-gray-800 text-white text-center p-4">
                <p>&copy; 2024. All rights reserved.</p>
            </footer>
        </>
    );
}