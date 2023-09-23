import { useNavigate } from "react-router-dom";
interface NavButtonsProps {
    backButtonText?: string;
    forwardButtonText?: string;
}
const NavButtons = (props: NavButtonsProps) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    const goForward = () => {
        navigate(1);
    };

    const { backButtonText = "Go Back", forwardButtonText = "Next Step" } =
        props;
    return (
        <>
            <button type="button" onClick={goBack}>
                {backButtonText}
            </button>
            <button type="button" onClick={goForward}>
                {forwardButtonText}
            </button>
        </>
    );
};

export default NavButtons;
