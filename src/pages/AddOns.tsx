import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";
import { updateForm } from "../store/formSlice";
export type addOn = 'Online service' | 'Larger storage' | 'Customizable profile';
interface FormInputs {
    addOns: addOn[];
}

const AddOns = () => {
    const addOns = useAppSelector((state) => state.form.addOns);
    const { register, handleSubmit } = useForm<FormInputs>({
        defaultValues: { addOns: addOns },
    });
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        if (data.addOns) {
            dispatch(updateForm(data));
        }
        navigate("/summary");
    };
    return (
        <>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="checkbox"
                        value="Online service"
                        {...register("addOns")}
                    />
                    <label htmlFor="online_service">Online service</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        value="Larger storage"
                        {...register("addOns")}
                    />
                    <label htmlFor="online_service">Larger storage</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        value="Customizable profile"
                        {...register("addOns")}
                    />
                    <label htmlFor="online_service">Customizable Profile</label>
                </div>
                <button onClick={() => navigate("/plan")}>Go Back</button>
                <button type="submit">Next Step</button>
            </form>
        </>
    );
};

export default AddOns;
