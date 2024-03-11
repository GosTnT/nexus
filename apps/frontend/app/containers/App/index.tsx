import HomePage from "@/containers/HomePage"
import NotFound from "@/containers/NotFoundPage";
import "./output.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([{
  path: "/",
  element: <HomePage />,
  errorElement: <NotFound />,
},]);
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )

}
