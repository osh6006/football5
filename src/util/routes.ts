// import { IconType } from "react-icons";
// import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import laligaSvgPath from "/svgs/la-liga.svg";
import eplSvgPath from "/svgs/premier.svg";
import serieSvgPath from "/svgs/serie.svg";
import bundesSvgPath from "/svgs/bundes.svg";
import league1SvgPath from "/svgs/league1.svg";

export interface RouteType {
  name: string;
  path: string;
  svg: string;
  // icon?: IconType;
  // activeIcon?: IconType;
  color: string;
  isBig?: boolean;
}

export const NavRoutes: RouteType[] = [
  {
    name: "epl",
    path: "/epl",
    color: "epl",
    svg: eplSvgPath,
  },
  {
    name: "laliga",
    path: "/laliga",
    svg: laligaSvgPath,
    color: "laliga",
  },
  {
    name: "serie",
    path: "/serie",
    color: "serie",
    svg: serieSvgPath,
    isBig: true,
  },
  {
    name: "bundes",
    path: "/bundes",
    color: "bundes",
    svg: bundesSvgPath,
  },
  {
    name: "league1",
    path: "/league1",
    color: "league1",
    svg: league1SvgPath,
  },
];
