import { Outlet } from "react-router-dom";
import { childRoutes } from "./Routes";
import NavBarElement from "../components/NavBarElement";
import { v4 as uuid } from "uuid";
export default function Root() {
    return (
        <>
            <div id="sidebar">
                <nav>
                    <ul>
                        {childRoutes.map((route, index) => (
                            <NavBarElement
                                key={uuid()}
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
        </>
    );
}
