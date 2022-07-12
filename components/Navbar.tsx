import React, { useState } from "react";
import Image from "next/image";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Logo from "../utils/tiktik-logo.png";
import { createOrGetUser } from "../utils";
import useAuthStore from "../store/authStore";

const Navbar = () => {
  const { userProfile, addUser, removeUser } = useAuthStore();
  return (
    <div className="w-full flex items-center justify-between border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image src={Logo} alt="Logo" layout="responsive" />
        </div>
      </Link>
      <div>Search</div>
      <div>
        {userProfile ? (
          <div className="cursor-pointer flex gap-5 md:gap-10">
            <Link href="/upload">
              <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2 bg-pink-700 text-white hover:bg-pink-400 rounded-md p-1 transition-all ease-in-out">
                <IoMdAdd className="text-xl" />
                {` `} <span className="hidden md:block">Upload</span>
              </button>
            </Link>
            {userProfile.image && (
              <Link href="/">
                <Image
                  src={userProfile.image}
                  width={40}
                  height={40}
                  className="rounded-full cursor-pointer"
                  alt="Profile"
                />
              </Link>
            )}
            <button
              className="px-2"
              type="button"
              onClick={() => {
                googleLogout();
                removeUser();
              }}
            >
              <AiOutlineLogout color="red" fontSize={21} />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => {
              createOrGetUser(response, addUser);
            }}
            onError={() => console.log("Error")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
