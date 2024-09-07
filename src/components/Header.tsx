import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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

  useEffect(() => {
    if (toggled) {
      document.body.style.overflow = 'hidden';  
    } else {
      document.body.style.overflow = 'auto';    
    }
    
    return () => {
      document.body.style.overflow = 'auto';    
    };
  }, [toggled]);

  return (
    <div className=" flex absolute w-full justify-between items-center px-3 z-10 py-4 lg:px-4 font-marcellus">
      <Link href="/" className="text-4xl sm:text-4xl z-20 || xl:text-4xl">
        <p className="outline-none font-bold">Younes</p>
      </Link>

      <ul className={navStyle.className}>
        <li
          onClick={() => {
            toggled ? setToggled(false) : null;
            setIcon(Icon == false ? true : false);
          }}
        >
          <Link href="/" className="xl:text-3xl">
            Home
          </Link>
        </li>
        <li
          onClick={() => {
            toggled ? setToggled(false) : null;
            setIcon(Icon == false ? true : false);
          }}
        >
          <Link href="/projects" className="xl:text-3xl">
            Projects
          </Link>
        </li>
        <li
          onClick={() => {
            toggled ? setToggled(false) : null;
            setIcon(Icon == false ? true : false);
          }}
        >
          <Link href="/about" className="xl:text-3xl">
            About
          </Link>
        </li>
        <li
          onClick={() => {
            toggled ? setToggled(false) : null;
            setIcon(Icon == false ? true : false);
          }}
        >
          <Link href="/contact" className="xl:text-3xl">
            Contact
          </Link>
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
        {Icon ? <Menu size={45} /> : <X size={45} />}
      </button>
    </div>
  );
};

export default Header;
