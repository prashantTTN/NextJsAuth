"use client";

import Blog from "@/app/blog/page";
import { User } from "@/types/user";
import { signOut } from "next-auth/react";

type UserInfoProps = {
  user: User;
}

export default function UserInfo({ user }: UserInfoProps) {
  const handleLogout = async () => {
    await signOut();
  }

  const handleBlog = () => {
    window.location.href = "/blog";
  }

  return(
	  <div className="rounded-lg border shadow-lg p-10">
      <div>
        Welcome : {user.name}
      </div>
      <div>
        <button className="font-medium mt-2 text-blue-600 hover:underline" onClick={handleLogout}>
          Log out
        </button>
      </div>
      <div>
        <button className="font-medium mt-2 text-blue-600 hover:underline" onClick={handleBlog}> Go to Blog</button>
      </div>
    </div>
  );
}