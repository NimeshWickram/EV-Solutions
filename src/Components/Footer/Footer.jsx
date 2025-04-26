import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section brand">
                    <h2>EV-Solutions</h2>
                    <p>Driving the future with sustainable electric vehicle solutions.</p>
                </div>

                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/models">Models</a></li>
                        <li><a href="/about">About EV</a></li>
                        <li><a href="/technology">Technology</a></li>
                        <li><a href="/ownership">Ownership</a></li>
                        <li><a href="/blogs">Blogs</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: support@evsolutions.com</p>
                    <p>Phone: +1-800-555-1234</p>
                </div>

                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-use">Terms of Use</a> | <a href="/cookie-rights">Cookie Rights</a>
                </p>
                <p>&copy; 2025 EV-Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;