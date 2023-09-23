const AddOns = () => {
    return (
        <>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>

            <div>
                <input
                    type="checkbox"
                    name="online_service"
                    value="online_service"
                />
                <label htmlFor="online_service">Online service</label>
            </div>

            <div>
                <input
                    type="checkbox"
                    name="online_service"
                    value="online_service"
                />
                <label htmlFor="online_service">Larger storage</label>
            </div>

            <div>
                <input
                    type="checkbox"
                    name="online_service"
                    value="online_service"
                />
                <label htmlFor="online_service">Customizable Profile</label>
            </div>
        </>
    );
};

export default AddOns;
