import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import ErrorPage from "../components/ErrorPage";
import FoodTracker from "../components/food/FoodTraker";
import CaloriesCalculator from "../components/calories/CaloriesCalculator";
export const route: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/calories",
          element: <CaloriesCalculator />,
        },
        {
          path: "/traker",
          element: <FoodTracker />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
