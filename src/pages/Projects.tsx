import nextLogo from "/nextdotjs.svg"
import tailwindLogo from "/tailwind.svg"

function Projects() {
    return (
        <section className="h-screen flex items-center justify-center flex-col" id="Projects">
            <h1 className="text-5xl font-black text-accent">Projects</h1>
            <div className="mt-10 flex md:flex-row flex-col gap-3 items-center justify-center max-w-1/2 px-10 md:px-20">
                <div className="w-1/2">
                    Image
                </div>
                <div className="w-1/2 space-y-5">
                    <h2 className="text-xl font-bold">Weather App</h2>
                    <p className="text-sm md:text-base">A simple weather application built with Next.js, TypeScript, and Tailwind CSS. It fetches real-time weather data from the OpenWeather API based on user input, displaying key details like temperature, humidity, and weather conditions. Designed for a smooth and responsive user experience.</p>
                    <div className="flex items-center gap-2 pl-3">
                        <div className="bg-gray-300 rounded-full flex justify-center border border-black items-center h-8 w-8">
                            <img src={nextLogo} alt="nextLogo" className="w-10 h-10" />
                        </div>
                        <div>
                            <img src={tailwindLogo} alt="tailwindLogo" className="w-10 h-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
