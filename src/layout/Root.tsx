import { Outlet } from "react-router-dom";
import { childRoutes } from "./Routes";
import NavBarElement from "../components/NavBarElement";
import NavButtons from "../components/NavButtons";
export default function Root() {
    return (
        <>
            <div id="sidebar">
                <nav>
                    <ul>
                        {childRoutes.map((route, index) => (
                            <NavBarElement
                                key={route.path}
                                index={index + 1} //switch from 0-based to 1-based indexing
                                name={route.name}
                                path={route.path}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
            <div>
                <NavButtons/>
            </div>
        </>
    );
}
