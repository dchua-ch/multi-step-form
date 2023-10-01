import { RouteObject } from "react-router-dom";
import { lazy } from "react";
import Root from "./Root";
import LoadWithSuspense from "./LoadWithSuspense";
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
        element: (
            <LoadWithSuspense>
                <Info />
            </LoadWithSuspense>
        ),
        name: "Your Info",
    },
    {
        path: "/plan",
        element: (
            <LoadWithSuspense>
                <Plan />
            </LoadWithSuspense>
        ),
        name: "Select Plan",
    },
    {
        path: "/addons",
        element: (
            <LoadWithSuspense>
                <AddOns />
            </LoadWithSuspense>
        ),
        name: "Add-ons",
    },
    {
        path: "/summary",
        element: (
            <LoadWithSuspense>
                <Summary />
            </LoadWithSuspense>
        ),
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
