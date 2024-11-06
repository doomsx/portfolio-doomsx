import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
function Hero() {
  return (
    <section className="h-screen" id="Home">
      <div className="flex flex-col h-full justify-center gap-2 pl-5 md:pl-[100px]">
        <p className="text-lg font-bold">Hello, my name is</p>
        <h1 className="text-4xl text-accent font-black mb-0 md:text-7xl md:mb-2">
          Dominique Louise
        </h1>
        <h3 className="md:text-5xl text-xl font-semibold">
          Frontend Developer
        </h3>
        <div className="flex gap-2 mt-3 md:mt-6">
          <a href="https://github.com/doomsx" target="_blank">
            <DiGithubBadge className="text-4xl md:text-5xl" />
          </a>
          <a href="https://www.linkedin.com/in/dominique-louise-magat/">
            <FaLinkedin className="text-4xl md:text-5xl hover:text-blue-600" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
