import { RouteObject } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import Content from "../pages/Content";

type Route = {
    name?:string
} & RouteObject;

const childRoutes: Route[] = [
    {
        path: "/app",
        element: <App />,
        name: "App"
    },
    {
        path: "/content",
        element: <Content />,
        name: "Content"
    },
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
