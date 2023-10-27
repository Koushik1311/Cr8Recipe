import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { FcAbout } from "react-icons/fc";
import { GiForkKnifeSpoon } from "react-icons/gi";

export const navLinks = [
  {
    name: "Home",
    icon: BiHomeAlt2,
    link: "/",
  },
  {
    name: "Recipe",
    icon: GiForkKnifeSpoon,
    link: "recipe",
  },
  {
    name: "About",
    icon: FcAbout,
    link: "/about",
  },
  {
    name: "Contact",
    icon: HiOutlinePhoneOutgoing,
    link: "contact",
  },
] as const;
