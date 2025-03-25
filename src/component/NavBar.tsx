import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";

type NavBarProps = {
  className?:string
  reference?: React.RefObject<HTMLDivElement | null>;
  show?:boolean
}

const NavBar = ({reference,show}:NavBarProps) => {
  const menuItems = [
    { label: "Home", href: "/home" },
    { label: "Work", href: "/project" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Book a Call", isButton: true, special: true, href:"/BookCall" },
  ];
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    !isMobile && (
      <nav className={`fixed top-4 left-0 md:w-full md:flex md:justify-center z-50 transition duration-300 ${show ? "opacity-100" : "opacity-0"}`} ref={reference}>
        <ul className="flex items-center gap-4 rounded-full border border-white/50 bg-white/15 md:px-6 md:py-3 backdrop-blur-sm shadow-md">
          {menuItems.map((item, index) =>
            item.isButton ? (
              <li onClick={
                ()=>{navigate(""+item.href)}
              } className=" cursor-pointer " key={index}>
                <div
                  className={` cursor-pointer md:px-4 md:py-2 text-sm font-light transition-all duration-300 rounded-full ${
                    item.special
                      ? "group bg-white/20 flex items-center hover:bg-white/30 hover:text-white/90"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label} {item.special&&(<IoMdArrowForward className="group-hover:ml-3 ml-1 transition-all duration-300"/>)}
                </div>
              </li>
            ) : (
              <li key={index}>
                <div
                onClick={
                  ()=>{navigate(""+item.href)}
                }
                  className=" cursor-pointer px-4 py-2 text-sm font-light text-white/80 transition-[text-shadow,color] text-white duration-300 hover:text-white rounded-full"
                >
                  {item.label}
                </div>
              </li>
            )
          )}
        </ul>
      </nav>
    )
  );
};

export default NavBar;
