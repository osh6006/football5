import styled from "styled-components";

const HomeWrapper = styled.h1`
  flex: 1;
  position: relative;
  gap: 2rem;
  padding-top: 85px;
  overflow-y: scroll;

  @media (max-width: 768px) {
    padding: 85px 10px;
  }
`;

const HomeVideo = styled.div`
  width: 500px;
  height: 750px;
  margin: 0 auto;
  margin-bottom: 2rem;
  background-color: gray;
  border-radius: 10px;

  @media (max-width: 530px) {
    width: 100%;
    height: 95%;
  }
`;

export default function Home() {
  return (
    <HomeWrapper>
      <HomeVideo />
      <HomeVideo />
      <HomeVideo />
      <HomeVideo />
    </HomeWrapper>
  );
}
