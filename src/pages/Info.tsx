const Info = () => {
    return (
        <>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <div>
                <label htmlFor="name">Name</label>
                <br />
                <input name="name"></input>
            </div>

            <div>
                <label htmlFor="email_address">Email Address</label>
                <br />
                <input name="email_address"></input>
            </div>

            <div>
                <label htmlFor="phone_number">Phone Number</label>
                <br />
                <input name="phone_number"></input>
            </div>
        </>
    );
};

export default Info;
