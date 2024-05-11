import React, { useState } from "react";
import "./Energy.css";

function Energy() {
    const [joule, setJoule] = useState('');
    const [kilocalorie, setKilocalorie] = useState('');

    const updateValues = (value, unit) => {
        switch (unit) {
            case 'joule':
                setJoule(value);
                setKilocalorie(value * 0.000239006);
                break;
            case 'kilocalorie':
                setJoule(value * 4186.8);
                setKilocalorie(value);
                break;
            default:
                break;
        }
    };

    const InputChange = (event, unit) => {
        const value = parseFloat(event.target.value);
        if (!isNaN(value)) {
            updateValues(value, unit);
        }
    };

    return (
        <div className="resultsEnergy" id="energyResult">
            <label htmlFor="energyFirstValue">
                Joule
                <input
                    type="number"
                    id="energyFirstValue"
                    className="valuesEnergy"
                    placeholder="Joule"
                    value={joule}
                    onChange={(e) => InputChange(e, 'joule')}
                />
            </label>
            <label htmlFor="energySecondValue">
                Kilocalorie
                <input
                    type="number"
                    id="energySecondValue"
                    className="valuesEnergy"
                    placeholder="KiloCalorie"
                    value={kilocalorie}
                    onChange={(e) => InputChange(e, 'kilocalorie')}
                />
            </label>
        </div>
    );
}

export default Energy;
