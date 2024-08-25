import { useState } from "react";
import RandomVerse from "./components/RandomVerse";
import Home from "./components/Home";
import "./index.css";
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <section>
        <div className="bg-blue-200 flex justify-between items-center p-4">
          <h1 className="font-bold">Home</h1>
          <div className="gap-8 flex">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold drop-shadow-[1.2px_1.2px_black] hover:text-black hover:drop-shadow-[1.2px_1.2px_white]"
                  : "text-black drop-shadow-[1.2px_1.2px_white] font-bold hover:text-blue-500 hover:drop-shadow-[1.2px_1.2px_black]"
              }
              // style={({ isActive }) => (isActive ? { color: "white" } : {})}
            >
              Home
            </NavLink>
            <NavLink
              to="/verse"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold drop-shadow-[1.2px_1.2px_black] hover:text-black hover:drop-shadow-[1.2px_1.2px_white]"
                  : "text-black drop-shadow-[1.2px_1.2px_white] font-bold hover:text-blue-500 hover:drop-shadow-[1.2px_1.2px_black]"
              }
              // style={({ isActive }) => (isActive ? { color: "white" } : {})}
            >
              Verses
            </NavLink>
          </div>
        </div>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen text-center items-center justify-center flex flex-col">
          <Outlet></Outlet>
        </div>
      </section>
    ),
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "verse",
        element: <RandomVerse />,
      },
    ],
  },
]);

export default App;
