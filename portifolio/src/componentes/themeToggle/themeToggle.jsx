"use client"
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import estilos from "./themeToggle.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.body.setAttribute("data-theme", saved);
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  }, []);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <button onClick={toggleTheme} aria-label="Alternar tema" className={estilos.botaoTrocaDeTemas} title="Trocar de tema">
      {theme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
}
