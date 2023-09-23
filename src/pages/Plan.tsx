import {useForm,SubmitHandler} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
interface Inputs {
    plan: string;
    billingFrequency: string;
}
const Plan = () => {
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm<Inputs>();

    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        navigate("/addons");
    };
    return (
        <>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="radio" value="arcade" {...register("plan")}/>
                    <label htmlFor="arcade"> Arcade, $9/month</label>
                </div>
                <div>
                    <input type="radio" value="advanced" {...register("plan")}/>
                    <label htmlFor="advanced"> Advanced, $12/month</label>
                </div>
                <div>
                    <input type="radio" value="Pro" {...register("plan")}/>
                    <label htmlFor="Pro"> Pro, $15/month</label>
                </div>
                <div>
                    <h2>Billing Frequency</h2>
                    <div>
                        <input
                            type="radio"
                            value="monthly"
                            {...register("billingFrequency")}
                        />
                        <label htmlFor="monthly"> Monthly</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            value="yearly"
                            {...register("billingFrequency")}
                        />
                        <label htmlFor="yearly"> Yearly</label>
                    </div>
                </div>
                <button onClick={()=>navigate("/info")}>Go back</button>
                <button type="submit">Next Step</button>
            </form>
        </>
    );
};

export default Plan;
