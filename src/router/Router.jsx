import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserPanel from "../pages/UserPanel/UserPanel";
import AddBlogPanel from "../pages/AddBlogPanel/AddBlogPanel";
import ViewBlogsPanel from "../pages/ViewBlogsPanel/ViewBlogsPanel";
import QuickReports from "../pages/QuickReports/QuickReports";
import ViewServicesPanel from "../pages/ViewServicesPanel/ViewServicesPanel";
import AddServicePanel from "../pages/AddServicePanel/AddServicePanel";

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
        element: <ViewServicesPanel />,
      },
      {
        path: "add-product-panel",
        element: <AddServicePanel />,
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
