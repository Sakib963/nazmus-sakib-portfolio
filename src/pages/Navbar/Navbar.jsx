import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <a
          href="/#home"
          className="px-3 py-2 hover:bg-black hover:text-white cursor-pointer rounded-md transition translate-x-1 duration-300"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/#about"
          className="px-3 py-2 hover:bg-black hover:text-white cursor-pointer rounded-md transition translate-x-1 duration-300"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="/#projects"
          className="px-3 py-2 hover:bg-black hover:text-white cursor-pointer rounded-md transition translate-x-1 duration-300"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="/#contact"
          className="px-3 py-2 hover:bg-black hover:text-white cursor-pointer rounded-md transition translate-x-1 duration-300"
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar border-b border-[#555555] md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu className="text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">Sakib</h2>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Navbar;
