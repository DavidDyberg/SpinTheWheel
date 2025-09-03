import { createBrowserRouter } from "react-router";
import { Profile } from "./pages/profile.tsx"
import { App } from "./pages/App.tsx"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile/:id",
    element: <  Profile />  ,
  },
]);
