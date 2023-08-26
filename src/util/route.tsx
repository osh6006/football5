import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Error from "../pages/Error";
import OverView from "../pages/OverView";
import League from "../pages/League";
import Schedule from "../pages/Schedule";

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
                element: <div>Hello Rank</div>,
              },
              {
                path: "schedule",
                element: <Schedule />,
              },
              {
                path: "rank",
                element: <div>Hello Rank</div>,
              },
              {
                path: "search",
                element: <div>Hello Rank</div>,
              },
              {
                path: "top",
                element: <div>Hello Rank</div>,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
