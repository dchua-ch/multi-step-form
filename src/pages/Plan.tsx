import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";
import { updateForm } from "../store/formSlice";

interface FormInputs {
    plan: string;
    billingFrequency: string;
}
const Plan = () => {
    const plan = useAppSelector((state) => state.form.plan);
    const billingFrequency = useAppSelector(
        (state) => state.form.billingFrequency
    );
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>({
        defaultValues: {
            plan: plan,
            billingFrequency: billingFrequency,
        },
    });

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        dispatch(updateForm(data));
        navigate("/addons");
    };
    return (
        <>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="radio"
                        value="arcade"
                        id="arcade"
                        {...register("plan", { required: true })}
                    />
                    <label htmlFor="arcade"> Arcade, $9/month</label>
                </div>
                <div>
                    <input
                        type="radio"
                        value="advanced"
                        id="advanced"
                        {...register("plan", { required: true })}
                    />
                    <label htmlFor="advanced"> Advanced, $12/month</label>
                </div>
                <div>
                    <input
                        type="radio"
                        value="pro"
                        id="pro"
                        {...register("plan", { required: true })}
                    />
                    <label htmlFor="pro"> Pro, $15/month</label>
                </div>
                {errors.plan && (
                    <span style={{ color: "red" }}>
                        This field is required.
                    </span>
                )}
                <div>
                    <h2>Billing Frequency</h2>
                    <div>
                        <input
                            type="radio"
                            value="monthly"
                            id="monthly"
                            {...register("billingFrequency", {
                                required: true,
                            })}
                        />
                        <label htmlFor="monthly"> Monthly</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            value="yearly"
                            id="yearly"
                            {...register("billingFrequency", {
                                required: true,
                            })}
                        />
                        <label htmlFor="yearly"> Yearly</label>
                    </div>
                    {errors.billingFrequency && (
                        <span style={{ color: "red" }}>
                            This field is required.
                        </span>
                    )}
                </div>
                <button onClick={() => navigate("/info")}>Go back</button>
                <button type="submit">Next Step</button>
            </form>
        </>
    );
};

export default Plan;
