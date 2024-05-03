"use client";
import { cn } from "@/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const darkTheme = "dark-theme";
  const [activeTab, setActiveTab] = useState("home");
  const [showNavbar, setShowNavbar] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    setActiveTab(hash.replace("#", ""));
  }, []);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleActiveLink = (tabName) => {
    setActiveTab(tabName);
    if (mobileMenu) {
      handleMobileMenu();
    }
  };

  const handleNavbar = () => {
    if (window.scrollY > 80) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);

    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, []);

  console.log(mobileMenu);

  const handleToggleTheme = (theme) => {
    localStorage.setItem("selected-theme", theme);
    setTheme(theme);
    // We validate if the user previously chose a topic
    if (theme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[theme === "dark" ? "add" : "remove"](darkTheme);
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("selected-theme") ?? "light";
    handleToggleTheme(theme);
  }, []);

  return (
    <header className={cn("header", showNavbar && "scroll-header")} id="header">
      <nav className="nav container">
        <Link href="#" className="nav__logo">
          <i className="ri-leaf-line nav__logo-icon"></i> Plantex
        </Link>

        <div
          className={cn("nav__menu", mobileMenu && "show-menu")}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                href="#home"
                className={cn(
                  "nav__link",
                  activeTab === "home" && "active-link"
                )}
                onClick={() => {
                  handleActiveLink("home");
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#about"
                className={cn(
                  "nav__link",
                  activeTab === "about" && "active-link"
                )}
                onClick={() => {
                  handleActiveLink("about");
                }}
              >
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#products"
                className={cn(
                  "nav__link",
                  activeTab === "products" && "active-link"
                )}
                onClick={() => {
                  handleActiveLink("products");
                }}
              >
                Products
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#faqs"
                className={cn(
                  "nav__link",
                  activeTab === "faqs" && "active-link"
                )}
                onClick={() => {
                  handleActiveLink("faqs");
                }}
              >
                FAQs
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#contact"
                className={cn(
                  "nav__link",
                  activeTab === "contact" && "active-link"
                )}
                onClick={() => {
                  handleActiveLink("contact");
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="nav__close" id="nav-close" onClick={handleMobileMenu}>
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__btns">
          {/* <!-- Theme change button --> */}
          <i
            className={cn(
              "ri-moon-line change-theme",
              theme === "dark" && "ri-sun-line"
            )}
            id="theme-button"
            onClick={() => {
              handleToggleTheme(theme === "dark" ? "light" : "dark");
            }}
          ></i>

          <div
            className={cn("nav__toggle")}
            id="nav-toggle"
            onClick={handleMobileMenu}
          >
            <i className="ri-menu-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
