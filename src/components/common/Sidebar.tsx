import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { RouteType } from "../../util/routes";

interface SidebarProps {
  menus: RouteType[];
}

const SidebarWrapper = styled.aside`
  max-width: 280px;
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
  object-fit: contain;
  transform: scale(0.8);

  @media (max-width: 1280px) {
    display: none;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #d3d3d3;
    transition: all 0.5s ease;
  }
`;

const MenuName = styled.p`
  @media (max-width: 1280px) {
    display: none;
  }
`;

const Sidebar: React.FC<SidebarProps> = ({ menus }) => {
  const navigate = useNavigate();

  return (
    <SidebarWrapper>
      <Logo src={"/images/logo.png"} />
      <Navigation>
        {menus?.map((menu) => (
          <Menu key={menu.name} onClick={() => navigate(menu.path)}>
            <menu.icon size={25} />
            <MenuName>{menu.name}</MenuName>
          </Menu>
        ))}
      </Navigation>
    </SidebarWrapper>
  );
};

export default Sidebar;
