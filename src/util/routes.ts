import { IconType } from "react-icons";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
export interface RouteType {
  name: string;
  path: string;
  icon: IconType;
  activeIcon: IconType;
}

export const NavRoutes: RouteType[] = [
  {
    name: "홈",
    icon: AiOutlineHome,
    path: "/",
    activeIcon: AiFillHome,
  },
  {
    name: "어바웃",
    icon: AiOutlineHome,
    path: "/about",
    activeIcon: AiFillHome,
  },
];
