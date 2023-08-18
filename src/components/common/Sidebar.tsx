import styled, { css } from "styled-components";
import { lighten } from "polished";
import { NavLink } from "react-router-dom";
import { RiFootballFill } from "react-icons/ri";
import { RouteType } from "../../util/routes";

interface SidebarProps {
  menus: RouteType[];
}

interface MenuProps {
  selectColor: string;
}

interface MenuSvgProps {
  isBig?: boolean;
}

const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: 80px;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.secondBackground};

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  margin-bottom: 2rem;
  border: 4px solid transparent;
  border-radius: ${(props) => props.theme.border.radius};
  background-color: ${(props) => props.theme.colors.background};
`;

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Menu = styled(NavLink)<MenuProps>`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 8px;
  font-size: 1.2rem;
  border: 4px solid transparent;
  border-radius: ${(props) => props.theme.border.radius};
  cursor: pointer;
  transition: border 0.1s ease-out, background 0.5s ease-in;

  &:active {
    opacity: 0.5;
  }

  ${(props) => {
    const selected = props.theme.colors[props.selectColor];

    return css`
      background: ${selected};

      &:hover {
        border: 4px solid ${selected};
        background: ${lighten(0.15, selected)};
      }

      &:active {
        opacity: 0.5;
      }

      &.active {
        font-weight: bold;
        background-color: ${lighten(0.15, selected)};
        border: 4px solid ${selected};
      }
    `;
  }}
`;

const MenuSvg = styled.img<MenuSvgProps>`
  scale: ${(props) => (props.isBig ? 2.2 : 1.4)};
`;

const Sidebar: React.FC<SidebarProps> = ({ menus }) => {
  return (
    <SidebarWrapper>
      <Logo>
        <RiFootballFill size="24" />
      </Logo>
      <Navigation>
        {menus?.map((menu) => (
          <Menu key={menu.name} to={menu.path} selectColor={menu.color}>
            {menu.svg && <MenuSvg src={menu.svg} isBig={menu.isBig} />}
          </Menu>
        ))}
      </Navigation>
    </SidebarWrapper>
  );
};

export default Sidebar;
