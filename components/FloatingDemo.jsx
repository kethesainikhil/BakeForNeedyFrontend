"use client";
import React, { useEffect, useState } from "react";
import { FloatingNav } from "./UI/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import donate from '../public/donate.png'
import Image from "next/image";
import { useSelector } from "react-redux";
export function FloatingNavDemo() {
  const orgDetails = useSelector((state) => state.donation.OrgDetails);
  const[button,setButton] = useState("Login")
  const navItems = [
    {
      name: "Home",
      link: "/homepage",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/aboutpage",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Donate",
      link: "/donarpage",
      icon: (
        <Image height={50} width={50} className="dark:text-white" src={donate} alt="donate" />
      ),
    },
  ];
  useEffect(() => {
    if(orgDetails?.orgId || localStorage.getItem("orgDetails")){
      setButton("Logout")
    }
  }, [orgDetails]);
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} button={button} setButton={setButton} />
    </div>
  );
}
