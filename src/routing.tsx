import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import NotFound from "./components/ui/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { SuspenseWrapper } from "./components/SuspenseWrapper";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const Discover = lazy(() => import("./pages/Discover"));
const Library = lazy(() => import("./pages/Library"));
const Tech = lazy(() => import("./pages/Tech"));
const Subscription = lazy(() => import("./pages/Subscription"));
const Rewards = lazy(() => import("./pages/Rewards"));
const Settings = lazy(() => import("./pages/Settings"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));

export const router = createBrowserRouter([
  {
    path: "/signup",
    element: React.createElement(SuspenseWrapper, {
      children: React.createElement(Signup),
    }),
  },
  {
    path: "/login",
    element: React.createElement(SuspenseWrapper, {
      children: React.createElement(Login),
    }),
  },
  {
    path: "/",
    element: React.createElement(AppLayout),
    errorElement: React.createElement(NotFound),
    children: [
      {
        path: "/",
        element: React.createElement(ProtectedRoute, {
          children: React.createElement(SuspenseWrapper, {
            children: React.createElement(Home),
          }),
        }),
      },
      {
        path: "/discover",
        element: React.createElement(ProtectedRoute, {
          children: React.createElement(SuspenseWrapper, {
            children: React.createElement(Discover),
          }),
        }),
      },
      {
        path: "/library",
        element: React.createElement(ProtectedRoute, {
          children: React.createElement(SuspenseWrapper, {
            children: React.createElement(Library),
          }),
        }),
      },
      {
        path: "/tech",
        element: React.createElement(ProtectedRoute, {
          children: React.createElement(SuspenseWrapper, {
            children: React.createElement(Tech),
          }),
        }),
      },
      {
        path: "/subscriptions",
        element: React.createElement(ProtectedRoute, {
          children: React.createElement(SuspenseWrapper, {
            children: React.createElement(Subscription),
          }),
        }),
      },
      {
        path: "/rewards",
        element: React.createElement(ProtectedRoute, {
          children: React.createElement(SuspenseWrapper, {
            children: React.createElement(Rewards),
          }),
        }),
      },
      {
        path: "/settings",
        element: React.createElement(ProtectedRoute, {
          children: React.createElement(SuspenseWrapper, {
            children: React.createElement(Settings),
          }),
        }),
      },
    ],
  },
]);
