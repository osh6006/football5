import styled, { css } from "styled-components";
import { LineUp } from "../../type/fixtures";

interface LineUpProps {
  lineUp?: LineUp[];
}

const LineUpWrapper = styled.div`
  display: flex;
`;

const LineUpHome = styled.div``;
const LineUpAway = styled(LineUpHome)``;

const LineUp: React.FC<LineUpProps> = ({ lineUp }) => {
  console.log(lineUp);

  return <LineUpWrapper></LineUpWrapper>;
};

export default LineUp;
