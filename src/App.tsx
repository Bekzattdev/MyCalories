import { RouterProvider } from "react-router-dom";
import { route } from "./routes/route";

export const App = () => {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};
