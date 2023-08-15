import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import styled from "styled-components";
import { NavRoutes } from "../util/routes";
import Bottombar from "../components/common/Bottombar";

const RootWrapper = styled.main`
  position: relative;
  display: flex;
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
`;

export default function Root() {
  return (
    <RootWrapper>
      <Sidebar menus={NavRoutes} />
      <Bottombar menus={NavRoutes} />
      <Outlet />
    </RootWrapper>
  );
}
