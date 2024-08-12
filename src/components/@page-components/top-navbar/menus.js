const Menus = () => {
    return (
        <nav className="p-4">
            <ul className="flex space-x-4 font-topBar text-lg text-white">
                <li>
                    <a href="/" className="">Home</a>
                </li>
                <li>
                    <a href="/about" className="">About us</a>
                </li>
                <li>
                    <a href="/services" className="">Our Services</a>
                </li>
                <li>
                    <a href="/blog" className="">Blog</a>
                </li>
                <li>
                    <a href="/contact" className="">Contact us</a>
                </li>
            </ul>
        </nav>
    );
};

export default Menus;
