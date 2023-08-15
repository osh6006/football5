import styled from "styled-components";
import { RouteType } from "../../util/routes";
import { NavLink, useLocation } from "react-router-dom";

interface BottombarProps {
  menus: RouteType[];
}

const BottomBarWrapper = styled.nav`
  display: none;
  position: fixed;
  bottom: 0;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 50px;
    width: 100%;
  }
`;

const BottomMenu = styled(NavLink)`
  cursor: pointer;

  &:active {
    opacity: 0.7;
  }

  &.active {
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
  }
`;

const Bottombar: React.FC<BottombarProps> = ({ menus }) => {
  const { pathname } = useLocation();

  return (
    <BottomBarWrapper>
      {menus.map((menu) => (
        <BottomMenu key={menu.name} to={menu.path}>
          {pathname === menu.path ? <menu.activeIcon size={35}></menu.activeIcon> : <menu.icon size={35}></menu.icon>}
        </BottomMenu>
      ))}
    </BottomBarWrapper>
  );
};

export default Bottombar;
