import nextLogo from "/nextdotjs.svg"
import tailwindLogo from "/tailwind.svg"
import githubLogo from "/github.svg"
import { CiGlobe } from "react-icons/ci";
import weather from "/weather.png"

function Projects() {
    return (
        <section className="h-screen flex items-center justify-center flex-col" id="Projects">
            <h1 className="text-5xl font-black text-accent">Projects</h1>
            <div className="mt-10 flex md:flex-row flex-col gap-3 items-center justify-center max-w-1/2 mx-10 md:mx-20 md:p-10 py-5 border border-white/10 bg-gray-600/10 rounded-xl backdrop-blur-xl">
                <div className="w-1/2">
                    <img src={weather} alt="weather pic" />
                </div>
                <div className="w-1/2 space-y-5">
                    <h2 className="text-xl font-bold">Weather App</h2>
                    <p className="text-sm md:text-base">A simple weather application built with Next.js, TypeScript, and Tailwind CSS. It fetches real-time weather data from the OpenWeather API based on user input, displaying key details like temperature, humidity, and weather conditions. Designed for a smooth and responsive user experience.</p>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <div className="bg-gray-300 rounded-full flex justify-center border border-black items-center h-8 w-8">
                                <img src={nextLogo} alt="nextLogo" className="w-10 h-10" />
                            </div>
                            <div>
                                <img src={tailwindLogo} alt="tailwindLogo" className="w-10 h-10" />
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <a href="https://github.com/doomsx/weather-app" target="_blank" className="projectLinks">
                                <img src={githubLogo} alt="githubLogo" className="w-5 h-5" />
                                <p className="text-sm hidden md:block">Source Code</p>
                            </a>
                            <a href="#" target="_blank" className="projectLinks">
                                <CiGlobe className="text-lg" />
                                <p className="text-sm hidden md:block">Live Website</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
