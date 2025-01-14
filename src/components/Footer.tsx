
function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="h-20 border-t border-[#64ffda]">
            <div className="flex justify-center items-center h-full">
                Dominique &copy; {currentYear}
            </div>
        </footer>
    );
}

export default Footer;
