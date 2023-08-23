import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import useFakeFixtures from "../../hooks/fake/useFakeFixtures";
import useColor from "../../hooks/useColor";
import { mix } from "polished";
import SubTitle from "../common/SubTitle";
import Loading from "../common/Loading";

interface MatchProps {
  $color: string;
}

const LatestMatchesWrapper = styled.div`
  flex: 1;
  padding: 1.5rem 1.5rem;
  border-radius: ${(props) => props.theme.border.radius};
  background-color: ${(props) => props.theme.colors.secondBackground};
  min-width: 250px;
`;

const MatchWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const Match = styled.div<MatchProps>`
  flex: 1;
  padding: 1rem 1rem;
  border-radius: ${(props) => props.theme.border.radius};
  background-color: ${(props) => mix(0.8, "#808080", props.$color)};
`;
const ScoreWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;
const Logo = styled.img`
  width: 50px;
  height: 50px;
`;
const TeamName = styled.p`
  font-size: 0.8rem;
`;
const Score = styled.div`
  padding: 5px;
  border-radius: ${(props) => props.theme.border.radius};
  background-color: ${(props) => props.theme.colors.background};
`;

const LatestMatches = () => {
  const {
    fakeLatestMatchesQuery: { data: matches, isLoading, error },
  } = useFakeFixtures();
  const color = useColor();

  return (
    <LatestMatchesWrapper>
      <SectionHeader title="최근 경기" src="" />
      {isLoading && <Loading />}
      {isLoading || (
        <>
          <MatchWrapper>
            <Match $color={color || "#777"}>
              <SubTitle subtitle={(matches && matches[0].league.round) || ""} />
              <ScoreWrapper>
                <LogoWrapper>
                  <Logo src={(matches && matches[0].teams.home.logo) || "Not-Name"} alt="logo" />
                  <TeamName>{(matches && matches[0].teams.home.name) || "Not-Name"}</TeamName>
                </LogoWrapper>
                <Score>{matches && `${matches[0].goals.home} : ${matches[0].goals.away}`}</Score>
                <LogoWrapper>
                  <Logo src={(matches && matches[0].teams.away.logo) || "Not-Name"} alt="logo" />
                  <TeamName>{(matches && matches[0].teams.away.name) || "Not-Name"}</TeamName>
                </LogoWrapper>
              </ScoreWrapper>
            </Match>
            <Match $color={color || "#777"}>
              <SubTitle subtitle={(matches && matches[0].league.round) || ""} />
              <ScoreWrapper>
                <LogoWrapper>
                  <Logo src={(matches && matches[0].teams.home.logo) || "Not-Name"} alt="logo" />
                  <TeamName>{(matches && matches[0].teams.home.name) || "Not-Name"}</TeamName>
                </LogoWrapper>
                <Score>{matches && `${matches[0].goals.home} : ${matches[0].goals.away}`}</Score>
                <LogoWrapper>
                  <Logo src={(matches && matches[0].teams.away.logo) || "Not-Name"} alt="logo" />
                  <TeamName>{(matches && matches[0].teams.away.name) || "Not-Name"}</TeamName>
                </LogoWrapper>
              </ScoreWrapper>
            </Match>
          </MatchWrapper>
        </>
      )}
    </LatestMatchesWrapper>
  );
};

export default LatestMatches;
