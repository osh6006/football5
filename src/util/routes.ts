import { IconType } from "react-icons";
import { MdDashboard as activeDashboard, MdOutlineDashboard as dashboard } from "react-icons/md";
import { TbSortAscendingNumbers as ranking } from "react-icons/tb";

import laligaSvgPath from "/svgs/la-liga.svg";
import eplSvgPath from "/svgs/premier.svg";
import serieSvgPath from "/svgs/serie.svg";
import bundesSvgPath from "/svgs/bundes.svg";
import league1SvgPath from "/svgs/league1.svg";

export interface AllRouteType {
  name: string;
  path: string;
  svg: string;
  color: string;
  $scale: number;
  $mobileScale: number;
}

export interface ChildRouteType extends AllRouteType {
  icon: IconType;
  activeIcon: IconType;
}

export const SecondSidebarRoutes: Omit<ChildRouteType, "svg" | "$scale" | "color" | "$mobileScale">[] = [
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
    $scale: 1.5,
    $mobileScale: 1,
  },
  {
    name: "laliga",
    path: "/laliga",
    svg: laligaSvgPath,
    color: "laliga",
    $scale: 1.5,
    $mobileScale: 1,
  },
  {
    name: "serie",
    path: "/serie",
    color: "serie",
    svg: serieSvgPath,
    $scale: 2.3,
    $mobileScale: 1.8,
  },
  {
    name: "bundes",
    path: "/bundes",
    color: "bundes",
    svg: bundesSvgPath,
    $scale: 1.5,
    $mobileScale: 2,
  },
  {
    name: "league1",
    path: "/league1",
    color: "league1",
    svg: league1SvgPath,
    $scale: 1.5,
    $mobileScale: 2,
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
