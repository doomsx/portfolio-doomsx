
function Navbar() {
    return (
        <header className="sticky top-0 w-full bg-transparent backdrop-blur-md flex justify-between items-center px-3 py-3 border-b border-white">
            <h1 className="text-accent font-bold text-xl">Doms</h1>
            <nav>
                <ul className="text-light flex items-center gap-3">
                    <a href="#Home" className="navLink">
                        <li>Home</li>
                    </a>
                    <a href="#About" className="navLink">
                        <li>About</li>
                    </a>
                    <a href="#Projects" className="navLink">
                        <li>Projects</li>
                    </a>
                    <a href="#Contact" className="navLink">
                        <li>Contact</li>
                    </a>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
