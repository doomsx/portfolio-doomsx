import ProjectCard from "../components/ProjectCard"
import { projects } from "../lib/projects"

function Projects() {

    return (
        <section className="flex mt-10 items-center justify-center flex-col" id="Projects">
            <h1 className="text-5xl font-black text-accent">Projects</h1>
            {projects.map((proj) => (
                <ProjectCard proj={proj} />
            ))}
        </section>
    )
}

export default Projects
