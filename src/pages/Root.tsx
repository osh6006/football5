import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import styled from "styled-components";
import { SidebarRoutes } from "../util/routes";
import BottomBar from "../components/common/BottomBar";

const RootWrapper = styled.main`
  position: relative;
  display: flex;
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.white};
`;

export default function Root() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/epl/overview");
    }
  }, [navigate, pathname]);

  return (
    <RootWrapper>
      <Sidebar menus={SidebarRoutes} />
      <BottomBar menus={SidebarRoutes} />
      <Outlet />
    </RootWrapper>
  );
}
