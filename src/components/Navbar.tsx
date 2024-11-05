import logo from "/logo.png";
function Navbar() {
  return (
    <header className="sticky top-0 w-full bg-transparent backdrop-blur-md flex justify-between items-center px-3 py-3 border-b border-white z-50">
      <a href="/">
        <h1 className="text-accent font-bold text-xl flex items-center gap-1">
          <img src={logo} alt="dev logo" className="h-5 w-5" />
          Doms
        </h1>
      </a>
      <nav className="flex items-center gap-2 justify-between">
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
        <a href="" className="resumeLink">
          <p>Resume</p>
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
