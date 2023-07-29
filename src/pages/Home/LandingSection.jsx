import { Typewriter } from "react-simple-typewriter";
import { AiOutlineDownload } from "react-icons/ai";
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";

import technologies from "../../assets/images/technologies.png";
const LandingSection = () => {
  const handleDownloadResume = () => {
    const resumeFile = "/public/Resume - Abdullah Nazmus Sakib.pdf";

    // Create a link element
    const downloadLink = document.createElement("a");
    downloadLink.href = resumeFile;
    downloadLink.target = "_blank";
    downloadLink.download = "Resume - Abdullah Nazmus Sakib.pdf";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  };
  return (
    <div
      className="h-screen banner grid md:grid-cols-2 gap-6 px-5 md:px-10"
      id="home"
    >
      <div className="flex items-center">
        <div className="space-y-3">
          <h4 className="text-xl md:text-2xl font-semibold text-white  tracking-widest">
            Hello!
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-white  tracking-wider">
            I&apos;m Abdullah Nazmus Sakib
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-[#DD8560] ">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Software Engineer",
                "Explorer",
                "Learner",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-white text-lg md:w-3/4">
            Passionate and dedicated individual seeking a challenging role in
            the field of web development. Eager to learn and grow while
            delivering exceptional user experiences.
          </p>
          <div className="flex gap-4 text-white items-center py-2">
            <a
              href="https://www.linkedin.com/in/abdullah-nazmus-sakib/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="text-3xl" />
            </a>
            <a
              href="https://github.com/Sakib963"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="text-3xl" />
            </a>
            <a
              href="https://www.facebook.com/abdullahNazmus.Sakib/"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook className="text-3xl" />
            </a>
          </div>
          <button
            onClick={handleDownloadResume}
            className="flex gap-2 items-center bg-[#D9DBE9] px-4 py-2 rounded-md transition ease-in-out delay-150 hover:scale-95 hover:bg-[#d4d5de] duration-300"
          >
            <AiOutlineDownload />
            Resume
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={technologies} alt="" />
      </div>
    </div>
  );
};

export default LandingSection;
