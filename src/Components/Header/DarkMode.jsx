import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-9 rounded-full bg-gray-200 dark:bg-slate-700 transition-all duration-300 shadow-md cursor-pointer"
    >
      <div
        className={`absolute top-1 left-1 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${
          theme === "dark" ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {theme === "light" ? (
          <FiSun className="text-yellow-500 text-lg" />
        ) : (
          <FiMoon className="text-slate-700 text-lg" />
        )}
      </div>
    </button>
  );
};

export default DarkMode;