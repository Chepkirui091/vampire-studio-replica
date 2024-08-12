import { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from "@/components/@page-components/top-navbar/logo";
import Menus from "@/components/@page-components/top-navbar/menus";

const TopNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // Adjust this value as needed
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div
                className={`fixed top-0 left-0 w-full transition-all duration-300 ${scrolled ? 'bg-topBar h-16' : 'bg-transparent h-24'} flex flex-col md:flex-row justify-between items-center px-4 md:px-12 z-50`}
            >
                <div className="w-full flex justify-between items-center">
                    <div className={`transition-transform duration-300 ${scrolled ? 'scale-75' : 'scale-100'}`}>
                        <Logo />
                    </div>
                    <div className={`md:hidden transition-transform duration-300 ${scrolled ? 'scale-75' : 'scale-100'}`}>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            {isOpen ? (
                                <CloseIcon fontSize="large" />
                            ) : (
                                <MenuIcon fontSize="large" />
                            )}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="w-full flex flex-col bg-menuBar md:hidden">
                        <Menus />
                    </div>
                )}

                <div className="hidden md:flex md:flex-row md:space-x-4">
                    <Menus />
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 md:hidden bg-black opacity-50"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default TopNavbar;
