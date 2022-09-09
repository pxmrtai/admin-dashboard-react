import React, { useState } from "react";
import { HiOutlineChevronUp } from "react-icons/hi";
import { Link } from "react-router-dom";

import { Home } from "@/assets/images/Home";
import { dashBoardLinks } from "@/pages/data/dummy";

const DashBoard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div tabIndex={0} className="collapse w-full">
      <input
        type="checkbox"
        className="peer"
        checked={isOpen}
        onChange={() => {
          setIsOpen((oldValue) => !oldValue);
        }}
      />
      <div className="collapse-title p-0 text-[15px] font-medium">
        <div className=" flex items-center justify-between rounded-md border border-base-300 bg-base-100 p-[10px]">
          <div className="flex items-center gap-2">
            <Home />
            <div>DashBoard</div>
          </div>

          <div className={`${isOpen ? "rotate-180" : ""} transition-all`}>
            <HiOutlineChevronUp />
          </div>
        </div>
      </div>
      <div className="collapse-content flex flex-col gap-4 pt-[14px]">
        {dashBoardLinks.links.map((link) => (
          <Link
            to={link.toUrl}
            key={link.toUrl}
            className="flex items-center gap-4 text-[15px] font-medium"
          >
            <div>{link.icon}</div>
            <div>{link.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
