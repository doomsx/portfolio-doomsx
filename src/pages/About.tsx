import SkillsCard from "../components/SkillsCard"
import htmlLogo from "/html.svg"
import cssLogo from "/css.svg"
import javascript from "/js.svg"
import typescript from "/ts.svg"
import react from "/react.svg"
import git from "/git.svg"
import github from "/github.svg"
import tailwind from "/tailwind.svg"

function About() {
    return (
        <section className="h-screen flex justify-center flex-col" id="About">
            <h1 className="text-center text-accent font-black text-5xl">About me</h1>
            <div className="flex text-center w-full flex-col items-center justify-center gap-10">
                <div className="text-center w-[950px] mt-10">
                    <p className="text-xl text-left"> A passionate aspiring front-end developer on a journey to master the
                        art of crafting beautiful and functional websites. From responsive
                        designs to performance optimization, I enjoy the challenges of
                        bringing ideas to life online. While I may not have professional
                        experience yet, I am driven by my love for coding and my eagerness to
                        learn and grow in the world of web development.</p>
                </div>
                <div className="flex gap-2 flex-col w-[950px]">
                    <h2 className="font-bold text-3xl text-light text-left">Technology I use</h2>
                    <div className="grid grid-cols-8 gap-4 mt-5">
                        <SkillsCard title={"HTML5"} icon={htmlLogo} color={"#E34C26"} />
                        <SkillsCard title={"CSS3"} icon={cssLogo} color={"#1172b8"} />
                        <SkillsCard title={"Javascript"} icon={javascript} color={"#f0db4f"} />
                        <SkillsCard title={"Typescript"} icon={typescript} color={"#007acc"} />
                        <SkillsCard title={"React"} icon={react} color={"#61DBFB"} />
                        <SkillsCard title={"Tailwind"} icon={tailwind} color={"#68c7f0"} />
                        <SkillsCard title={"Git"} icon={git} color={"#F1502F"} />
                        <SkillsCard title={"Github"} icon={github} color="#ffffff" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
