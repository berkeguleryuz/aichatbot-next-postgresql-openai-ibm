import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Nav = () => {
  return (
    <header className="bg-white shadow-sm text-gray-800 flex justify-between p-4">
      <Link href={"/"} className="flex items-center text-4xl font-thin gap-2 sm:gap-4">
        <Avatar seed="Clodron Global" />
        <div className="space-y-1">
          <Image 
            src="/logo.png"
            alt="Clodron Logo"
            width={100}
            height={100}
          />
          <h2 className="text-sm">Customizable AI Chatbot</h2>
        </div>
      </Link>

      <div className="flex items-center">
        <SignedIn>
          <UserButton showName />
        </SignedIn>

        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  );
};

export default Nav;
