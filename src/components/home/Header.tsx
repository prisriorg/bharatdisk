"use client";
import config from "@/app/config";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const FloatingHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState("0px");
  const menuRef = useRef<HTMLUListElement>(null);
  const { name, url } = config;

  interface MenuItem {
    label: string;
    href: string;
  }
  const menuItems: MenuItem[] = [
    { label: "Home", href: url + "/" },
    { label: "Features", href: url + "#features" },
    { label: "Services", href: url + "/services" },
    { label: "Contact", href: url + "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(
        isMobileMenuOpen ? `${menuRef.current.scrollHeight}px` : "0px"
      );
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-4 left-1/2 bg-opacity-75 main-navbar transform -translate-x-1/2 border border-gray-300 shadow-lg rounded-lg z-50 p-4 w-11/12 md:w-3/4 transition-all duration-500 ease-in-out`}
    >
      <nav className="flex justify-between items-center">
        <Link href={url}>
          <div className="text-xl font-bold">{name}</div>
        </Link>
        <ul className="menu-list hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative inline-block px-2 py-1 transition transform duration-300 ease-in-out hover:text-white hover:scale-105 hover:rotate-2"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <ul
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden space-y-2 overflow-hidden transform transition-all duration-500 ease-in-out`}
        style={{ height: menuHeight }}
      >
        <li className="mt-2"></li>
        {menuItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="block hover:text-blue-500"
              onClick={handleMenuItemClick}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default FloatingHeader;
