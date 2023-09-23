const Plan = () => {
    return (
        <>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing</p>

            <div>
                <input type="radio" name="plan" value="arcade" />
                <label htmlFor="arcade"> Arcade, $9/month</label>
            </div>

            <div>
                <input type="radio" name="plan" value="advanced" />
                <label htmlFor="advanced"> Advanced, $12/month</label>
            </div>

            <div>
                <input type="radio" name="plan" value="Pro" />
                <label htmlFor="Pro"> Pro, $15/month</label>
            </div>

            <div>
                <h2>Billing Frequency</h2>

                <div>
                    <input
                        type="radio"
                        name="billing_frequency"
                        value="monthly"
                    />
                    <label htmlFor="monthlu"> Monthly</label>
                </div>

                <div>
                    <input
                        type="radio"
                        name="billing_frequency"
                        value="yearly"
                    />
                    <label htmlFor="yearly"> Yearly</label>
                </div>
            </div>
        </>
    );
};

export default Plan;
