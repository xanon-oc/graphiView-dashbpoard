import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserPanel from "../pages/UserPanel/UserPanel";
import ViewProductPanel from "../pages/ViewProductPanel/ViewProductPanel";
import AddProductPanel from "../pages/AddProductPanel/AddProductPanel";
import AddBlogPanel from "../pages/AddBlogPanel/AddBlogPanel";
import ViewBlogsPanel from "../pages/ViewBlogsPanel/ViewBlogsPanel";
import QuickReports from "../pages/QuickReports/QuickReports";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "users",
        element: <UserPanel />,
      },
      {
        path: "view-products-panel",
        element: <ViewProductPanel />,
      },
      {
        path: "add-product-panel",
        element: <AddProductPanel />,
      },
      {
        path: "view-blogs-panel",
        element: <ViewBlogsPanel />,
      },
      {
        path: "add-blog-panel",
        element: <AddBlogPanel />,
      },
      {
        path: "quickReports",
        element: <QuickReports />,
      },
    ],
  },
]);
export default Router;
