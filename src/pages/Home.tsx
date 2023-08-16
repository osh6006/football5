import styled from "styled-components";

const HomeWrapper = styled.h1`
  flex: 1;
  display: flex;
  position: relative;
  justify-content: center;
  padding-top: 85px;

  @media (max-width: 768px) {
    padding: 85px 10px;
  }
`;

const HomeVideo = styled.div`
  width: 500px;
  height: 750px;
  background-color: gray;
  border-radius: 10px;

  @media (max-width: 530px) {
    width: 100%;
    height: 700px;
  }
`;

export default function Home() {
  return (
    <HomeWrapper>
      <HomeVideo />
    </HomeWrapper>
  );
}
