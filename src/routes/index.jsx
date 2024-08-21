import React from "react";
import Home from "@/routes/path/Home";
import About from "@/routes/path/About";

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
  }
]
