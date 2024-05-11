import React, { useState } from "react";
import "./Volume.css";

function Volume() {
    const [liter, setLiter] = useState('');
    const [gallon, setGallon] = useState('');
    const [cubicMeter, setCubicMeter] = useState('');

    const updateValues = (value, unit) => {
        switch (unit) {
            case 'liter':
                setLiter(value);
                setGallon(value * 0.264172);
                setCubicMeter(value * 0.001);
                break;
            case 'gallon':
                setLiter(value * 3.78541);
                setGallon(value);
                setCubicMeter(value * 0.00378541);
                break;
            case 'cubicMeter':
                setLiter(value * 1000);
                setGallon(value * 264.172);
                setCubicMeter(value);
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
        <div className="resultsVolume" id="volumeResult">
            <label htmlFor="volumeFirstValue">
                Liter
                <input
                    type="number"
                    id="volumeFirstValue"
                    className="valuesVolume"
                    placeholder="Liter"
                    value={liter}
                    onChange={(e) => InputChange(e, 'liter')}
                />
            </label>
            <label htmlFor="volumeSecondValue">
                Gallon
                <input
                    type="number"
                    id="volumeSecondValue"
                    className="valuesVolume"
                    placeholder="Gallon"
                    value={gallon}
                    onChange={(e) => InputChange(e, 'gallon')}
                />
            </label>
            <label htmlFor="volumeThirdValue">
                Metre³
                <input
                    type="number"
                    id="volumeThirdValue"
                    className="valuesVolume"
                    placeholder="M³"
                    value={cubicMeter}
                    onChange={(e) => InputChange(e, 'cubicMeter')}
                />
            </label>
        </div>
    );
}

export default Volume;
