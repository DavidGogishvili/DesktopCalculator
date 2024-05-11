import React, { useState } from "react";
import "./Area.css";

function Area() {
    const [mile2, setMile2] = useState('');
    const [km2, setKm2] = useState('');
    const [m2, setM2] = useState('');
    const [foot2, setFoot2] = useState('');
    const [inch2, setInch2] = useState('');
    const [yard2, setYard2] = useState('');

    const updateValues = (value, unit) => {
        switch (unit) {
            case 'mile2':
                setMile2(value);
                setKm2(value * 2.59);
                setM2(value * 2.59e+6);
                setFoot2(value * 2.788e+7);
                setInch2(value * 4.014e+9);
                setYard2(value * 3.098e+6);
                break;
            case 'km2':
                setMile2(value / 2.59);
                setKm2(value);
                setM2(value * 1e+6);
                setFoot2(value * 1.076e+7);
                setInch2(value * 1.55e+9);
                setYard2(value * 1.196e+6);
                break;
            case 'm2':
                setMile2(value / 2.59e+6);
                setKm2(value / 1e+6);
                setM2(value);
                setFoot2(value * 10.764);
                setInch2(value * 1550);
                setYard2(value * 1.196);
                break;
            case 'foot2':
                setMile2(value / 2.788e+7);
                setKm2(value / 1.076e+7);
                setM2(value / 10.764);
                setFoot2(value);
                setInch2(value * 144);
                setYard2(value / 9);
                break;
            case 'inch2':
                setMile2(value / 4.014e+9);
                setKm2(value / 1.55e+9);
                setM2(value / 1550);
                setFoot2(value / 144);
                setInch2(value);
                setYard2(value / 1296);
                break;
            case 'yard2':
                setMile2(value / 3.098e+6);
                setKm2(value / 1.196e+6);
                setM2(value / 1.196);
                setFoot2(value * 9);
                setInch2(value * 1296);
                setYard2(value);
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
        <div className="ResultsArea" id="areaResult">
            <label htmlFor="areaFirstValue">
                Mile²
                <input
                    type="number"
                    id="areaFirstValue"
                    className="valuesArea"
                    placeholder="Mile²"
                    value={mile2}
                    onChange={(e) => InputChange(e, 'mile2')}
                />
            </label>

            <label htmlFor="areaSecondValue">
                Kilometre²
                <input
                    type="number"
                    id="areaSecondValue"
                    className="valuesArea"
                    placeholder="Km²"
                    value={km2}
                    onChange={(e) => InputChange(e, 'km2')}
                />
            </label>

            <label htmlFor="areaThirdValue">
                Metre²
                <input
                    type="number"
                    id="areaThirdValue"
                    className="valuesArea"
                    placeholder="M²"
                    value={m2}
                    onChange={(e) => InputChange(e, 'm2')}
                />
            </label>

            <label htmlFor="areaForthValue">
                Foot²
                <input
                    type="number"
                    id="areaForthValue"
                    className="valuesArea"
                    placeholder="Foot²"
                    value={foot2}
                    onChange={(e) => InputChange(e, 'foot2')}
                />
            </label>

            <label htmlFor="areaFifthValue">
                Inch²
                <input
                    type="number"
                    id="areaFifthValue"
                    className="valuesArea"
                    placeholder="Inch²"
                    value={inch2}
                    onChange={(e) => InputChange(e, 'inch2')}
                />
            </label>

            <label htmlFor="areaSixthValue">
                Yard²
                <input
                    type="number"
                    id="areaSixthValue"
                    className="valuesArea"
                    placeholder="Yard²"
                    value={yard2}
                    onChange={(e) => InputChange(e, 'yard2')}
                />
            </label>
        </div>
    );
}

export default Area;
