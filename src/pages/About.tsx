import SkillsCard from "../components/SkillsCard";
import { skills, skillsType } from "../lib/types";

function About() {
    return (
        <section className="h-screen flex justify-center flex-col px-3" id="About">
            <h1 className="text-center text-accent text-2xl font-extrabold md:font-black md:text-5xl">
                About me
            </h1>
            <div className="flex text-center w-full flex-col items-center justify-center md:gap-10">
                <div className="md:text-center md:w-[950px] my-5">
                    <p className="md:text-xl md:text-left px-3">
                        A passionate aspiring front-end developer on a journey to master the
                        art of crafting beautiful and functional websites. From responsive
                        designs to performance optimization, I enjoy the challenges of
                        bringing ideas to life online. While I may not have professional
                        experience yet, I am driven by my love for coding and my eagerness
                        to learn and grow in the world of web development.
                    </p>
                </div>
                <div className="flex gap-1 flex-col md:w-[950px] mt-5">
                    <h2 className="text-left font-bold text-xl text-accent/90 md:text-3xl text-light md:text-left">
                        Technology I use
                    </h2>
                    <div className="grid grid-cols-4 gap-2 md:grid-cols-8 mt-2 md:gap-4 md:mt-5">
                        {skills.map((s: skillsType) => (
                            <SkillsCard
                                title={s.skill}
                                icon={s.logo}
                                color={s.color}
                                altText={s.skill}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
