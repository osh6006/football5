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
import { store } from "./store";
import { Provider } from "react-redux";
import Laliga from "./pages/Laliga";

// react-router!
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={Theme && Theme}>
        <GlobalStyle />
        <RouterProvider router={router && router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
