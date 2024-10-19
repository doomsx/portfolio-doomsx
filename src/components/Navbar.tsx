
function Navbar() {
    return (
        <header className="sticky top-0 w-full bg-dark flex justify-between px-3 py-5">
            <h1 className="text-accent font-bold text-xl">Doms</h1>
            <nav>
                <ul className="text-light flex items-center gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
