import { RouteObject } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../pages/ErrorPage";
import Info from "../pages/Info";
import Plan from "../pages/Plan";
import Summary from "../pages/Summary";
import AddOns from "../pages/AddOns";
type Route = {
    name?:string,
} & RouteObject;

const childRoutes: Route[] = [
 
    {
        path: "/info",
        element: <Info/>,
        name: "Info",
    },
    {
        path: "/plan",
        element: <Plan/>,
        name: "Plan"
    },
    {
        path: "/addons",
        element: <AddOns/>,
        name: "Add-ons"
    },
    {
        path: "/summary",
        element: <Summary/>,
        name: "Summary"
    }
];

const routes: Route[] = [
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: childRoutes,
    },
];



export { routes,childRoutes };
