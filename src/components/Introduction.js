import { useEffect, useState } from "react";
import "../App.css";
import { MainData } from "../Assets/Data";

export default function Introduction() {
  const [wait, setWait] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => {
      setWait(false);
    }, 1000);
  }, [wait]);
  useEffect(() => {
    const handleOrientation = (event) => {
      const gamma = event.gamma;
      const beta = event.beta;
      setPosition({
        x: gamma * 0,
        y: beta * -0.5,
      });
    };
    window.addEventListener("deviceorientation", handleOrientation);
    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);
  return (
    <div
      className="grid md:grid-cols-3 sm:grid-cols-2 mt-16"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 1s ease", 
      }}
    >
      <div className="col-span-2">
        <div className="fixed flex text-white/60 text-xl sm:text-2xl mb-3 smm:mb-0 lg:text-3xl">
          <h1>Hey, there</h1>
          <span className={wait ? "mx-2 wave-hand" : "mx-2"}>👋🏼</span>
        </div>
        <div
          className="text-[32px] mt-8 smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold animate-grid"
          style={{ display: wait ? "none" : "" }}
        >
          <h1 className="text-white/60 inline">I'm </h1>
          <span className="font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            {MainData.name}
          </span>
          <h1 className="text-white ">{MainData.degination}</h1>
        </div>
        <p
          className="text-white/40 w-[30ch]  text-xl smm:text-2xl lg:text-3xl xl:text-4xl mt-3 smm:mt-6  animate-grid"
          style={{ display: wait ? "none" : "" }}
        >
          {MainData.subheading}
        </p>
      </div>
      <div
        className="md:mt-0 sm:mt-16 animate-grid"
        style={{ display: wait ? "none" : "" }}
      >
        <img
          className="rounded-[3rem] -rotate-12 ease-in duration-300 hover:rotate-0"
          src={MainData.photo}
          alt="profile"
        />
      </div>
    </div>
  );
}
