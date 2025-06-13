import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional: icons via lucide-react or any icon lib

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/resume", label: "Resume" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white font-medium py-6 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-15 relative z-50">
        {/* Brand */}
        <NavLink to="/" className="text-xl font-bold text-orange-400 z-10">
          JordanJames
        </NavLink>

        {/* Center Nav Links (Desktop Only) */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 text-gray-300">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "text-white border-b-2 border-orange-400 font-semibold"
                    : "hover:text-white border-b-2 border-transparent hover:border-orange-400 transition"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Contact (Always Right) */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold border-b-2 border-orange-400 hidden md:block"
              : "text-white font-semibold hover:text-orange-400 transition hidden md:block"
          }
        >
          Contact
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-20"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur py-4 px-6 space-y-4 text-white">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block border-b ${
                  isActive
                    ? "text-white border-orange-400 font-semibold"
                    : "text-gray-300 border-transparent hover:text-white hover:border-orange-400"
                } pb-2 transition`
              }
            >
              {label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `block pt-2 ${
                isActive
                  ? "text-white font-semibold border-b border-orange-400"
                  : "text-white font-semibold hover:text-orange-400"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
