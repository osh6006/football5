import { useState } from "react";
import { styled } from "styled-components";
import useColor from "../hooks/useColor";
import { lighten } from "polished";
import Title from "../components/common/Title";
import SubTitle from "../components/common/SubTitle";
import useLeagueId from "../hooks/useLeagueId";
import RankTable from "../components/Overview/RankTable";
import SeasonSelector from "../components/Rank/SeasonSelector";

type currentRank = "player" | "team";

interface TabBtnProps {
  $color: string;
  $active: boolean;
}

const RankWrapper = styled.section`
  padding: 1rem 1rem;
`;

const RankTab = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  gap: 1rem;
`;

const TabBtn = styled.button<TabBtnProps>`
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  font-size: 1.25rem;
  color: white;

  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  color: ${(props) => (props.$active ? lighten(0.4, props.$color) : "")};
`;

export default function Rank() {
  const color = useColor();
  const leagueId = useLeagueId();
  const [currentRank, setCurrentRank] = useState<currentRank>("team");
  const [selectSeason, setSelectSeason] = useState<number>(
    new Date().getFullYear()
  );

  const handleTab = (currRank: currentRank) => {
    setCurrentRank(currRank);
  };

  return (
    <RankWrapper>
      <Title title="순위" />
      <SubTitle subtitle="리그 팀과 선수들의 순위를 확인해 보세요. " />
      <RankTab>
        <TabBtn
          $color={color || "#888"}
          $active={currentRank === "team"}
          onClick={() => handleTab("team")}
        >
          팀 순위
        </TabBtn>
        <TabBtn
          $color={color || "#888"}
          $active={currentRank === "player"}
          onClick={() => handleTab("player")}
        >
          개인 순위
        </TabBtn>
      </RankTab>
      <SeasonSelector
        setSelectSeason={setSelectSeason}
        currentSeason={selectSeason}
      />
      {currentRank === "team" && <RankTable />}
    </RankWrapper>
  );
}
