import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
function Hero() {
    return (
        <section className="h-screen" id="Home">
            <div className="flex flex-col h-full justify-center pl-[100px] gap-2">
                <p className="text-lg font-bold">Hello, my name is</p>
                <h1 className="text-7xl font-black mb-2 text-accent">Dominique Louise</h1>
                <h3 className="text-5xl font-semibold">Frontend Developer</h3>
                <div className="flex gap-2 mt-6">
                    <a href="https://github.com/doomsx" target="_blank">
                        <DiGithubBadge className="text-5xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/dominique-louise-magat/">
                        <FaLinkedin className="text-5xl hover:text-blue-600" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
