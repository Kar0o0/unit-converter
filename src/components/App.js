import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";
function App() {
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState("")
  const [fromUnit, setFromUnit] = useState(1)
  const [toUnit, setToUnit] = useState(1)

  const amountChangeHandler = (event)=>{
    setAmount(event.target.value)
  }

  const fromUnitChangeHandler = (event)=>{
    setFromUnit(event.target.value)
  }

  const toUnitChangeHandler = (event)=>{
    setToUnit(event.target.value)
    console.log(toUnit)
  }

  const calculate = (amount,from,to)=>{
    let finalResult;
    if (amount === ""){
      setResult(0)
    }else{
      finalResult = (parseFloat(amount) * parseFloat(from)) / parseFloat(to);
      setResult(finalResult)
    }
  }
  return (
    <>
      <div className="converter-form">
        {/* Input with label "Amount" here */}
        <Input label="Amount" onChange={amountChangeHandler}/>
        <div className="row">
          {/* Selects with labels "From" and "To" here */}
          <Select label="From" items={units} onChange={fromUnitChangeHandler}/>
          <Select label="To" items={units} onChange={toUnitChangeHandler}/>
          <button onClick={()=>calculate(amount,fromUnit,toUnit)}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
