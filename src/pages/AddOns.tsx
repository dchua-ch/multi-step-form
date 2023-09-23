import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
interface FormInputs {
    addOns:string[];
}

const AddOns = () => {
    const {
        register,
        handleSubmit,
    } = useForm<FormInputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(data);
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
                        value="online_service"
                        {...register("addOns")}
                    />
                    <label htmlFor="online_service">Online service</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        value="larger_storage"
                        {...register("addOns")}
                    />
                    <label htmlFor="online_service">Larger storage</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        value="customizable_profile"
                        {...register("addOns")}
                    />
                    <label htmlFor="online_service">Customizable Profile</label>
                </div>
                <button onClick={()=>navigate("/plan")}>Go Back</button>
                <button type="submit">Next Step</button>
            </form>
        </>
    );
};

export default AddOns;
