import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer items-center px-10 bg-black  text-white py-5">
      <div className="md:flex items-center gap-2">
        <h2 className="text-2xl md:text-3xl font-bold">Sakib</h2>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://www.linkedin.com/in/abdullah-nazmus-sakib/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="text-2xl" />
        </a>
        <a href="https://github.com/Sakib963" target="_blank" rel="noreferrer">
          <BsGithub className="text-2xl" />
        </a>
        <a
          href="https://www.facebook.com/abdullahNazmus.Sakib/"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook className="text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
