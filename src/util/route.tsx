import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Error from "../pages/Error";
import Epl from "../pages/Epl";
import OverView from "../pages/OverView";
import Laliga from "../pages/Laliga";
import League from "../pages/League";

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
                path: "rank",
                element: <div>Hello Rank</div>,
              },
            ],
          },
        ],
      },
      {
        path: "/epl",
        element: <Epl />,
        children: [
          {
            path: "overview",
            element: <OverView />,
          },
          {
            path: "rank",
            element: <div>Hello Rank</div>,
          },
        ],
      },
      {
        path: "/laliga",
        element: <Laliga />,
        children: [
          {
            path: "overview",
            element: <OverView />,
          },
          {
            path: "rank",
            element: <div>Hello Rank</div>,
          },
        ],
      },

      {
        path: "/serie",
        element: <div>Hello Epl!</div>,
      },
      {
        path: "/bundes",
        element: <div>Hello Epl!</div>,
      },
      {
        path: "/league1",
        element: <div>Hello Epl!</div>,
      },
    ],
  },
]);

export default router;
