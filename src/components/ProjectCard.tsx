import { proj } from "../lib/projects";
import githubLogo from "/github.svg"
import { CiGlobe } from "react-icons/ci";

const ProjectCard = ({ proj }: { proj: proj }) => {
    return (
        <div className="mt-10 flex md:flex-row flex-col gap-3 items-center justify-center max-w-1/2 mx-10 md:mx-20 md:p-10 py-5 border border-white/10 bg-gray-600/10 rounded-xl backdrop-blur-xl">
            <div className="px-3 md:w-1/2">
                <img src={proj.img} alt="project photo" />
            </div>
            <div className="md:w-1/2 space-y-5 px-3">
                <h2 className="text-xl font-bold">{proj.title}</h2>
                <p className="text-sm md:text-base">{proj.description}</p>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2 ml-1">
                        {proj.skills.map((skill) => (
                            <div>
                                <img src={skill} alt="skill" className="w-10 h-10" />
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <a href={proj.githubLink} target="_blank" className="projectLinks">
                            <img src={githubLogo} alt="githubLogo" className="w-5 h-5" />
                            <p className="text-sm hidden md:block">Source Code</p>
                        </a>
                        <a href={proj.websiteLink} target="_blank" className="projectLinks">
                            <CiGlobe className="text-lg" />
                            <p className="text-sm hidden md:block">Live Website</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
