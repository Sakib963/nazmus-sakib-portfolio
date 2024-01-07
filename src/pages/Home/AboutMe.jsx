import { useState } from "react";
import profilePic from "../../../public/sakib.png";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const handleActiveTab = () => {
    if (activeTab === "experience") {
      setActiveTab("education");
    } else if (activeTab === "education") {
      setActiveTab("experience");
    }
  };
  return (
    <div className="py-10 px-5 md:px-10" id="about">
      <div className="text-center my-10">
        <h2 className="text-3xl border-b inline-block border-black">
          About Me
        </h2>
      </div>
      <div className="my-10 grid grid-cols-1 lg:grid-cols-3 md:gap-10 space-y-5 md:space-y-0">
        <div className="flex items-center justify-center lg:justify-end">
          <img src={profilePic} alt="Profile Picture of Sakib" />
        </div>
        <div className="col-span-2">
          <div className="lg:w-3/4 space-y-3">
            <p>
              Hey, My name is Abdullah Nazmus Sakib, from Dhaka, Bangladesh. I
              take pride in having completed my BSc in Computer Science and
              Engineering from Daffodil International University, where I was
              actively involved in various programming contests, fueling my love
              for challenges and learning.
            </p>
            <p>
              To further sharpen my abilities, I successfully completed a
              comprehensive web development course from Programming Hero. I am
              on an exciting journey of continuous learning and exploration in
              the vast realm of web development.
            </p>
            <div>
              <div className="tabs">
                <a
                  className={
                    activeTab === "experience"
                      ? "tab tab-lifted tab-active"
                      : "tab tab-lifted"
                  }
                  onClick={handleActiveTab}
                >
                  Experience
                </a>
                <a
                  className={
                    activeTab === "education"
                      ? "tab tab-lifted tab-active"
                      : "tab tab-lifted"
                  }
                  onClick={handleActiveTab}
                >
                  Education
                </a>
              </div>
              <div
                className={
                  activeTab === "experience" ? "p-4 space-y-2" : "hidden"
                }
              >
                <div>
                  <h3 className="text-lg font-bold">
                    Junior Software Engineer
                  </h3>
                  <h5 className="text-lg">Celloscope Ltd.</h5>
                  <p>September 2023 - Present</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">
                    Junior MERN Stack Developer
                  </h3>
                  <h5 className="text-lg">Ovigo</h5>
                  <p>June 2023 - August 2023</p>
                </div>
              </div>
              <div
                className={
                  activeTab === "education" ? "p-4 space-y-1" : "hidden"
                }
              >
                <div>
                  <h3 className="text-xl font-bold">BSc in CSE</h3>
                  <h5 className="text-lg">Daffodil International University</h5>
                  <p>2018 - 2022</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Alim (HSC)</h3>
                  <h5 className="text-lg">Madinatul Ulum Kamil Madrasah</h5>
                  <p>2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
