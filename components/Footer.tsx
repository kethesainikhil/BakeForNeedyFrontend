import Link from "next/link";
import { SiInstagram, SiYoutube, SiX, SiGithub } from "@icons-pack/react-simple-icons";
const Footer = () => {
    return (
      <div className="bottom-0 h-48 w-full p-4 bg-neutral-900 dark:bg-slate-900 px-6 lg:px-36 print:hidden">
        <div className="md:max-w-screen-2xl mt-4 mx-auto flex flex-row items-start justify-between w-full">
          <div className="flex flex-col md:flex-row w-3/5 md:justify-between">
            <div className=" ml-21 gradient-text text-white text-5xl my-auto text-center ">
                Beak for Needy
            </div>
            <div className="flex flex-col justify-center my-8 md:my-0">
              <h3 className="font-semibold text-neutral-100 mb-4">Quick Links</h3>
              <Link href={"/about"} className="hover:text-blue-500 text-neutral-200">
                About
              </Link>
              <Link href={"/tnc"} className="hover:text-blue-500 text-neutral-200">
                Terms & Conditions
              </Link>
              <Link href={"/privacy-policy"} className="hover:text-blue-500 text-neutral-200">
                Privacy Policy
              </Link>
            </div>
          </div>
  
              <div className="flex flex-col">
              <h4 className="text-neutral-200 font-semibold mb-2">Follow us</h4>
              <div className="flex flexc gap-x-2">
                <Link target="_blank" href={"https://twitter.com/Nikhil2"}>
                  <SiX className="text-white hover:text-blue-500" />
                </Link>
                <Link target="_blank" href={"https://www.instagram.com/kethesainikil/"}>
                  <SiInstagram className="text-white hover:text-blue-500" />
                </Link>
                <Link target="_blank" href={"https://www.github.com/kethesainikhil"}>
                  <SiGithub className="text-white hover:text-blue-500" />
                </Link>
              </div>
              </div>
            </div>
            </div>
    );
  };
  
  export default Footer;