import { BotMessageSquare, Edit, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

interface SidebarProps {}

const Sidebar = () => {
  return (
    <div className="bg-white text-white p-5">
      <ul className="gap-5 flex lg:flex-col">
        <li className="flex-1">
          <Link
            href="/create-chatbot"
            className="flex flex-col text-center lg:-text-left lg:flex-row items-center gap-2 p-5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-3 px-6 rounded-md hover:from-yellow-600 hover:to-orange-600 transition duration-300">
            <BotMessageSquare className="h-6 w-6 lg:h-8 lg:w-8" />
            <div className="hidden md:inline">
              <p className="text-xl">Create</p>
              <p className="text-sm ml-1 font-extralight">New Chatbot</p>
            </div>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            href="/view-chatbot"
            className="flex flex-col text-center lg:-text-left lg:flex-row items-center gap-2 p-5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-3 px-6 rounded-md hover:from-yellow-600 hover:to-orange-600 transition duration-300">
            <Edit className="h-6 w-6 lg:h-8 lg:w-8" />
            <div className="hidden md:inline">
              <p className="text-xl">Edit</p>
              <p className="text-sm ml-1 font-extralight">Chatbots</p>
            </div>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            href="/review-sessions"
            className="flex flex-col text-center lg:-text-left lg:flex-row items-center gap-2 p-5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-3 px-6 rounded-md hover:from-yellow-600 hover:to-orange-600 transition duration-300">
            <Search className="h-6 w-6 lg:h-8 lg:w-8" />
            <div className="hidden md:inline">
              <p className="text-xl">View</p>
              <p className="text-sm ml-1 font-extralight">Sessions</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
