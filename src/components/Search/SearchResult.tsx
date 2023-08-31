import styled from "styled-components";

const SearchResultWrapper = styled.div`
  margin-top: 5vh;
`;

const NotResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.gray};
  font-size: 2rem;
  min-height: 500px;
`;

const SearchResult = () => {
  return (
    <SearchResultWrapper>
      <NotResult>검색한 결과가 없어요 :) 다시 검색해주세요!</NotResult>
    </SearchResultWrapper>
  );
};

export default SearchResult;
