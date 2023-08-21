import { IconType } from "react-icons";
import { RiDashboardFill as activeDashboard } from "@react-icons/all-files/ri/RiDashboardFill";
import { RiDashboardLine as dashboard } from "@react-icons/all-files/ri/RiDashboardLine";
import { ImSortNumericAsc as ranking } from "@react-icons/all-files/im/ImSortNumericAsc";

import laligaSvgPath from "/svgs/la-liga.svg";
import eplSvgPath from "/svgs/premier.svg";
import serieSvgPath from "/svgs/serie.svg";
import bundesSvgPath from "/svgs/bundes.svg";
import league1SvgPath from "/svgs/league1.svg";

export interface AllRouteType {
  id: number;
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

export const SecondSidebarRoutes: Omit<ChildRouteType, "svg" | "$scale" | "color" | "$mobileScale" | "id">[] = [
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
    id: 39,
    name: "epl",
    path: "/league/39",
    color: "#44066A",
    svg: eplSvgPath,
    $scale: 1.5,
    $mobileScale: 1,
  },
  {
    id: 140,
    name: "laliga",
    path: "/league/140",
    svg: laligaSvgPath,
    color: "#7c561d",
    $scale: 1.5,
    $mobileScale: 1,
  },
  {
    id: 135,
    name: "serie",
    path: "/league/135",
    color: "#1DA5AD",
    svg: serieSvgPath,
    $scale: 2.3,
    $mobileScale: 1.8,
  },
  {
    id: 78,
    name: "bundes",
    path: "/league/78",
    color: "#DC2939",
    svg: bundesSvgPath,
    $scale: 1.5,
    $mobileScale: 2,
  },
  {
    id: 61,
    name: "league1",
    path: "/league/61",
    color: "#0A5C15",
    svg: league1SvgPath,
    $scale: 1.5,
    $mobileScale: 2,
  },
];
