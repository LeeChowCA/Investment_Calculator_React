import Header from "./components/Header.jsx";
import CalBody from "./components/CalBody.jsx";
import {useState} from "react";
import Result from "./components/Result.jsx";

function App() {

    //set a default value for the calculator
    const [initValue, setValue] = useState(
        {
            initialInvestment: 1000,
            annualInvestment: 100,
            expectedReturn: 10,
            duration: 10
        }
    );

    //handleChange function uses computed property name to update the target property, spread operator to
    //copy the latest state
    const handleChange = (inputIdentifier, newValue) => {
        setValue(prevState => {
            return {
                ...prevState, [inputIdentifier]: newValue
            };
        })
    }

    let isValid = initValue.annualInvestment > 0 && initValue.expectedReturn > 0 && initValue.duration > 0;

    return (
        <>
            <Header></Header>
            <CalBody initValue={initValue} handleChange={handleChange}></CalBody>
            {isValid && <Result calElements={initValue}></Result>}
            {!isValid && <p style={{ textAlign: "center" }}>please input a valid value</p>}
        </>
    )
}

export default App
