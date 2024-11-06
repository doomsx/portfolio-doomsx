import SkillsCard from "../components/SkillsCard";
import htmlLogo from "/html.svg";
import cssLogo from "/css.svg";
import javascript from "/js.svg";
import typescript from "/ts.svg";
import react from "/react.svg";
import git from "/git.svg";
import github from "/github.svg";
import tailwind from "/tailwind.svg";

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
            <SkillsCard
              title={"HTML5"}
              icon={htmlLogo}
              color={"#E34C26"}
              altText={"HTML logo"}
            />
            <SkillsCard
              title={"CSS3"}
              icon={cssLogo}
              color={"#1172b8"}
              altText={"CSS logo"}
            />
            <SkillsCard
              title={"Javascript"}
              icon={javascript}
              color={"#f0db4f"}
              altText={"Javascript logo"}
            />
            <SkillsCard
              title={"Typescript"}
              icon={typescript}
              color={"#007acc"}
              altText={"Typescript logo"}
            />
            <SkillsCard
              title={"React"}
              icon={react}
              color={"#61DBFB"}
              altText={"React logo"}
            />
            <SkillsCard
              title={"Tailwind"}
              icon={tailwind}
              color={"#68c7f0"}
              altText={"Tailwind logo"}
            />
            <SkillsCard
              title={"Git"}
              icon={git}
              color={"#F1502F"}
              altText={"Git logo"}
            />
            <SkillsCard
              title={"Github"}
              icon={github}
              color="#ffffff"
              altText={"Github logo"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
