import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const SearchForm = styled.form`
  width: 40%;
  position: absolute;
  display: flex;
  align-items: center;
  height: 50px;
  top: 0;
  left: 50%;
  padding: 12px 0;
  margin-top: 1rem;
  border-radius: 92px;
  transform: translateX(-23%);
  background-color: ${(props) => props.theme.colors.activeBackground};
  max-width: 500px;
  min-width: 300px;
  z-index: 10;

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    left: 40%;
  }

  @media (max-width: 1280px) {
    transform: translateX(-40%);

    width: 50%;
  }
`;

const SearchInput = styled.input`
  font-size: 1rem;
  line-height: 21px;
  letter-spacing: 0.03px;
  border: none;
  background-color: transparent;
  padding: 0;
  margin-left: 2rem;
  outline: none;
  flex: 1;
`;

const SearchSpan = styled.span`
  content: "";
  width: 1px;
  height: 28px;
  margin: -3px 0;
  background-color: gray;
`;

const SearchBtn = styled.button`
  padding: 10px 16px;
  color: gray;
  cursor: pointer;
  outline: none;
  border: none;
  border-top-right-radius: 92px;
  border-bottom-right-radius: 92px;
  background-color: transparent;
  transition: background 0.1s ease-in;

  &:hover {
    font-weight: bold;
    background-color: #e0e0e0;
  }
`;

const SearchBar = () => {
  return (
    <SearchForm>
      <SearchInput placeholder="Something Search" />
      <SearchSpan />
      <SearchBtn type="submit">
        <AiOutlineSearch size="25" />
      </SearchBtn>
    </SearchForm>
  );
};

export default SearchBar;
