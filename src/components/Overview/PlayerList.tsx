import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import useFakePlayer from "../../hooks/fake/useFakePlayer";
import Loading from "../common/Loading";
import Error from "../common/Error";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface PlayerListProps {
  title: string;
  type: string;
}

const ScorerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.secondBackground};
  border-radius: ${(props) => props.theme.border.radius};
`;

const Player = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  gap: 1rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const PlayerImg = styled(LazyLoadImage)`
  width: 40px;
  border-radius: 100%;
`;
const Name = styled.div``;
const Goals = styled.div``;

const PlayerList: React.FC<PlayerListProps> = ({ type, title }) => {
  const {
    topScorerQuery: { data: players, isLoading, isError },
  } = useFakePlayer();

  // const {
  //   topPlayerQuery: { data: players2, isLoading2, isError2 },
  // } = usePlayer(39, new Date().getFullYear, type);

  // console.log(players2);

  return (
    <>
      <SectionHeader title={title} src="" />

      <ScorerWrapper>
        {isError && <Error message="데이터가 없습니다!" />}
        {isLoading && <Loading />}
        {isLoading ||
          (players &&
            players.map(
              (playerData, index) =>
                index < 10 && (
                  <Player key={playerData.player.id}>
                    <ImageWrapper>
                      <PlayerImg effect="blur" src={playerData.player.photo} alt="Profile" />
                      <Name>{playerData.player.name}</Name>
                    </ImageWrapper>
                    <Goals>{`${playerData.statistics[0].goals.total} ${
                      (type === "topscorers" && "골") || "도움"
                    }`}</Goals>
                  </Player>
                )
            ))}
      </ScorerWrapper>
    </>
  );
};

export default PlayerList;
