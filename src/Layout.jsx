import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ThemeProvider from "./context/themecontext";

import ScrollToTop from "./components/scrollTop/ScrollTop";

function Layout() {
  // loader

  

  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("mode") || "light";
  });

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
    localStorage.setItem("mode", themeMode);
  }, [themeMode]);

  return (
    <>
      <ScrollToTop />
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <Header />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Layout;
