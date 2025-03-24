import React from "react";

const NavBar = () => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/project" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "More", isButton: true },
    { label: "Book a Call", isButton: true, special: true },
  ];
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    !isMobile && (
      <nav className="fixed top-4 left-0 md:w-full  md:flex md:justify-center z-50">
        <ul className="flex items-center gap-4 rounded-full border border-white/50 bg-white/10 md:px-6 md:py-3 backdrop-blur-lg shadow-md">
          {menuItems.map((item, index) =>
            item.isButton ? (
              <li key={index}>
                <button
                  className={`md:px-4 md:py-2 text-sm font-light transition-all duration-300 rounded-full ${
                    item.special
                      ? "bg-white/20 hover:bg-white/30 hover:text-white/90"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ) : (
              <li key={index}>
                <a
                  href={item.href}
                  className="px-4 py-2 text-sm font-light text-white/80 transition-[text-shadow,color] duration-300 hover:text-white rounded-full"
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    )
  );
};

export default NavBar;
