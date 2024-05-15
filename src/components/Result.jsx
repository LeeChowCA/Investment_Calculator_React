import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Result({calElements}) {

    const result = calculateInvestmentResults({
        initialInvestment:parseInt(calElements.initialInvestment) ,
        annualInvestment: parseInt(calElements.annualInvestment),
        expectedReturn: parseInt(calElements.expectedReturn),
        duration: parseInt(calElements.duration)
    })


    let investmentDisplay = () => {
        return (
            result.map((duration, durationIndex) =>(
                <tr key={durationIndex}>
                    <td>{duration.year}</td>
                    <td>{formatter.format(parseInt(duration.valueEndOfYear))}</td>
                    <td>{formatter.format(duration.interest)}</td>
                    <td>{formatter.format(parseInt(duration.valueEndOfYear) - duration.annualInvestment * (durationIndex + 1) - calElements.initialInvestment)}</td>
                    <td>{formatter.format(parseInt(calElements.initialInvestment) + durationIndex * duration.annualInvestment)}</td>
                </tr>
                )
            )
        )
    }

    return <table id={"result"}>
        <thead>
        <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
        </thead>
        <tbody>
        {investmentDisplay()}
        </tbody>
    </table>
}