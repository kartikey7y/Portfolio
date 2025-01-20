import "../App.css";
import { aboutPageData } from "../Assets/Data";

export default function About() {
  return (
    <div className="mb-[8rem] animate-grid">
      <p className="text-4xl font-bold my-4 mx-8 md:text-5xl xl:text-6xl">
        {aboutPageData.mainHeading}
      </p>
      <div className="grid grid-cols-1 gap-8 my-2 mx-8 xl:grid-cols-2">
        <p className="text-xl md:text-2xl md:w-[40rem]">
          {aboutPageData.paragraph}
        </p>
        <div className="xl:mx-[10rem]">
          {aboutPageData.skils.map((skill, idx) => (
            <span key={skill.id}>
              <h1 className="text-xl font-bold md:text-1xl xl:text-2xl">
                {skill.tool}
              </h1>
              <p className="text-white/60 text-base xl:text-xl xl:w-[25rem]">
                {skill.toolData}
              </p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
