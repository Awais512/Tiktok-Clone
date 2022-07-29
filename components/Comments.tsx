import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoVerified } from "react-icons/go";

import useAuthStore from "../store/authStore";
import NoResult from "./NoResult";
import { IUser } from "../types";

const Comments = () => {
  const comments = [];
  return (
    <div className="border-t-2 border-gray-200 pt-4 px-10 bg-[#F8F8F8] border-b-2 lg:pb-0 pb-[100px]">
      <div className="overflow-scroll lg:h-[470px]">
        {comments.length ? (
          <div>Videos</div>
        ) : (
          <div>
            <NoResult text="No Comments Yet" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
