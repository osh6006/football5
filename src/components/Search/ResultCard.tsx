import styled from "styled-components";
import { Players } from "../../type/player";
import { Coach, SearchTeam } from "../../type/search";
import useColor from "../../hooks/useColor";
import { lighten, mix } from "polished";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ResultCardProps {
  type: "team" | "player" | "coach";
  playerInfo?: Players;
  coachInfo?: Coach;
  teamInfo?: SearchTeam;
}

interface CardProps {
  $color: string;
}

const ResultCardWrapper = styled.div<CardProps>`
  min-width: 200px;
  padding: 1rem;
  border-radius: ${(props) => props.theme.border.radius};
  background-color: ${(props) => mix(0.8, "#808080", props.$color)};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => lighten(0.15, mix(0.8, "#808080", props.$color))};
  }
`;

const Header = styled.div<CardProps>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid wheat;
  padding-bottom: 1rem;
`;

const Avatar = styled(LazyLoadImage)`
  max-width: 50px;
  border-radius: 50%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Name = styled.h1`
  font-size: 1.5rem;
`;

const Position = styled(Name)`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.gray};
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
`;

const Height = styled.h3`
  color: white;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  text-align: center;
  color: ${(props) => props.theme.colors.gray};
  gap: 4px;
`;

const ResultCard: React.FC<ResultCardProps> = ({ type, playerInfo, teamInfo, coachInfo }) => {
  const color = useColor();

  const player = playerInfo?.player;
  const stat = playerInfo?.statistics[0];
  const career = coachInfo?.career[0];

  return (
    <ResultCardWrapper $color={color || "#fff"}>
      {type === "player" && player && stat && (
        <>
          <Header $color={color || "#fff"}>
            <TitleWrapper>
              <Name>{player.name}</Name>
              <Position>{`${player.age} / ${stat.games.position}`}</Position>
            </TitleWrapper>
            <Avatar effect="blur" src={player.photo} alt="Avatar" />
          </Header>
          <Stat>
            <StatItem>
              <Height>{stat.goals.total}</Height>
              <p>골</p>
            </StatItem>
            <StatItem>
              <Height>{stat.goals.assists || 0}</Height>
              <p>도움</p>
            </StatItem>
            <StatItem>
              <Height>{stat.goals.save || 0}</Height>
              <p>세이브</p>
            </StatItem>
            <StatItem>
              <Height>{stat.goals.total}</Height>
              <p>실점</p>
            </StatItem>
          </Stat>
        </>
      )}

      {type === "coach" && coachInfo && career && (
        <>
          <Header $color={color || "#fff"}>
            <TitleWrapper>
              <Name>{coachInfo.name}</Name>
              <Position>{`${coachInfo.age} / 감독`}</Position>
            </TitleWrapper>
            <Avatar effect="blur" src={coachInfo.photo} alt="Avatar" />
          </Header>
          <Stat>
            <StatItem>
              <Height>{career.team.name}</Height>
              <p>팀</p>
            </StatItem>
            <StatItem>
              <Height>{`${career.start} ~`}</Height>
              <p>기간</p>
            </StatItem>
            <StatItem>
              <Height>{coachInfo.nationality}</Height>
              <p>국가</p>
            </StatItem>
          </Stat>
        </>
      )}

      {type === "team" && teamInfo && (
        <>
          <Header $color={color || "#fff"}>
            <TitleWrapper>
              <Name>{teamInfo.name}</Name>
              <Position>{`${teamInfo.country}`}</Position>
            </TitleWrapper>
            <Avatar effect="blur" src={teamInfo.logo} alt="Avatar" />
          </Header>
          <Stat>
            <StatItem>
              <Height>{teamInfo.venue.name}</Height>
              <p>구장</p>
            </StatItem>
            <StatItem>
              <Height>{teamInfo.venue.city}</Height>
              <p>도시</p>
            </StatItem>
          </Stat>
        </>
      )}
    </ResultCardWrapper>
  );
};

export default ResultCard;
