import { Outlet } from "react-router-dom";
import { childRoutes } from "./Routes";
export default function Root() {
    return (
        <>
            <div id="sidebar">
                <nav>
                    <ul>
                        {childRoutes.map((route) => (
                            <li>
                                <a href={route.path}>{route.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
