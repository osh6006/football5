import styled from "styled-components";
import SectionHeader from "./SectionHeader";

const RankTableWrapper = styled.div`
  margin-top: 2rem;
  background-color: blanchedalmond;
  height: 400px;

  font-family: sans-serif;
  font-weight: bold;
`;

const RankTable = () => {
  return (
    <RankTableWrapper>
      <SectionHeader title="프리미어리그 랭킹" src="123" />
    </RankTableWrapper>
  );
};

export default RankTable;
