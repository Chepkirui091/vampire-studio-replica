const Menus = () => {
    return (
        <nav className="p-4">
            <ul className="flex flex-col md:flex-row md:space-x-6 text-lg text-white whitespace-nowrap">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About us</a>
                </li>
                <li>
                    <a href="/services" >Our Services</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <li>
                    <a href="/contact">Contact us</a>
                </li>
            </ul>
        </nav>
    );
};

export default Menus;
