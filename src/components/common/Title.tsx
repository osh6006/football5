import styled from "styled-components";

interface TitleProps {
  title: string;
  small?: boolean;
}

interface StyledTitleProps {
  $small?: boolean;
}

const StyledH1 = styled.h1<StyledTitleProps>`
  font-size: ${(props) => (props.$small ? "1.3rem" : "2rem")};
  font-weight: bold;
  text-transform: capitalize;
`;

const Title: React.FC<TitleProps> = ({ title, small }) => {
  return <StyledH1 $small={small}>{title}</StyledH1>;
};

export default Title;
