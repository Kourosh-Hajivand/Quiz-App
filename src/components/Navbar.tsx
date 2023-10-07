import { Moon, Sun1 } from "iconsax-react";
import { useState } from "react";

function Navbar() {
  const [darkMode, setdarkMode] = useState(false);
  const ToogleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setdarkMode(!darkMode);
  };
  return (
    <div className="w-full max-w-[1080px] mx-auto sticky top-5 bg-white shadow-lg dark:shadow-none dark:bg-CMDARK py-3  left-0 rounded-2xl px-6 flex items-center justify-between">
      <img src={darkMode ? "/Logo.png" : "/Logo1.png"} width={48} height={48} />
      <div
        onClick={ToogleDarkMode}
        className="flex items-center justify-center"
      >
        {darkMode ? (
          <Sun1 size="26" className="text-white" />
        ) : (
          <Moon size="24" className="text-CMDARK" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
