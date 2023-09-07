import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Error from "../pages/Error";
import OverView from "../pages/OverView";
import League from "../pages/League";
import Schedule from "../pages/Schedule";
import Live from "../pages/Live";
import Search from "../pages/Search";
import Rank from "../pages/Rank";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/league/:leagueId",
        element: <League />,
        children: [
          {
            children: [
              {
                path: "overview",
                element: <OverView />,
              },
              {
                path: "live",
                element: <Live />,
              },
              {
                path: "schedule",
                element: <Schedule />,
              },
              {
                path: "rank",
                element: <Rank />,
              },
              {
                path: "search",
                element: <Search />,
              },
              {
                path: "player/:playerId",
                element: <div>player detail</div>,
              },
              {
                path: "team/:teamId",
                element: <div>team detail</div>,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
