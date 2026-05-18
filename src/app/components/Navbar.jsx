// "use client";
// import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";
import ThemeBtn from "./ThemeBtn";
const Navbar = () => {

  // const { isDark, setIsDark } = useTheme();

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl shadow-lg rounded-2xl bg-base-100">
      <div className="navbar px-4 min-h-14">

        {/* Mobile hamburger */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li><Link href="/contact">Contact</Link></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>

          {/* Logo */}
          <a className="btn btn-ghost text-lg font-bold px-2">
            <span className="text-primary">daisy</span>UI
          </a>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li><Link href="/contact" className="rounded-xl font-medium">Contact</Link></li>
            <li>
              <details>
                <summary className="rounded-xl font-medium">Parent</summary>
                <ul className="p-2 bg-base-100 rounded-xl shadow w-44 z-10">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a className="rounded-xl font-medium">Item 3</a></li>
          </ul>
        </div>

        {/* Right side */}
        <div className="navbar-end gap-2">

          {/* Theme toggle icon — wire up your own handler here */}
          <ThemeBtn />
          <a className="btn btn-primary btn-sm rounded-xl px-4">Button</a>
        </div>

      </div>
    </div>
  );
};

export default Navbar;