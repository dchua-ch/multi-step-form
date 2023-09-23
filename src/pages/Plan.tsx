import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
interface FormInputs {
    plan: string;
    billingFrequency: string;
}
const Plan = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>();

    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(data);
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
                        {...register("plan", { required: true })}
                    />
                    <label htmlFor="arcade"> Arcade, $9/month</label>
                </div>
                <div>
                    <input
                        type="radio"
                        value="advanced"
                        {...register("plan", { required: true })}
                    />
                    <label htmlFor="advanced"> Advanced, $12/month</label>
                </div>
                <div>
                    <input
                        type="radio"
                        value="Pro"
                        {...register("plan", { required: true })}
                    />
                    <label htmlFor="Pro"> Pro, $15/month</label>
                </div>
                {errors.plan && <span style={{color:"red"}}>This field is required.</span>}
                <div>
                    <h2>Billing Frequency</h2>
                    <div>
                        <input
                            type="radio"
                            value="monthly"
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
                            {...register("billingFrequency", {
                                required: true,
                            })}
                        />
                        <label htmlFor="yearly"> Yearly</label>
                    </div>
                    {errors.billingFrequency && <span style={{color:"red"}}>This field is required.</span>}
                </div>
                <button onClick={() => navigate("/info")}>Go back</button>
                <button type="submit">Next Step</button>
            </form>
        </>
    );
};

export default Plan;
