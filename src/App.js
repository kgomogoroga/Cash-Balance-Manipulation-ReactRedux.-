import { useState } from "react";
import { deductChargesFromAmount, addInterestToAmount, decrementByAmount, incrementByAmount }  from "./store/counter"
// Importing the useSelector and useDispatch functions to select the required
// slices of state.
import { useSelector, useDispatch } from "react-redux";
// Importing the action creators we’ve implemented in our counter reducer.
// Importing the App.css file to add styling to our App component
import './App.css';

function App() {
    const [userInput, setUserInput] = useState(0);
    
    // The useSelector function allows us to find the needed slices of state we
    // require. The useDispatch function will dispatch all the necessary actions to
    // the reducer to enable us to modify the state.
    const count = useSelector((state) => state.counter.value);

    // Initiating the dispatch variable using the useDispatch function.
    const dispatch = useDispatch();

    const handleDeposit = (e) => {
      dispatch(incrementByAmount(Number(userInput)));
      setUserInput(0);
    };

    const handleWithdrawal = (e) => {
      dispatch(decrementByAmount(Number(userInput)));
      setUserInput(0);
    };

    const handleAddInterest = (e) => {
      dispatch(addInterestToAmount(userInput));
      setUserInput(0);
    }

    const handleDeductCharge = (e) => {
      dispatch(deductChargesFromAmount(userInput));
      setUserInput(0);
    }

    return (
      <div>
      <div className="App">
        {/* Displaying the state or count variable we have initiated earlier
        using the useSeletor function*/}
        <h1>{count}</h1>
        </div>
        <div className="Buttons">
        {/* Now each time any of the buttons are clicked on, the state will
        increment or decrement depending
        on which button is clicked.*/}
        <button onClick={() => dispatch(handleDeposit)}>Deposit</button>
        <button onClick={() => dispatch(handleWithdrawal)}>Withdraw</button>
        <button onClick={() => dispatch(handleDeductCharge)}>Charges</button>
        <button onClick={() => dispatch(handleAddInterest)}>Add Interest</button>
        </div>
        <form className="Form">
          Value:
          <input type="text" name="value" id="userInput" onChange={(e) => setUserInput(e.target.value)} value={userInput} />
        </form>
      </div>
      );
}

export default App;
