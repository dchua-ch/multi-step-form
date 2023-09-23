import { RouteObject } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../pages/ErrorPage";
import Info from "../pages/Info";
import Plan from "../pages/Plan";
import Summary from "../pages/Summary";
import AddOns from "../pages/AddOns";
type Route = {
    name: string;
    path: string; // make path required
} & RouteObject;

const childRoutes: Route[] = [
    {
        path: "/info",
        element: <Info />,
        name: "Your Info",
    },
    {
        path: "/plan",
        element: <Plan />,
        name: "Select Plan",
    },
    {
        path: "/addons",
        element: <AddOns />,
        name: "Add-ons",
    },
    {
        path: "/summary",
        element: <Summary />,
        name: "Summary",
    },
];

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: childRoutes,
    },
];

export { routes, childRoutes };
