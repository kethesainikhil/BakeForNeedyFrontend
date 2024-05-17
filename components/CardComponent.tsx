"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./UI/threeDCard";
import Link from "next/link";
import donation from "../public/donationImage.png"
import { useRouter } from "next/router";

export function CardComponent() {
  const router = useRouter();
  return (
    <div >
      
    <CardContainer containerClassName="sm:w-1/2 custom-component rounded-xl sm:mx-auto mt-40 mx-4   sm:mt-60 pt-10 sm:pb-4 pb-6" className=" h-full w-full">
      <CardBody className=" mx-auto  text-white w-full sm:w-3/4 sm:py-2 group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl px-6 border  ">
        <CardItem
          translateZ="50"
          className="text-3xl gradient-text my-0 sm:my-2 pt-2 sm:pt-0 mx-auto font-bold text-neutral-600  dark:text-white"
        >
          NGO / Social Welfare Centers
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-500 mx-auto text-md mt-4 dark:text-neutral-300"
        >
          Join With Us for bringing Smile in Needy People's Face
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={donation}
            className="sm:h-60 h-48 w-9/12 mx-auto object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex   justify-center items-center sm:pb-10 pb-4 mt-5 sm:mt-20">
          {/* <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 mt-4 "
          >
            <Link href ="/orgRegister"className="bg-gradient-to-r hover:cursor-pointer from-red-400 to-red-500 hover from-green-400 to-yellow-400 
            hover:from-yellow-400 hover:to-yellow-500 focus:outline-none focus:ring-2 
            focus:ring-yellow-500 focus:ring-opacity-50  px-8 py-2 rounded-md text-white font-semibold shadow-md transition-all duration-300">Sign Up</Link>
          </CardItem> */}
        </div>
      </CardBody>
    </CardContainer>
    <div className="text-white rounded-lg mt-16 px-6  py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-purple-500 w-32  flex mx-auto justify-center">
      <button className="rounded-lg" onClick={() => router.push("/orgRegister")}>
        sign up
      </button>
    </div>
    </div>
  );
}
