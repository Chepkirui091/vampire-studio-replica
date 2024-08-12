import Link from 'next/link';

const Layout = ({ children }) => (
    <>
        <header className="bg-gray-800 p-4">
            <nav className="container mx-auto flex justify-between">
                <div className="text-white font-bold">Vampires Animation Studio</div>
                <ul className="flex space-x-4">
                    <li><Link href="/">className="text-white">Home</Link></li>
                    <li><Link href="/about">className="text-white">About Us</Link></li>
                    <li><Link href="/services">className="text-white">Our Services</Link></li>
                    <li><Link href="/blog">className="text-white">Blog</Link></li>
                    <li><Link href="/contact">className="text-white">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 p-4 mt-8">
            <p className="text-center text-white">&copy; Vampires Animation Studio. 2023 All Rights Reserved.</p>
        </footer>
    </>
);

export default Layout;
