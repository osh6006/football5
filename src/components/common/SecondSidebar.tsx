import styled, { css } from "styled-components";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { SecondSidebarRoutes } from "../../util/routeData";
import { rgba, lighten } from "polished";
import Title from "./Title";
import SubTitle from "./SubTitle";

interface SecondSidebarProps {}

interface MenuProps {
  $selectColor: string;
}

const SecondSidebarWrapper = styled.nav`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  padding: 1rem 2rem;
`;

const MenuWrapper = styled.ul`
  margin-top: 0.4rem;
`;
const Menu = styled(NavLink)<MenuProps>`
  display: flex;
  padding: 1.4rem 1.55rem;
  font-size: 1.2rem;
  align-items: center;
  gap: 1rem;
  border-left: 6px solid transparent;
  transition: all ${(props) => props.theme.hover.duration} ${(props) => props.theme.hover.type};

  ${(props) => {
    const selected = props.theme.colors[props.$selectColor];
    const lightSelected = rgba(lighten(0.55, selected || "#ffffff"), 0.2);

    return css`
      &:hover {
        background-color: ${lightSelected};
      }

      &.active {
        font-weight: bold;
        background-color: ${lightSelected};
        opacity: 0.9;
        border-left: 6px solid ${lighten(0.2, selected || "#ffffff")};
      }
    `;
  }}
`;

const SecondSidebar: React.FC<SecondSidebarProps> = () => {
  const { pathname } = useLocation();
  const param = useParams();

  const title = pathname.split("/")[1];
  const subTitle = pathname.split("/")[2] || "";
  const leagueId = param.leagueId;

  return (
    <SecondSidebarWrapper>
      <TitleWrapper>
        <Title title={title && title} />
        <SubTitle subtitle={title && `${title}에 대한 모든 것.`} />
      </TitleWrapper>

      <MenuWrapper>
        {title &&
          SecondSidebarRoutes?.map((item) => (
            <li key={item.name}>
              <Menu to={`/${title}/${leagueId}${item.path}`} $selectColor={title}>
                {subTitle && `/${subTitle}` === item.path ? <item.activeIcon size={26} /> : <item.icon size={26} />}
                {item.name}
              </Menu>
            </li>
          ))}
      </MenuWrapper>
    </SecondSidebarWrapper>
  );
};

export default SecondSidebar;
