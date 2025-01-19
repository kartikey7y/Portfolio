import "../App.css";

export default function About() {
  return (
    <div className="mb-[8rem] animate-grid">
      <p className="text-4xl font-bold my-4 mx-8 md:text-5xl xl:text-6xl">
        I am eager to design creative and innovative websites.
      </p>
      <div className="grid grid-cols-1 gap-8 my-2 mx-8 xl:grid-cols-2">
        <p className="text-xl md:text-2xl md:w-[40rem]">
          I am a passionate software developer and MCA student with a strong
          academic foundation, having graduated with a Bachelor of Arts degree.
          I specialize in frontend development, leveraging technologies like
          HTML, CSS, Bootstrap, Tailwind CSS, and React to craft engaging user
          interfaces. On the backend, I work with Node.js to build robust and
          scalable applications. My goal is to create innovative and impactful
          solutions that combine functionality with an exceptional user
          experience.
        </p>
        <span className="xl:mx-[10rem]">
          <h1 className="text-xl font-bold md:text-1xl xl:text-2xl">
            Frontend Tools
          </h1>
          <p className="text-white/60 text-base xl:text-xl xl:w-[25rem]">
            JavaScript(ES6+), React, Next.js, TypeScript, Redux, Redux Toolkit,
            React Query, HTML5, Git/GitHub, React Hook Form, Formik.
          </p>
          <h1 className="text-xl font-bold mt-8 md:text-1xl xl:text-2xl">
            UI libraries
          </h1>
          <p className="text-white/60 text-base xl:text-xl xl:w-[25rem]">
            CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Bootstrap.
          </p>
          <h1 className="text-xl font-bold mt-8 md:text-1xl xl:text-2xl">
            Backend Tools
          </h1>
          <p className="text-white/60 text-base xl:text-xl xl:w-[25rem]">
            Python/Django,NodeJs.
          </p>
        </span>
      </div>
    </div>
  );
}
