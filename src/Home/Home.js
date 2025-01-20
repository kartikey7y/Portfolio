import { Outlet, useNavigate } from "react-router-dom";
import { MenuSvg, CancelSvg } from "../Assets/Logo";
import { useState, useEffect, useRef } from "react";
import "../App.css";
import Dlogo from "../Assets/Heiler.png";

export default function Home() {
  const [draggedItem, setDraggedItem] = useState(null);
  const [wait, setWait] = useState(true);
  const [navLink, setNavLink] = useState(
    window.innerWidth >= 770
      ? "flex flex-wrap md:flex-row md:ml-44 flex-col items-center gap-4 text-sm md:text-base"
      : "small-navbar"
  );
  const [activateButton, setActivateButton] = useState(window.innerWidth < 770);
  const [selectedButton, setSelectedButton] = useState("open");
  const smNavbarRef = useRef(null);
  const navigate = useNavigate();
  const [help, setHelp] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWait(false);
    }, 1000);

    const handleResize = () => {
      const isMobile = window.innerWidth < 770;
      setNavLink(
        isMobile
          ? "small-navbar"
          : "flex flex-wrap md:flex-row md:ml-44 flex-col items-center gap-4 text-sm md:text-base"
      );
      setActivateButton(isMobile);

      if (smNavbarRef.current) {
        smNavbarRef.current.style.visibility = isMobile ? "hidden" : "visible";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDragStart = (route) => {
    setDraggedItem(route);
  };

  const handleDrop = () => {
    if (draggedItem) {
      navigate(draggedItem);
      setDraggedItem(null);
      setWait(true);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleOpen = () => {
    if (smNavbarRef.current) {
      smNavbarRef.current.style.visibility = "visible";
    }
    setSelectedButton("close");
  };

  const handleCancel = () => {
    if (smNavbarRef.current) {
      smNavbarRef.current.style.visibility = "hidden";
    }
    setSelectedButton("open");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHelp((prevHelp) => !prevHelp);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 max-w-[90%] xl:max-w-[1223px] w-full mx-auto">
      {/* Navigation Bar */}
      <nav
        className="sticky top-8 z-10 bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] rounded-2xl p-3"
        style={{ backdropFilter: "blur(0.5rem)" }}
      >
        <div className="flex justify-between items-center">
          <div className="cursor-pointer">
            <span className={wait ? "animate-bounce" : ""}>
              {/* <Logo /> */}
              <img
                className="h-12 w-12 object-contain"
                src={Dlogo}
                alt="logo"
                style={{ mixBlendMode: "multiply" }}
              />
            </span>
          </div>
          <ul className={navLink} id="links" ref={smNavbarRef}>
            <li
              className="hover:text-white cursor-pointer hover:rounded hover:px-2 hover:bg-yellow-600"
              draggable
              onDragStart={() => handleDragStart("/")}
            >
              Home
            </li>
            <li
              className="hover:text-white cursor-pointer  hover:rounded hover:px-2 hover:bg-yellow-600"
              draggable
              onDragStart={() => handleDragStart("/work")}
            >
              Work
            </li>
            <li
              className="hover:text-white cursor-pointer hover:rounded hover:px-2 hover:bg-yellow-600"
              draggable
              onDragStart={() => handleDragStart("/about")}
            >
              About
            </li>
            <li
              className="hover:text-white cursor-pointer hover:rounded hover:px-2 hover:bg-yellow-600"
              draggable
              onDragStart={() => handleDragStart("/contact")}
            >
              Contact
            </li>
            <li className="xl:ml-96 hover:text-white cursor-pointer">
              <a
                href="https://www.linkedin.com/in/kartikey-yadav-4a7a612b6/?trk=public-profile-join-page"
                target="blank"
              >
                LinkedIn
              </a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="https://github.com/kartikey7y" target="blank">
                GitHub
              </a>
            </li>
          </ul>
          <div className={activateButton ? "" : "hidden"}>
            {selectedButton === "open" ? (
              <span onClick={handleOpen}>
                <MenuSvg />
              </span>
            ) : (
              <span onClick={handleCancel}>
                <CancelSvg />
              </span>
            )}
          </div>
        </div>
      </nav>

      {/* Main Outlet */}
      <Outlet />

      {/* Drag-and-Drop Area */}
      <div className="grid place-items-center mt-8">
        <div
          className="fixed bottom-4 text-white/40 text-xl md:text-4xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] p-6 border-2 border-dotted border-gray-400 rounded-lg text-center transition-opacity duration-300"
          onDragOver={handleDragOver}
          style={{ backdropFilter: "blur(15rem)" }}
          onDrop={handleDrop}
        >
          {help ? (
            <span>
              <p className="absolute bottom-24 right-0 text-[1rem] text-white bg-yellow-600 rounded px-2 animate-bounce">
                Drag and Drop here 👇🏼
              </p>
              <p className="absolute -top-[40rem] right-0 md:-top-[28rem] text-[1rem] text-white bg-yellow-600 rounded px-2 animate-bounce">
                Drag items☝🏼
              </p>
            </span>
          ) : (
            ""
          )}
          Only Smart People can navigate!
        </div>
      </div>
    </div>
  );
}
