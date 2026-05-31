import Link from "next/link";
import ThemeBtn from "./ThemeBtn";

const Navbar = () => {
  return (
    <div
      className="
     sticky top-2 mx-auto my-2
        z-50 w-[95%] max-w-5xl
        rounded-2xl
        bg-[var(--bg)]/80
        text-[var(--text)]
        backdrop-blur-md
        border border-white/10
        shadow-lg
        shadow-lime-400/50
      ">
      <div className="navbar px-4 min-h-14">
        {/* Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="
                menu menu-sm dropdown-content
                mt-3 w-52 p-2
                rounded-xl
                shadow-lg
                bg-[var(--bg)]
                text-[var(--text)]
                z-10
              ">
              <li>
                <Link href="/contact">Contact</Link>
              </li>

              <li>
                <details>
                  <summary>Parent</summary>

                  <ul
                    className="
                    mt-2
                      p-2 rounded-xl
                      bg-[var(--bg)]/80
                      text-[var(--text)]
                    ">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="btn btn-ghost text-lg font-bold px-2">
            <span className="text-primary">daisy</span>UI
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1">
            <li>
              <Link
                href="/contact"
                className="rounded-xl font-medium">
                Contact
              </Link>
            </li>

            <li>
              <details>
                <summary className="rounded-xl font-medium">
                  Parent
                </summary>

                <ul
                  className="
                    mt-8
                      p-2 rounded-xl
                      bg-[var(--bg)]/80
                      text-[var(--text)]
                    w-44
                  ">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a className="rounded-xl font-medium">
                Item 3
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2">
          <ThemeBtn />

          <button className="btn btn-primary btn-sm rounded-xl px-4">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;