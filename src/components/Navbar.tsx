import { useRef } from "react";
import logo from "/logo.png";
import burger from "/burger.svg";
import close from "/close.svg";

const Navbar = () => {
    const nav = useRef<HTMLHtmlElement | null>(null);

    const openNav = () => {
        if (nav.current) {
            nav.current.classList.toggle("hidden");
        }
    };
    return (
        <header className="] sticky top-0 z-50 flex items-center justify-between bg-transparent px-3 py-4 shadow-[0_1px_0_0_#64ffda] backdrop-blur-md">
            <a
                href="/"
                className="text-xl font-bold text-aceent flex items-center gap-2"
            >
                <img src={logo} alt="logo" className="h-5 w-5" />
                <h1>Doms</h1>
            </a>
            <nav
                ref={nav}
                className="fixed right-0 top-0 z-50 hidden h-screen w-3/4 border-l bg-transparent backdrop-blur-md md:relative md:block md:h-auto md:w-auto md:border-none"
            >
                <img
                    src={close}
                    className="absolute right-4 top-4 text-3xl w-10 h-10 md:hidden"
                    onClick={openNav}
                />
                <ul className="flex h-full flex-col mt-20 gap-4 md:mt-0 md:flex md:flex-row md:gap-3">
                    <a href="#Home" onClick={openNav}>
                        <li className="navLink">Home</li>
                    </a>
                    <a href="#About" onClick={openNav}>
                        <li className="navLink">About</li>
                    </a>
                    <a href="#Projects" onClick={openNav}>
                        <li className="navLink">Projects</li>
                    </a>
                    <a href="#Contact" onClick={openNav}>
                        <li className="navLink">Contact</li>
                    </a>
                </ul>
            </nav>
            <img
                src={burger}
                onClick={openNav}
                className="text-3xl text-fontColorLight md:hidden h-10 w-10"
            />
        </header>
    );
};

export default Navbar;
