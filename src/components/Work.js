import { GithubSvg, LinkSvg } from "./svgs";
import { Projects } from "../Assets/Data";

export default function Work() {

  return (
    <div className="p-4 mb-[8rem]">
      <h1 className="text-[2rem] font-bold my-2 sm:text-[2.5rem] md:text-[3rem]">
        Projects
      </h1>
      {Projects.map((project) => (
        <div
          className="grid md:grid-cols-3 bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] my-4 rounded-2xl animate-grid"
          key={project.id}
        >
          {/* Image Section */}
          <div className="m-3 md:col-span-1">
            <img
              className="w-full h-auto rounded"
              src={project.projectImage}
              alt={project.projectTitle}
            />
          </div>
          {/* Text Content Section */}
          <div className="md:col-span-2 p-4">
            <span className="flex flex-col sm:flex-row justify-between align-middle mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                {project.projectTitle}
              </h1>
              <div className="flex items-center mt-2 sm:mt-0">
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <LinkSvg />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <GithubSvg />
                </a>
              </div>
            </span>
            <p className="text-base text-white/70 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, id) => (
                <span
                  key={id}
                  className="bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] px-4 py-2 rounded-xl text-sm md:text-base"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
