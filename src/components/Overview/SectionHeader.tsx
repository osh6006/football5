import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";

interface SectionHeaderProps {
  title: string;
  src: string;
}

const SectionHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ViewAllLink = styled(Link)``;

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, src }) => {
  return (
    <SectionHeaderWrapper>
      <h2>{title}</h2>
      <LinkWrapper>
        <ViewAllLink to={src}>모두 보기</ViewAllLink>
        <AiOutlineRight />
      </LinkWrapper>
    </SectionHeaderWrapper>
  );
};

export default SectionHeader;
