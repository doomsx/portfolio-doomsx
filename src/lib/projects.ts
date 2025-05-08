import noPhoto from "/no-photo.jpg"
import nextjs from "/nextdotjs.svg"
import tailwind from "/tailwind.svg"

export const projects = [
    {
        img: "/weather.png",
        title: "Weather App",
        description: "A simple weather application built with Next.js, TypeScript, and Tailwind CSS. It fetches real-time weather data from the OpenWeather API based on user input, displaying key details like temperature, humidity, and weather conditions. Designed for a smooth and responsive user experience.",
        skills: [nextjs, tailwind],
        githubLink: "https://github.com/doomsx/weather-app",
        websiteLink: "https://domss-weather-app.vercel.app/"
    },
    {
        img: noPhoto,
        title: "MovieDB",
        description: "Simple IMDB clone",
        skills: [nextjs, tailwind],
        githubLink: "#",
        websiteLink: "#"
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
