import { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";

interface SubmenuItem {
  name: string;
  category: any[];
}

interface SubmenuProps {
  submenu: SubmenuItem[];
}

const Submenu = ({ submenu }: SubmenuProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !isSticky) {
        setIsSticky(true);
        setTimeout(() => setIsAnimated(true), 10); // Animasyonu başlat
      } else if (window.scrollY <= 50 && isSticky) {
        setIsAnimated(false);
        setTimeout(() => setIsSticky(false), 300); // Animasyonu tamamla
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Offset değeri
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const filteredSubmenu = submenu.filter((sub) => sub.category.length > 0);

  return (
    <div
      className={`pt-2 pb-4 mt-4 flex items-center overflow-x-auto gap-3 transition-all duration-500 ${
        isSticky
          ? `sticky top-0 z-10 bg-yellow-600 px-1  ${
              isAnimated ? "translate-x-0" : "translate-x-full"
            }`
          : "bg-white"
      }`}
      style={{
        transform: isSticky ? (isAnimated ? "translateX(0)" : "translateX(-100%)") : "none",
      }}
    >
      {filteredSubmenu.map((sub, i) => (
        <Link key={i} href={`#${sub.name}`} onClick={(e) => handleLinkClick(e, sub.name)}>
          <div
            className={`border font-semibold ${
              isSticky ? "text-white" : "text-yellow-600"
            } rounded-full min-w-[80px] flex justify-center cursor-pointer px-4 py-2 text-center hover:scale-110 transition-transform duration-300`}
            style={{ backgroundColor: isSticky ? "transparent" : "ghostwhite" }}
          >
            {sub.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Submenu;
