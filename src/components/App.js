import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";
function App() {
  const [result, setResult] = useState(0);

  return (
    <>
      <div className="converter-form">
        {/* Input with label "Amount" here */}
        <Input label="Amount" />
        <div className="row">
          {/* Selects with labels "From" and "To" here */}
          <Select label="From" items={units}/>
          <Select label="To" items={units}/>
          <button>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
