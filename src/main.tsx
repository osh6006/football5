import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import Theme from "./styles/theme";
import "./styles/index.css";

import Epl from "./pages/Epl";
import Root from "./pages/Root";
import Error from "./pages/Error";
import OverView from "./pages/OverView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,

    children: [
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
        element: <div>Hello Epl!</div>,
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme && Theme}>
      <GlobalStyle />
      <RouterProvider router={router && router} />
    </ThemeProvider>
  </React.StrictMode>
);
