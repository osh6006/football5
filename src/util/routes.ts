import { IconType } from "react-icons";
import { MdDashboard as activeDashboard, MdOutlineDashboard as dashboard } from "react-icons/md";
import { TbSortAscendingNumbers as ranking } from "react-icons/tb";

import laligaSvgPath from "/svgs/la-liga.svg";
import eplSvgPath from "/svgs/premier.svg";
import serieSvgPath from "/svgs/serie.svg";
import bundesSvgPath from "/svgs/bundes.svg";
import league1SvgPath from "/svgs/league1.svg";

export interface RouteType {
  name: string;
  path: string;
  svg: string;
  color: string;
  isBig?: boolean;
}

export interface ChildRouteType extends RouteType {
  icon: IconType;
  activeIcon: IconType;
}

export interface AllRouteType {
  name: string;
  path: string;
  svg: string;
  color: string;
  $isBig?: boolean;
}

export const SecondSidebarRoutes: Omit<ChildRouteType, "svg" | "isBig" | "color">[] = [
  {
    name: "Overview",
    path: "/overview",
    activeIcon: activeDashboard,
    icon: dashboard,
  },
  {
    name: "Rank",
    path: "/rank",
    activeIcon: ranking,
    icon: ranking,
  },
];

export const SidebarRoutes: AllRouteType[] = [
  {
    name: "epl",
    path: "/epl",
    color: "epl",
    svg: eplSvgPath,
    $isBig: false,
  },
  {
    name: "laliga",
    path: "/laliga",
    svg: laligaSvgPath,
    color: "laliga",
    $isBig: false,
  },
  {
    name: "serie",
    path: "/serie",
    color: "serie",
    svg: serieSvgPath,
    $isBig: true,
  },
  {
    name: "bundes",
    path: "/bundes",
    color: "bundes",
    svg: bundesSvgPath,
    $isBig: false,
  },
  {
    name: "league1",
    path: "/league1",
    color: "league1",
    svg: league1SvgPath,
    $isBig: false,
  },
];

// export function getSecondSidebarRoutes(league: string): Omit<ChildRouteType, "svg" | "isBig" | "color">[] {
//   return [
//     {
//       name: "Overview",
//       path: "",
//       activeIcon: activeDashboard,
//       icon: dashboard,
//     },
//     {
//       name: "Rank",
//       path: "rank",
//       activeIcon: activeDashboard,
//       icon: dashboard,
//     },
//   ];
// }
