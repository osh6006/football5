import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Epl() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname && pathname === "/epl") {
      navigate("/epl/overview");
    }
  }, [navigate, pathname]);

  return (
    <section>
      <Outlet />
    </section>
  );
}
