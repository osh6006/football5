import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { changeLeague } from "../features/league/leagueSlice";

export default function useChange(league: string) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname && pathname === `/${league}`) {
      // 리덕스에서 현재 리그에 대한 정보를 바꿔준다.
      dispatch(changeLeague(pathname));
      navigate(`/${league}/overview`);
    }
  }, [navigate, pathname, dispatch, league]);
}
