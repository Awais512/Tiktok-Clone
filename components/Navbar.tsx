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
  const { userProfile, addUser } = useAuthStore();
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
          <div className="cursor-pointer">{userProfile.userName}</div>
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
