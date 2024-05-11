import React, { useState } from 'react';
import './TipCalculator.css';

function TipCalculator() {
    const [bill, setBill] = useState('');
    const [tipPercentage, setTipPercentage] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState(1);

    const BillChange = (event) => {
        setBill(event.target.value);
    };

    const TipChange = (event) => {
        setTipPercentage(event.target.value);
    };

    const handlePeopleChange = (event) => {
        setNumberOfPeople(event.target.value);
    };

    const Reset = () => {
        setBill('');
        setTipPercentage('');
        setNumberOfPeople(1);
    };

    const calculateTipAmount = () => {
        const tipAmount = (bill * tipPercentage) / 100 / numberOfPeople;
        return isNaN(tipAmount) ? '' : `$${tipAmount.toFixed(2)}`;
    };

    const calculateTotalAmount = () => {
        const totalAmount = (parseFloat(bill) + (parseFloat(bill) * parseFloat(tipPercentage)) / 100) / numberOfPeople;
        return isNaN(totalAmount) ? '' : `$${totalAmount.toFixed(2)}`;
    };

    return (
        <div className="Tipcalculator">
            <div className="Tipscreen">
                <label htmlFor="bill">Bill $</label>
                <input
                    className="input"
                    type="number"
                    id="bill"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    value={bill}
                    onChange={BillChange}
                />
                <label htmlFor="tip">Tip %</label>
                <input
                    className="input"
                    type="number"
                    min="0"
                    id="tip"
                    placeholder="%"
                    value={tipPercentage}
                    onChange={TipChange}
                />
                <label htmlFor="people">Number Of People</label>
                <input
                    className="input"
                    type="number"
                    min="0"
                    id="people"
                    placeholder="1"
                    onChange={handlePeopleChange}
                />
            </div>

            <div className="Tipresults">
                Tip Amount <br/>
                <span>/ Person</span>
                <br/>
            </div>
            <br/>

            <div className="Tipresult">
                Total <br/>
                <span>/ Person</span>
                <br/>
            </div>


            <button className="clear" onClick={Reset}>
                Reset
            </button>
            <div className="result">{calculateTotalAmount()}</div>
            <div className="result">{calculateTipAmount()}</div>
        </div>
    );
}

export default TipCalculator;
