import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";
import { updateForm } from "../store/formSlice";

interface FormInputs {
    name: string;
    emailAddress: string;
    phoneNumber: string;
}
const Info = () => {
    const name = useAppSelector((state) => state.form.name);
    const emailAddress = useAppSelector((state) => state.form.emailAddress);
    const phoneNumber = useAppSelector((state) => state.form.phoneNumber);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>({
        defaultValues: {
            name: name,
            emailAddress: emailAddress,
            phoneNumber: phoneNumber,
        },
    });

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        dispatch(updateForm(data));
        navigate("/plan");
    };

    return (
        <>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input {...register("name", { required: true })}></input>
                    {errors.name && (
                        <p style={{ color: "red" }}>This field is required</p>
                    )}
                </div>
                <div>
                    <label htmlFor="emailAddress">Email Address</label>
                    <br />
                    <input
                        {...register("emailAddress", { required: true })}
                    ></input>
                    {errors.emailAddress && (
                        <p style={{ color: "red" }}>This field is required</p>
                    )}
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <br />
                    <input
                        {...register("phoneNumber", { required: true })}
                    ></input>
                    {errors.phoneNumber && (
                        <p style={{ color: "red" }}>This field is required</p>
                    )}
                </div>

                <button disabled={true}>Go back</button>
                <button type="submit">Next Step</button>
            </form>
        </>
    );
};

export default Info;
