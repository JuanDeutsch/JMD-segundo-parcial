import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import FoodList from "./pages/foodList";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { FoodProvider } from "./context/foodCtx";
import { FiltersProvider } from "./context/filtersCtx";
import DetailFood from "./pages/detailFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FoodList />,
  },
  {
    path: '/detail/:idMeal',
    element: <DetailFood />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FoodProvider>
      <FiltersProvider>
        <RouterProvider router={router}/>
      </FiltersProvider>
    </FoodProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
