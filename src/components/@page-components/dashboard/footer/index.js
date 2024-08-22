import React from 'react';
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Logo from "@/components/@page-components/top-navbar/logo";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center space-y-4">
                    {/* Logo */}
                    <Logo />

                    {/* Description */}
                    <p className="text-center max-w-xl">
                        Vampires Studio is an animation video production company. We work with a range of clients across sectors and industries, producing great explainer videos to meet their briefs and engage their audiences.
                    </p>

                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                            <FaLinkedinIn size={24} />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                            <FaYoutube size={24} />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-center">
                        Vampires Animation Studio. 2023 All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
