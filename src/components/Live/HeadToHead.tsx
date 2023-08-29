import styled from "styled-components";
import { Team } from "../../type/fixtures";

interface HeadToHeadProps {
  team?: Team;
}

const HeadToHeadWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Home = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const Away = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 70%;
`;
const TeamName = styled.h2``;

function HeadToHead({ team }: HeadToHeadProps) {
  return (
    <HeadToHeadWrapper>
      <Home>
        <Logo src={team?.home.logo} alt={"HomeLogo"} />
        <TeamName>{team?.home.name}</TeamName>
      </Home>
      <Away>
        <Logo src={team?.away.logo} alt={"AwayLogo"} />
        <TeamName>{team?.home.name}</TeamName>
      </Away>
    </HeadToHeadWrapper>
  );
}

export default HeadToHead;
