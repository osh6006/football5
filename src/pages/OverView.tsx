import { useSelector } from "react-redux";

import styled from "styled-components";
import { RootState } from "../store";

const OverViewWrapper = styled.div`
  background-color: red;
`;

export default function OverView() {
  const selectedLeague = useSelector((state: RootState) => state.league.selectedLeague);
  console.log(selectedLeague);

  return <OverViewWrapper>OverView</OverViewWrapper>;
}
