import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Epl() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/epl") {
      navigate("/epl/overview");
    }
  }, [navigate, pathname]);

  return (
    <div>
      <Outlet />
    </div>
  );
}
