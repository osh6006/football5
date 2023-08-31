import styled from "styled-components";
import Title from "../components/common/Title";
import SubTitle from "../components/common/SubTitle";
import SearchBar from "../components/common/SearchBar";
import SearchResult from "../components/Search/SearchResult";

const SearchWrapper = styled.section`
  padding: 1rem 1rem;
`;

const StyledHr = styled.hr`
  width: 100%;
  margin-top: 15vh;
`;

const SearchContentsWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const SearchContentHeader = styled.div``;

export default function Search() {
  return (
    <SearchWrapper>
      <Title title="Search" />
      <SubTitle subtitle="리그 팀과 선수들을 검색해 보세요. " />
      <SearchContentsWrapper>
        <SearchContentHeader>
          <SearchBar />
        </SearchContentHeader>
        <StyledHr />
        <SearchResult />
      </SearchContentsWrapper>
    </SearchWrapper>
  );
}
