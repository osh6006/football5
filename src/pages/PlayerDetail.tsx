import { styled } from "styled-components";
import Title from "../components/common/Title";
import SubTitle from "../components/common/SubTitle";

const PlayerDetailWrapper = styled.div`
  padding: 1rem;
`;

export default function PlayerDetail() {
  return (
    <PlayerDetailWrapper>
      <Title title="Player" />
      <SubTitle subtitle="플레이어의 자세한 정보를 알아보세요" />
    </PlayerDetailWrapper>
  );
}
