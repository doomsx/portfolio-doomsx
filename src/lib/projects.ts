
export const projects = [
    {
        img: "/portfolio.png",
        title: "Portfolio Website",
        description: "A personal website showcasing my development projects and technical skills. Built using modern web technologies, this project demonstrates my ability to create responsive and user-friendly interfaces.",
        skills: ["/react.svg", "/tailwind.svg"],
        githubLink: "https://github.com/doomsx/portfolio-doomsx",
        websiteLink: "https://domss.vercel.app"
    },
    {
        img: "/weather.png",
        title: "Weather App",
        description: "A simple weather application built with Next.js, TypeScript, and Tailwind CSS. It fetches real-time weather data from the OpenWeather API based on user input, displaying key details like temperature, humidity, and weather conditions. Designed for a smooth and responsive user experience.",
        skills: ["/nextdotjs.svg", "/tailwind.svg"],
        githubLink: "https://github.com/doomsx/weather-app",
        websiteLink: "https://domss-weather-app.vercel.app/"
    }
]

export type proj = {
    img: string,
    title: string,
    description: string,
    skills: string[],
    githubLink: string,
    websiteLink: string
}
