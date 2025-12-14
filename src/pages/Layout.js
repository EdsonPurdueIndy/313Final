import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import Footer from "../components/Footer";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen bg-neutral-950 text-emerald-200 flex flex-col">
      <nav className="p-4 border-b border-emerald-700/40 relative flex items-center justify-between">
        <button
          onClick={toggleMenu}
          className="text-emerald-200 text-2xl md:hidden"
        >
          ☰
        </button>

        <ul
          className={`flex flex-col md:flex-row gap-4 mt-2 md:mt-0 ${
            isOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <li>
            <Link to="/" className="block p-2 hover:text-emerald-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="block p-2 hover:text-emerald-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block p-2 hover:text-emerald-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
