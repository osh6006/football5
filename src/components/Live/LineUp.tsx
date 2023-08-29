import styled, { css } from "styled-components";
import { LineUp } from "../../type/fixtures";

interface LineUpProps {
  lineUp?: LineUp[];
}

interface LineUpWrapperProps {
  $columns?: number;
}
interface PlayerProps {
  $columns?: number;
}

const LineUpWrapper = styled.div<LineUpWrapperProps>``;

const PlayerCard = styled.div``;

const PositionName = styled.h4`
  margin: 5px 0;
`;

const LineUp: React.FC<LineUpProps> = ({ lineUp }) => {
  const homeLineUpColumns = lineUp && lineUp[0].formation?.split("-").length;
  const awayLineUpColumns = lineUp && lineUp[1].formation?.split("-").length;

  console.log(lineUp);

  return (
    <LineUpWrapper $columns={homeLineUpColumns}>
      {lineUp &&
        lineUp[0].startXI.map((player, index) => {
          const [x, y] = player.player.grid.split(":").map(Number);

          return (
            <PlayerCard key={player.player.id} style={{ gridColumn: x, gridRow: y }}>
              <PositionName>{player.player.pos}</PositionName>
              <p>{player.player.name}</p>
            </PlayerCard>
          );
        })}
    </LineUpWrapper>
  );
};

export default LineUp;
