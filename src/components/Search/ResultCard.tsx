import { Team } from "../../type/fixtures";
import { Player } from "../../type/player";

interface ResultCardProps {
  type: "team" | "player" | "coach";
  PCInfo?: Player;
  teamInfo?: Team;
}

const ResultCard: React.FC<ResultCardProps> = ({ type }) => {
  return <div>ResultCard</div>;
};

export default ResultCard;
