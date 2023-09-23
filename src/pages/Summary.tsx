import { useAppSelector } from "../store/storeHooks";
import {useNavigate} from "react-router-dom";
const Summary = () => {
    const form = useAppSelector((state) => state.form);
    const navigate = useNavigate();
    const handleSubmit = () => {
      console.log(form);
    }
    return (
        <>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
            <div>
                {form.plan} ({form.billingFrequency})
            </div>
            {form.addOns?.map((addOn) => (
                <div key = {addOn}>{addOn}</div>
            ))}
            <button onClick={()=>navigate("/addons")}>Go Back</button>
            <button onClick={handleSubmit}>Confirm</button>
        </>
    );
};

export default Summary;
