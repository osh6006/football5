import { Outlet } from "react-router-dom";
import styled from "styled-components";
import useChange from "../hooks/useChange";

const EplWrapper = styled.section`
  flex: 1;
  height: 100vh;
  overflow-y: scroll;
`;

export default function Epl() {
  useChange("epl");

  return (
    <EplWrapper>
      <Outlet />
    </EplWrapper>
  );
}
