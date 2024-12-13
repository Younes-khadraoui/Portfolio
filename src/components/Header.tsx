import { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "@/assets/header/menu.png";
import X from "@/assets/header/close.png";
import Image from "next/image";

const Header = () => {
  const [toggled, setToggled] = useState(false);
  const [Icon, setIcon] = useState(true);
  const navStyle = {
    className: `font-bold lg:gap-4 lg:text-2xl lg:flex lg:justify-center cursor-default ${
      toggled
        ? "bg-black bg-opacity-90 flex fixed bottom-0 left-0 flex-col w-full h-screen gap-14 text-3xl justify-center items-center lg:hidden"
        : "Links hidden lg:flex"
    }`,
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleMediaQueryChange = (e: any) => {
      if (e.matches) {
        setToggled(false);
        setIcon(true);
      }
    };

    handleMediaQueryChange(mediaQuery);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  });

  return (
    <div className=" flex absolute w-full justify-between items-center px-3 z-10 py-4 lg:px-4 font-marcellus">
      <Link href="/" className="text-4xl sm:text-4xl z-20 || xl:text-4xl">
        <p className="outline-none font-bold transition-transform ease-in duration-200 hover:scale-110">
          Younes
        </p>
      </Link>

      <ul className={navStyle.className}>
        <li
          onClick={() => {
            toggled ? setToggled(false) : null;
            setIcon(Icon == false ? true : false);
          }}
        >
          <button className="transition-transform ease-in duration-200 hover:scale-110">
            <Link href="/" className="xl:text-3xl ">
              Home
            </Link>
          </button>
        </li>
        <li
          onClick={() => {
            toggled ? setToggled(false) : null;
            setIcon(Icon == false ? true : false);
          }}
        >
          <button className="transition-transform ease-in duration-200 hover:scale-110">
            <Link href="/work" className="xl:text-3xl ">
              Work
            </Link>
          </button>
        </li>
        <li
          onClick={() => {
            toggled ? setToggled(false) : null;
            setIcon(Icon == false ? true : false);
          }}
        >
          <button className="transition-transform ease-in duration-200 hover:scale-110">
            <Link href="/about" className="xl:text-3xl ">
              About
            </Link>
          </button>
        </li>
        <li
          onClick={() => {
            toggled ? setToggled(false) : null;
            setIcon(Icon == false ? true : false);
          }}
        >
          <button className="transition-transform ease-in duration-200 hover:scale-110">
            <Link href="/contact" className="xl:text-3xl ">
              Contact
            </Link>
          </button>
        </li>
      </ul>

      <button
        className="flex justify-end z-20 || lg:hidden"
        onClick={() => {
          console.log("icon = ", Icon);
          console.log("toggled = ", toggled);
          console.log("--------------------");
          setToggled(!toggled);
          setIcon(Icon == false ? true : false);
        }}
      >
        <Image
          className="transition-transform ease-in duration-200 hover:scale-105 outline-none"
          height={30}
          width={30}
          src={Icon ? Menu : X}
          alt="Menu icon"
        />
      </button>
    </div>
  );
};

export default Header;
