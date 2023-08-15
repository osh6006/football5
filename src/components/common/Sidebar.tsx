import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { RouteType } from "../../util/routes";

interface SidebarProps {
  menus: RouteType[];
}

const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 20px;
  border-right: 1px solid #c9c9c9;

  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1280px) {
    width: 100px;
  }
`;

const Logo = styled.img`
  transform: scale(0.8);

  @media (max-width: 1280px) {
    display: none;
  }
`;

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Menu = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  cursor: pointer;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    background-color: ${(props) => props.theme.colors.activeBackground};
    transition: background 0.5s ease;
  }

  &:active {
    opacity: 0.5;
  }

  &.active {
    font-weight: bold;
    background-color: ${(props) => props.theme.colors.activeBackground};
  }

  @media (max-width: 1280px) {
    padding: 1rem 1rem;
  }
`;

const MenuName = styled.p`
  @media (max-width: 1280px) {
    display: none;
  }
`;

const Sidebar: React.FC<SidebarProps> = ({ menus }) => {
  const { pathname } = useLocation();
  return (
    <SidebarWrapper>
      <Logo src={"/images/logo.png"} />
      <Navigation>
        {menus?.map((menu) => (
          <Menu key={menu.name} to={menu.path}>
            {pathname === menu.path ? <menu.activeIcon size={25} /> : <menu.icon size={25} />}
            <MenuName>{menu.name}</MenuName>
          </Menu>
        ))}
      </Navigation>
    </SidebarWrapper>
  );
};

export default Sidebar;
