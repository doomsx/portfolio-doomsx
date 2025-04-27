import htmlLogo from "/html.svg";
import cssLogo from "/css.svg";
import javascript from "/js.svg";
import typescript from "/ts.svg";
import react from "/react.svg";
import git from "/git.svg";
import github from "/github.svg";
import tailwind from "/tailwind.svg";
import nextjs from "/nextdotjs.svg"

export const skills = [
    {
        "skill": "HTML",
        "logo": htmlLogo,
        "color": "#E34C26"
    },
    {
        "skill": "CSS",
        "logo": cssLogo,
        "color": "#1172b8"
    },
    {
        "skill": "Javascript",
        "logo": javascript,
        "color": "#f0db4f"
    },
    {
        "skill": "Typescript",
        "logo": typescript,
        "color": "#007acc"
    },
    {
        "skill": "Reactjs",
        "logo": react,
        "color": "#61dbfb"
    },
    {
        "skill": "Tailwind",
        "logo": tailwind,
        "color": "#68c7f0"
    },
    {
        "skill": "Nextjs",
        "logo": nextjs,
        "color": "#000000"
    },
    {
        "skill": "git",
        "logo": git,
        "color": "#F1502F"
    },
    {
        "skill": "Github",
        "logo": github,
        "color": "#ffffff"
    },
]

export type skillsType = {
    skill: string,
    logo: string,
    color: string,
}
