import React, { useState } from 'react';
import './Header.css';
import BasicCalculator from "../BasicCalculator/BasicCalculator";
import ConversionMain from "../ConversionCalculator/ConversionMain";
import TipCalculator from "../TipCalculator/TipCalculator";

function HeaderComponent({ setResult }) {
    const [selectedOption, setSelectedOption] = useState("Basic");

    const Change = (option) => {
        setSelectedOption(option);
    };

    const renderCalculator = () => {
        switch (selectedOption) {
            case 'Basic':
                return <BasicCalculator setResult={setResult} />;
            case 'Conversion':
                return <ConversionMain setResult={setResult} />;
            case 'Tip':
            return  <TipCalculator/>;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="dropdown" >
                <button className="dropbtn">Choose  Type</button>
                <div className="dropdown-content">
                    <a onClick={() => Change('Basic')}>Basic Calculator</a>
                    <a onClick={() => Change('Conversion')}>Conversion Calculator</a>
                    <a onClick={() => Change('Tip')}>Tip Calculator</a>
                </div>
            </div>
            {renderCalculator()}
        </div>
    );
}

export default HeaderComponent;
