import React from "react";
import Home from "@/routes/path/Home";
import About from "@/routes/path/About";
import History from "@/routes/path/History";
import Rules from "@/routes/path/Rules";

export default [
  {
    path: "/",
    index: true,
    name: "home",
    element: <Home />
  },
  {
    path: "/about",
    index: false,
    name: "about",
    element: <About />
  },
  {
    path: "/history",
    index: false,
    name: "history",
    element: <History />
  },
  {
    path: "/rules",
    index: false,
    name: "rules",
    element: <Rules />
  },
]
