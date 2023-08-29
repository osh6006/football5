import { useState } from "react";
import styled, { css } from "styled-components";
import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";
import useLive from "../../hooks/useLive";
import useFakeLive from "../../hooks/fake/useFakeLive";
import LineUp from "./LineUp";
import HeadToHead from "./HeadToHead";
import Error from "../common/Error";
import Loading from "../common/Loading";

interface MatchAccordionProps {
  title: string;
  fixturesId: string;
}

interface AccordionProps {
  $isOpen: boolean;
}

const AccordionContainer = styled.div`
  border-radius: ${(props) => props.theme.border.radius};
  overflow: hidden;
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.secondBackground};
  flex: 1;
  padding: 10px 1rem;
  font-size: 1.2rem;
  cursor: pointer;
`;

const HeaderTitle = styled.h4`
  width: 100%;
  text-align: center;
`;

const AccordionIcon = styled.div<AccordionProps>`
  transition: all 0.3s ease;
  ${(props) =>
    props.$isOpen
      ? css`
          transform: rotate(180deg);
        `
      : css``}
`;

const AccordionContent = styled.div<AccordionProps>`
  padding: 10px;
  transition: max-height 0.3s ease-in-out;

  ${(props) =>
    props.$isOpen
      ? css`
          max-height: 500px; /* 원하는 최대 높이 */
          opacity: 1;
        `
      : css`
          max-height: 0;
          opacity: 0;
        `}
`;

const MatchAccordion: React.FC<MatchAccordionProps> = ({ title, fixturesId }) => {
  // const {
  //   liveScoreQuery: { data: liveData, isError, isLoading },
  // } = useLive(fixturesId);

  // console.log(liveData);

  const {
    liveScoreQuery: { data: liveData, isError, isLoading },
  } = useFakeLive();

  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      {isError && <Error message="데이터에 오류가 발생하였습니다." />}
      {isLoading && <Loading />}
      {isLoading || (
        <>
          <AccordionHeader onClick={toggleAccordion}>
            <HeaderTitle>{title}</HeaderTitle>
            <AccordionIcon $isOpen={isOpen}>
              <BsChevronDown />
            </AccordionIcon>
          </AccordionHeader>
          <AccordionContent $isOpen={isOpen}>
            <HeadToHead team={liveData && liveData[0].teams} />
            <LineUp lineUp={liveData && liveData[0].lineups} />
          </AccordionContent>
        </>
      )}
    </AccordionContainer>
  );
};

export default MatchAccordion;
