import React, { useState } from "react";
import "./Pressure.css";

function Pressure() {
    const [pascal, setPascal] = useState('');
    const [atmosphere, setAtmosphere] = useState('');

    const updateValues = (value, unit) => {
        switch (unit) {
            case 'pascal':
                setPascal(value);
                setAtmosphere(value * 9.8692e-6);
                break;
            case 'atmosphere':
                setPascal(value * 101325);
                setAtmosphere(value);
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
        <div className="resultsPressure" id="pressureResult">
            <label htmlFor="pressureFirstValue">
                Pascal
                <input
                    type="number"
                    id="pressureFirstValue"
                    className="valuesPressure"
                    placeholder="Pascal"
                    value={pascal}
                    onChange={(e) => InputChange(e, 'pascal')}
                />
            </label>
            <label htmlFor="pressureSecondValue">
                Atmosphere
                <input
                    type="number"
                    id="pressureSecondValue"
                    className="valuesPressure"
                    placeholder="Atmosphere"
                    value={atmosphere}
                    onChange={(e) => InputChange(e, 'atmosphere')}
                />
            </label>
        </div>
    );
}

export default Pressure;
