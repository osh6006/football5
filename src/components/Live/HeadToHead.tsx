import styled from "styled-components";
import { Score, Team } from "../../type/fixtures";

interface HeadToHeadProps {
  team?: Team;
  score?: Score;
}

const HeadToHeadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
`;
const Away = styled(Home)``;

const Logo = styled.img`
  width: 70%;
  max-width: 150px;
`;
const TeamName = styled.h2``;

const Score = styled.h2`
  display: flex;
  font-size: 2rem;
  gap: 1rem;
`;
function HeadToHead({ team, score }: HeadToHeadProps) {
  return (
    <HeadToHeadWrapper>
      <Home>
        <Logo src={team?.home.logo} alt={"HomeLogo"} />
        <TeamName>{team?.home.name}</TeamName>
      </Home>
      <Score>
        <div>{score?.fulltime.home}</div>:<div>{score?.fulltime.away}</div>
      </Score>
      <Away>
        <Logo src={team?.away.logo} alt={"AwayLogo"} />
        <TeamName>{team?.home.name}</TeamName>
      </Away>
    </HeadToHeadWrapper>
  );
}

export default HeadToHead;
