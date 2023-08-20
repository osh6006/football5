import { Outlet } from "react-router-dom";
import styled from "styled-components";
import useChange from "../hooks/useChange";

const LaligaWrapper = styled.section`
  flex: 1;
`;

export default function Laliga() {
  useChange("laliga");

  return (
    <LaligaWrapper>
      <Outlet />
    </LaligaWrapper>
  );
}
