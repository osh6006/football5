import styled from "styled-components";

interface TitleProps {
  title: string;
}

const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const Title: React.FC<TitleProps> = ({ title }) => {
  return <StyledH1>{title}</StyledH1>;
};

export default Title;
