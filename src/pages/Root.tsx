import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import styled from "styled-components";
import { NavRoutes } from "../util/routes";
import BottomBar from "../components/common/BottomBar";
import SearchBar from "../components/common/SearchBar";

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
      <BottomBar menus={NavRoutes} />
      <SearchBar />
      <Outlet />
    </RootWrapper>
  );
}
