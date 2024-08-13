// src/HomePage.tsx
"use client";
import React, { useEffect, useState } from "react";
import FloatingHeader from "./Header";
import Features from "./Features";
import { MainHome } from "./MainHome";
import { Footer } from "./Footer";
import { Reviews } from "./Reviews";
import { HowWorking } from "./HowWorking";
import { UserCount } from "./UserCount";
import Parti from "./Parti";

const HomePage: React.FC = () => {
  const [theme, setTheme] = useState("dark");
  const themeData = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <main className="main-background" >
      <div className="animate-gradient-xy min-h-screen mx-auto w-11/12 md:w-3/4 transition-all duration-500 ease-in-out">
        <Parti />
        <FloatingHeader />
        <MainHome />
        <Features />
        <Reviews />
        <UserCount />
        <HowWorking />
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;
