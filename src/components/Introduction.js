import { useEffect, useState } from "react";
import Photo from "../Assets/photo.jpeg";
import "../App.css";

export default function Introduction() {
  const [wait, setWait] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWait(false);
    }, 1000);
  }, [wait]);
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 mt-16">
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
            Kartikey Yadav
          </span>
          <h1 className="text-white ">a Software Engineer</h1>
        </div>
        <p
          className="text-white/40  text-xl smm:text-2xl lg:text-3xl xl:text-4xl mt-3 smm:mt-6  animate-grid"
          style={{ display: wait ? "none" : "" }}
        >
          currently focused on building user <br /> experiences that drive
          growth.
        </p>
      </div>
      <div className="md:mt-0 sm:mt-16 animate-grid" style={{ display: wait ? "none" : "" }}>
        <img
          className="rounded-[3rem] mt-4 -rotate-12 ease-in duration-300 hover:rotate-0"
          src={Photo}
          alt="profile"
        />
      </div>
    </div>
  );
}
