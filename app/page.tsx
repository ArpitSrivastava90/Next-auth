"use client";

import { useSession } from "next-auth/react";
import LogoutButton from "@/components/otherUtlis/logout-button";
import img from "./images/show1.jpg";
import img1 from "./images/portrait.jpg";
import img2 from "./images/show3.jpg";
import { motion } from "framer-motion";
import { CiCirclePlus, CiUser, CiBookmarkCheck } from "react-icons/ci";
import { MdVerified } from "react-icons/md";

const Page = () => {
  const { data: session } = useSession();

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center">
      {/* Top nav */}
      <nav className="w-full flex justify-end items-center p-4 bg-[#0D0D0D] shadow-md">
        {session?.user?.image ? (
          <img
            src={session.user.image}
            alt="avatar"
            className="w-10 h-10 rounded-full mr-4"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-700 mr-4 flex items-center justify-center text-white">
            {session?.user?.name?.[0] ?? "U"}
          </div>
        )}
        <LogoutButton />
      </nav>

      {/* Center card */}
      <div className="container w-72 h-[450px] relative rounded-2xl bg-[#1A1A1A] flex flex-col justify-between p-2 pb-3 overflow-hidden mt-8">
        {/* Background image */}
        <motion.div
          whileHover={{ height: "100%" }}
          className="drop-down h-[260px] w-full rounded-2xl bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${img2.src})` }}
        />

        {/* Info box with fading blur */}
        <div
          className="info-box pl-3 flex flex-col pt-8 text-white h-44 w-[272px] absolute bottom-[7px] rounded-bl-2xl rounded-br-2xl z-50 bg-transparent backdrop-blur-[8.5px]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to top, black 70%, transparent 100%)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskImage: "linear-gradient(to top, black 70%, transparent 100%)",
            maskRepeat: "no-repeat",
            maskSize: "100% 100%",
          }}
        >
          <h1 className="text-2xl w-48 flex items-center justify-evenly">
            <span>Sophie Bannet</span>
            <MdVerified />
          </h1>
          <h1 className="text-gray-200 text-sm">
            Beauty Lies within a soul, Rest is Just a Noise
          </h1>
          <div className="foot w-full pr-3 flex justify-between items-center mt-4">
            <div className="w-36 flex pr-5">
              <div className="b1 flex w-16 h-5 items-center justify-evenly">
                <CiUser />
                <h1 className="text-sm">213</h1>
              </div>
              <div className="b1 flex w-16 h-5 items-center justify-evenly">
                <CiBookmarkCheck />
                <h1 className="text-md">24</h1>
              </div>
            </div>
            <div className="b3 w-24 h-8 bg-[#1F1F1F] flex justify-evenly items-center rounded-xl pl-1 pr-1">
              <h1>Follow</h1>
              <CiCirclePlus className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
