import styled from "styled-components";
import useFakeFixtures from "../hooks/fake/useFakeFixtures";
import Title from "../components/common/Title";
import SubTitle from "../components/common/SubTitle";
import MatchAccordion from "../components/Live/MatchAccordion";

const LiveWrapper = styled.section`
  padding: 1rem 1rem;
`;

const MatchesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin: 1rem auto;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function Live() {
  const {
    fakeLiveMatchQuery: { data: matches, isError, isLoading },
  } = useFakeFixtures();

  return (
    <LiveWrapper>
      <Title title="Live" />
      <SubTitle subtitle="현재 리그의 진행중인 경기를 확인해 보세요." />
      <br />
      <MatchesWrapper>
        {matches?.map((match) => (
          <MatchAccordion
            key={match.fixture.id}
            fixturesId={match.fixture.id}
            title={
              `${match.teams.home.name} VS ${match.teams.away.name}` || "서버에 오류가 있습니다 관리자에게 문의하세요"
            }
          ></MatchAccordion>
        ))}
      </MatchesWrapper>
    </LiveWrapper>
  );
}
