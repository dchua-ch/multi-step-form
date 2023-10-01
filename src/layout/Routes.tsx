import { RouteObject } from "react-router-dom";
import { lazy,Suspense } from "react";
import Root from "./Root";

const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const Info = lazy(() => import("../pages/Info"));
const Plan = lazy(() => import("../pages/Plan"));
const Summary = lazy(() => import("../pages/Summary"));
const AddOns = lazy(() => import("../pages/AddOns"));
type Route = {
    name: string;
    path: string; // make path required
} & RouteObject;

const childRoutes: Route[] = [
    {
        path: "/info",
        element: <Suspense fallback="loading..."><Info/></Suspense>,
        name: "Your Info",
    },
    {
        path: "/plan",
        element:<Suspense fallback="loading..."><Plan/></Suspense>,
        name: "Select Plan",
    },
    {
        path: "/addons",
        element: <Suspense fallback="loading..."><AddOns/></Suspense>,
        name: "Add-ons",
    },
    {
        path: "/summary",
        element:<Suspense fallback="loading..."><Summary/></Suspense>,
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
