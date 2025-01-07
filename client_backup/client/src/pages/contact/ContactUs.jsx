import { motion } from "framer-motion";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./ContactUs.css";

export const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        show: false,
        variant: "success",
        alertMessage: "",
        loading: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData((prevData) => ({ ...prevData, loading: true }));

        // Simulate form submission
        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                message: "",
                show: true,
                variant: "success",
                alertMessage: "Message sent successfully!",
                loading: false,
            });
        }, 2000);
    };

    return (
        <HelmetProvider>
            <motion.section
                className="contact-container section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Contact | InvestiLearn</title>
                    <meta name="description" content="Get in touch with InvestiLearn." />
                </Helmet>

                <h1 className="contact-title">Contact Us</h1>

                {formData.show && (
                    <Alert
                        variant={formData.variant}
                        onClose={() => setFormData({ ...formData, show: false })}
                        dismissible
                        className="alert-custom"
                    >
                        {formData.alertMessage}
                    </Alert>
                )}

                <form onSubmit={handleSubmit} className="contact__form">
                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="form-control"
                        ></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        className="btn-submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={formData.loading}
                    >
                        {formData.loading ? "Sending..." : "Send Message"}
                    </motion.button>
                </form>
            </motion.section>
        </HelmetProvider>
    );
};

export default ContactUs;