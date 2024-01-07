import elegantEdgeBanner from "../../../public/Elegant-Edge-Banner.png";
import travelStayBanner from "../../../public/Travel-Stay-Banner.png";
import superfinityBanner from "../../../public/Superfinity-Banner.png";

import { LiaShareSolid } from "react-icons/lia";
import { PiGithubLogoThin } from "react-icons/pi";

const Projects = () => {
  const elegantEdgeLiveSite = () => {
    const url = "https://elegant-edge-client.web.app/";
    window.open(url, "_blank");
  };
  const elegantEdgeRepo = () => {
    const url = "https://github.com/Sakib963/elegant-edge-client";
    window.open(url, "_blank");
  };

  const travelStayLiveSite = () => {
    const url = "https://travel-stay-client.web.app/";
    window.open(url, "_blank");
  };
  const travelStayRepo = () => {
    const url = "https://github.com/Sakib963/travel-stay-client";
    window.open(url, "_blank");
  };

  const superfinityLiveSite = () => {
    const url = "https://superfinity-client.web.app/";
    window.open(url, "_blank");
  };
  const superfinityRepo = () => {
    const url = "https://github.com/Sakib963/superfinity-client";
    window.open(url, "_blank");
  };

  return (
    <div className="pb-10 px-5 md:px-10" id="projects">
      <div className="text-center mb-10">
        <h2 className="text-3xl border-b inline-block border-black">
          Projects
        </h2>
      </div>

      {/* Projects Container */}
      <div className="grid lg:grid-cols-3 gap-6 md:w-3/4 mx-auto">
        {/* Card 1: Elegant Edge */}
        <div className="border border-gray-400 rounded-md bg-[#D9DBE9] shadow-md">
          <div className="w-full">
            <img
              src={elegantEdgeBanner}
              alt="Elegant Edge Fashion School"
              className="rounded-md"
            />
          </div>
          <div className="space-y-1 p-5">
            <h3 className="text-xl md:text-2xl font-bold">
              Elegant Edge Fashion School
            </h3>
            <p>
              Elegant Edge is a fashion design school that offers short classes
              as a summer camp school. That covers course enrollment.
            </p>
            <div className="space-y-2 md:space-y-0 md:space-x-2">
              <div className="badge bg-black text-white">MERN</div>
              <div className="badge bg-black text-white">Firebase Auth</div>
              <div className="badge bg-black text-white">Stripe</div>
              <div className="badge bg-black text-white">DaisyUI</div>
              <div className="badge bg-black text-white">Axios</div>
              <div className="badge bg-black text-white">React Query</div>
            </div>
            <div className="pt-5 2xl:flex justify-between gap-6 space-y-2 2xl:space-y-0">
              <button
                onClick={elegantEdgeLiveSite}
                className="flex gap-2 items-center justify-center bg-[#f0f1f5] px-4 py-2 rounded-md transition ease-in-out delay-150 hover:scale-95 hover:bg-[#d4d5de] duration-300 w-full"
              >
                <LiaShareSolid />
                Live Site
              </button>
              <button
                onClick={elegantEdgeRepo}
                className="flex gap-2 items-center justify-center bg-[#f0f1f5] px-4 py-2 rounded-md transition ease-in-out delay-150 hover:scale-95 hover:bg-[#d4d5de] duration-300 w-full"
              >
                <PiGithubLogoThin />
                GitHub Repo
              </button>
            </div>
          </div>
        </div>
        {/* Card 2: Travel Stay */}
        <div className="border border-gray-400 rounded-md bg-[#D9DBE9] shadow-md">
          <div className="w-full">
            <img
              src={travelStayBanner}
              alt="Travel Stay: Hotel Booking"
              className="rounded-md"
            />
          </div>
          <div className="space-y-1 p-5">
            <h3 className="text-xl md:text-2xl font-bold">Travel Stay</h3>
            <p>
              Travel Stay is a hotel booking website where user can book hotels
              for a specific date and business owner can list their properties
              to get reservations.
            </p>
            <div className="space-y-2 md:space-y-0 md:space-x-2">
              <div className="badge bg-black text-white">MERN</div>
              <div className="badge bg-black text-white">Firebase Auth</div>
              <div className="badge bg-black text-white">Tailwind CSS</div>
              <div className="badge bg-black text-white">DaisyUI</div>
              <div className="badge bg-black text-white">Axios</div>
              <div className="badge bg-black text-white">React Query</div>
            </div>
            <div className="pt-5 2xl:flex justify-between gap-6 space-y-2 2xl:space-y-0">
              <button
                onClick={travelStayLiveSite}
                className="flex gap-2 items-center justify-center bg-[#f0f1f5] px-4 py-2 rounded-md transition ease-in-out delay-150 hover:scale-95 hover:bg-[#d4d5de] duration-300 w-full"
              >
                <LiaShareSolid />
                Live Site
              </button>
              <button
                onClick={travelStayRepo}
                className="flex gap-2 items-center justify-center bg-[#f0f1f5] px-4 py-2 rounded-md transition ease-in-out delay-150 hover:scale-95 hover:bg-[#d4d5de] duration-300 w-full"
              >
                <PiGithubLogoThin />
                GitHub Repo
              </button>
            </div>
          </div>
        </div>
        {/* Card 3: Superfinity */}
        <div className="border border-gray-400 rounded-md bg-[#D9DBE9] shadow-md">
          <div className="w-full">
            <img
              src={superfinityBanner}
              alt="SUPERFINITY: Marvel Based Toy Store"
              className="rounded-md"
            />
          </div>
          <div className="space-y-1 p-5">
            <h3 className="text-xl md:text-2xl font-bold">Superfinity</h3>
            <p>
              Superfinity is a toy store based on Marvel Universe Theme. Where
              you can get Action Figure Toys and Comics too.
            </p>
            <div className="space-y-2 md:space-y-0 md:space-x-2">
              <div className="badge bg-black text-white">MERN</div>
              <div className="badge bg-black text-white">Firebase Auth</div>
              <div className="badge bg-black text-white">Tailwind CSS</div>
              <div className="badge bg-black text-white">DaisyUI</div>
              <div className="badge bg-black text-white">Swiper</div>
            </div>
            <div className="pt-5 2xl:flex justify-between gap-6 space-y-2 2xl:space-y-0">
              <button
                onClick={superfinityLiveSite}
                className="flex gap-2 items-center justify-center bg-[#f0f1f5] px-4 py-2 rounded-md transition ease-in-out delay-150 hover:scale-95 hover:bg-[#d4d5de] duration-300 w-full"
              >
                <LiaShareSolid />
                Live Site
              </button>
              <button
                onClick={superfinityRepo}
                className="flex gap-2 items-center justify-center bg-[#f0f1f5] px-4 py-2 rounded-md transition ease-in-out delay-150 hover:scale-95 hover:bg-[#d4d5de] duration-300 w-full"
              >
                <PiGithubLogoThin />
                GitHub Repo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
