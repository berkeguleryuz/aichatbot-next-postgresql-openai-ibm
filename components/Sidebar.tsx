import Link from "next/link";
import React from "react";

interface SidebarProps {}

const Sidebar = () => {
  return (
    <div className="bg-white text-white p-5">
      <ul className="gap-5 flex lg:flex-col">
        <li className="flex-1">
          <Link href="/create-chatbot">Link</Link>
        </li>
        <li className="flex-1">
          <Link href="/view-chatbot"></Link>
        </li>
        <li className="flex-1">
          <Link href="/review-sessions"></Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
