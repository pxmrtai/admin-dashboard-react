import React from "react";
import { AiOutlineCalendar, AiOutlineShoppingCart } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { TbDeviceAnalytics } from "react-icons/tb";

import { routePaths } from "@/configs/route-paths";

export const dashBoardLinks = {
  title: "Dashboard",
  links: [
    {
      name: "eCommerce",
      toUrl: routePaths.DASHBOARDS_ECOMMERCE,
      icon: <FiShoppingBag />,
    },
    {
      name: "Analytics",
      toUrl: routePaths.DASHBOARDS_ANALYTICS,
      icon: <TbDeviceAnalytics />,
    },
  ],
};
export const links = [
  {
    title: "Resource",
    links: [
      {
        name: "Products",
        toUrl: routePaths.RESOURCES_PRODUCTS,
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "Customer Group",
        toUrl: routePaths.RESOURCES_CUSTOMER_GROUPS,
        icon: <IoMdContacts />,
      },
      {
        name: "Customers",
        toUrl: routePaths.RESOURCES_CUSTOMERS,
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: "System",
    links: [
      {
        name: "User",
        toUrl: routePaths.SYSTEM_USERS,
        icon: <AiOutlineCalendar />,
      },
    ],
  },
];
