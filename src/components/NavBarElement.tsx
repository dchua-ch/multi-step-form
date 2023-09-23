import { Link } from "react-router-dom";

interface NavBarElementProps {
    index: number;
    name: string;
    path: string;
}
const NavBarElement = (props: NavBarElementProps) => {
    const { index, name, path } = props;
    return (
        <>
            <li>
                <Link to={path}>
                    <div>Step {index}</div>
                    <div>{name}</div>
                </Link>
            </li>
        </>
    );
};

export default NavBarElement;
