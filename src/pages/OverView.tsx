import styled from "styled-components";
import Title from "../components/common/Title";
import SubTitle from "../components/common/SubTitle";
import Banner from "../components/Overview/Banner";
import LatestMatches from "../components/Overview/LatestMatches";
import RankTable from "../components/Overview/RankTable";
import Profile from "../components/Overview/Profile";

const OverViewWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  padding: 2rem;

  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;

const LeftSideWrapper = styled.div`
  flex: 1;
`;

const RightSideWrapper = styled.div`
  width: 35%;
  background-color: azure;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export default function OverView() {
  return (
    <OverViewWrapper>
      <LeftSideWrapper>
        <Title title="어서오세요 Test 님 !" />
        <SubTitle subtitle="다시 오신 것을 환영합니다." />
        <Banner />
        <LatestMatches />
        <RankTable />
      </LeftSideWrapper>
      <RightSideWrapper>
        <Profile email="test@test.com" name="테스트" />
      </RightSideWrapper>
    </OverViewWrapper>
  );
}
