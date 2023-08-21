import styled from "styled-components";
import useChange from "../hooks/useChange";
import { Outlet } from "react-router-dom";

const LeagueWrapper = styled.section`
  flex: 1;
  height: 100vh;
  overflow-y: scroll;
`;

const League = () => {
  useChange();
  return (
    <LeagueWrapper>
      <Outlet />
    </LeagueWrapper>
  );
};

export default League;
