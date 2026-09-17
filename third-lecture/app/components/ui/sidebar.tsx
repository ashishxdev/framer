import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ChartBarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: "Home",
      href: "/",
      icon: <HomeIcon />,
    },
    {
      name: "Analytics",
      href: "/analytics",
      icon: <ChartBarIcon />,
    },
    {
      name: "Users",
      href: "/users",
      icon: <UserIcon />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <SettingsIcon />,
    },
  ];

  const sidebarVariant = {
    open: {
      width: "12rem",
    },
    closed: {
      width: "4.5rem",
    },
  };

  const parentVariants = {
    open: {
      transition: {
        staggerChildren: 0.07, // appear each child in 0.07s
        delayChildren: 0.2, // delay for 0.2s before starting
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05, // hide each child in 0.07s
        staggerDirection: -1, // -1 closes in reverse order
      },
    },
  };

  const childVariant = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      transition={{
        duration: 0.3,
      }}
      className="border-r border-neutral-100 h-full"
    >
      <motion.nav
        // initial={false}
        // animate={isOpen ? "open" : "closed"}
        // //   variants={{
        // //     open: { width: "200px" },
        // //     closed: { width: "80px" },
        // //   }}
        variants={sidebarVariant}
        // transition={{
        //   duration: 0.3,
        // }}
        className="bg-white shadow-md h-full"
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className={`text-xl font-semibold ${!isOpen && "sr-only"}`}>
            Dashboard
          </h2>

          {/* Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </button>
        </div>

        <div className="relative">
          {/* Sidebar Content */}
          <nav className="p-4">
            <motion.ul variants={parentVariants} className="space-y-2">
              {links.map((link) => (
                <motion.li variants={childVariant} key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-200"
                    title={!isOpen ? link.name : ""}
                  >
                    {link.icon}
                    {isOpen && link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
      </motion.nav>
    </motion.div>
  );
};
