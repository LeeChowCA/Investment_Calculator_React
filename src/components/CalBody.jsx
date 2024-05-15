import CalInput from "./CalInput.jsx";

export default function CalBody({initValue, handleChange}) {
    return (
            <form id="user-input">
                <div className="input-group">
                    {/*use onChange to call handleChange function to update object properties, use
                    arrow function to pass the parameter at the right timing.*/}
                    <CalInput labelName="INITIAL INVESTMENT" type={"number"} name="initialInvestment"
                              value={initValue.initialInvestment}
                              onChange={(event) => handleChange("initialInvestment", event.target.value)}
                    ></CalInput>
                    <CalInput labelName="ANNUAL Investment" type={"number"} name="annualInvestment"
                              value={initValue.annualInvestment}
                              onChange={(event) => handleChange("annualInvestment", event.target.value)}
                    ></CalInput>
                </div>
                <div className="input-group">
                    <CalInput labelName="EXPECTED RETURN" type={"number"} name="expectedReturn"
                              value={initValue.expectedReturn}
                              onChange={(event) => handleChange("expectedReturn", event.target.value)}
                    ></CalInput>
                    <CalInput labelName="DURATION" type={"number"} name="duration"
                              value={initValue.duration}
                              onChange={(event) => handleChange("duration", event.target.value)}
                    ></CalInput>
                </div>
            </form>
        );

}