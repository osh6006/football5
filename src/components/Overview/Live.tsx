import styled from "styled-components";
import SectionHeader from "./SectionHeader";

const LiveWrapper = styled.div`
  width: 30%;
  padding: 1.5rem 1.5rem;
  border-radius: ${(props) => props.theme.border.radius};
  background-color: ${(props) => props.theme.colors.secondBackground};
  min-width: 200px;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const Live = () => {
  return (
    <LiveWrapper>
      <SectionHeader title="라이브" src="" />
    </LiveWrapper>
  );
};

export default Live;
