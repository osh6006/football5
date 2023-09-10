import React from "react";
import { styled } from "styled-components";
import Title from "../components/common/Title";
import SubTitle from "../components/common/SubTitle";
import { useParams } from "react-router-dom";
import useSeason from "../hooks/useSeason";
import SeasonSelector from "../components/common/SeasonSelector";
import useFakeTeam from "../hooks/fake/useFakeTeam";
import Error from "../components/common/Error";
import Loading from "../components/common/Loading";
import TeamBasicInfo from "../components/TeamDetail/TeamBasicInfo";

const TeamDetailWrapper = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
`;

const TagTitle = styled.h3`
  font-size: 1.5rem;
`;

export default function TeamDetail() {
  const params = useParams();
  const { seasonRange, selectSeason, setSeasonRange, setSelectSeason } =
    useSeason();
  const {
    teamInfoQuery: {
      data: teamInfo,
      isError: teamInfoError,
      isLoading: teamInfoLoading,
    },
    teamStatQuery: {
      data: teamStat,
      isError: teamStatError,
      isLoading: teamStatLoading,
    },
  } = useFakeTeam();

  console.log(teamInfo);
  console.log(teamStat);

  return (
    <TeamDetailWrapper>
      <Title title="Team Info" />
      <SubTitle subtitle="시즌 별 팀에 대한 자세한 정보를 알아보세요" />
      <SeasonSelector
        currentSeason={selectSeason}
        seasonRange={seasonRange}
        setSelectSeason={setSelectSeason}
      />
      {teamInfoError ||
        (teamStatError && <Error message="데이터에 오류가 있습니다." />)}
      {teamInfoLoading && teamStatLoading && <Loading />}
      {teamInfoLoading ||
        teamInfoLoading ||
        (teamInfo && (
          <>
            <TagTitle>팀 정보</TagTitle>
            <TeamBasicInfo teamInfo={teamInfo} />
          </>
        ))}
    </TeamDetailWrapper>
  );
}
