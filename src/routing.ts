import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import NotFound from "./components/ui/NotFound";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Library from "./pages/Library";
import Tech from "./pages/Tech";
import Subscription from "./pages/Subscription";
import Rewards from "./pages/Rewards";
import Settings from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(AppLayout),
    errorElement: React.createElement(NotFound),
    children: [
      {
        path: "/",
        element: React.createElement(Home),
      },
      {
        path: "/discover",
        element: React.createElement(Discover),
      },
      {
        path: "/library",
        element: React.createElement(Library),
      },
      {
        path: "/tech",
        element: React.createElement(Tech),
      },
      {
        path: "/subscriptions",
        element: React.createElement(Subscription),
      },
      {
        path: "/rewards",
        element: React.createElement(Rewards),
      },
      {
        path: "/settings",
        element: React.createElement(Settings),
      },
    ],
  },
]);
