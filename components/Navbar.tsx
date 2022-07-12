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

const Navbar = () => {
  const [user, setUser] = useState(false);
  return (
    <div className="w-full flex items-center justify-between border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image src={Logo} alt="Logo" layout="responsive" />
        </div>
      </Link>
      <div>Search</div>
      <div>
        {user ? (
          <div>Logged In</div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => {
              console.log(response);
              createOrGetUser(response);
            }}
            onError={() => console.log("Error")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
