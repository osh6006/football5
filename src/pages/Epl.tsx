import { Outlet } from "react-router-dom";
import styled from "styled-components";

const EplWrapper = styled.section`
  flex: 1;
  height: 100vh;
  overflow-y: scroll;
`;

export default function Epl() {
  return (
    <EplWrapper>
      <Outlet />
    </EplWrapper>
  );
}
