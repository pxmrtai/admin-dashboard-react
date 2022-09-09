import React from "react";
import { HiOutlineXCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

import mainLogoIcon from "../../../../../assets/images/main-logo-icon.png";

import DashBoard from "./DashBoard";

import { links } from "@/pages/data/dummy";

const SideNavigationr = ({
  setActiveMenu,
}: {
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div className="flex h-screen flex-col items-start gap-8 overflow-auto px-[15px] pb-10 pt-[25px] md:overflow-hidden md:hover:overflow-auto">
    <div className="flex w-full items-center justify-between">
      <Link to="/" className="flex items-center gap-3 text-[24px] font-bold text-[#7367F0]">
        <img src={mainLogoIcon} alt="mainLogoIcon" />
        <span>Vuexy</span>
      </Link>
      <div
        className="tooltip tooltip-bottom"
        data-tip="Close"
        onClick={() => {
          setActiveMenu(false);
        }}
      >
        <HiOutlineXCircle className="cursor-pointer text-[24px]" />
      </div>
    </div>
    <DashBoard />
    <div className="flex flex-col gap-4">
      {links.map((item) => (
        <div className="flex flex-col" key={item.title}>
          <div className="text-[12px] font-semibold uppercase">{item.title}</div>
          <div className="flex flex-col items-start gap-[18px] p-3">
            {item.links.map((link) => (
              <Link
                to={link.toUrl}
                key={link.name}
                className="flex items-center gap-4 text-[15px] font-medium "
              >
                <div>{link.icon}</div>
                <div>{link.name}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SideNavigationr;
