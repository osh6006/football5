import styled from "styled-components";
import useChange from "../hooks/useChange";
import { Outlet, useLocation, useParams } from "react-router-dom";

const LeagueWrapper = styled.section`
  flex: 1;
  height: 100vh;
  overflow-y: scroll;
`;

const League = () => {
  console.log(useLocation());
  console.log(useParams());

  useChange("epl");
  return (
    <LeagueWrapper>
      <Outlet />
    </LeagueWrapper>
  );
};

export default League;
