import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/Image-Gallery",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
