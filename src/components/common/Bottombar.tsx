import styled, { css } from "styled-components";
import { AllRouteType } from "../../util/routes";
import { NavLink } from "react-router-dom";
import { lighten } from "polished";

interface BottomBarProps {
  menus: AllRouteType[];
}

interface MenuProps {
  $selectColor: string;
}

interface MenuSvgProps {
  $scale?: number;
}
const BottomBarWrapper = styled.nav`
  display: none;
  position: fixed;
  bottom: 0;
  color: ${(props) => props.theme.colors.primary};
  z-index: 10;
  background-color: ${(props) => props.theme.colors.secondBackground};

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: 100%;
  }
`;

const BottomMenu = styled(NavLink)<MenuProps>`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 4px;
  font-size: 1.2rem;
  border: 4px solid transparent;
  border-radius: ${(props) => props.theme.border.radius};
  cursor: pointer;
  transition: border 0.1s ease-out, background 0.5s ease-in;

  &:active {
    opacity: 0.5;
  }

  ${(props) => {
    const selected = props.theme.colors[props.$selectColor];

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
  scale: ${(props) => props.$scale};
`;

export const BottomBar: React.FC<BottomBarProps> = ({ menus }) => {
  return (
    <BottomBarWrapper>
      {menus?.map((menu) => (
        <BottomMenu key={menu.name} to={menu.path} $selectColor={menu.color}>
          <MenuSvg alt="League Logo" src={menu.svg} $scale={menu.$mobileScale} />
        </BottomMenu>
      ))}
    </BottomBarWrapper>
  );
};
