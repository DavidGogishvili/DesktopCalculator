import React, { useState } from "react";
import "./Mass.css";

function Mass() {
    const [milligram, setMilligram] = useState('');
    const [gram, setGram] = useState('');
    const [kilogram, setKilogram] = useState('');
    const [ton, setTon] = useState('');
    const [ounce, setOunce] = useState('');
    const [pound, setPound] = useState('');

    const updateValues = (value, unit) => {
        switch (unit) {
            case 'milligram':
                setMilligram(value);
                setGram(value * 0.001);
                setKilogram(value * 1e-6);
                setTon(value * 1.102e-9);
                setOunce(value * 3.5274e-5);
                setPound(value * 2.2046e-6);
                break;
            case 'gram':
                setMilligram(value * 1000);
                setGram(value);
                setKilogram(value * 0.001);
                setTon(value * 1.102e-6);
                setOunce(value * 0.035274);
                setPound(value * 0.00220462);
                break;
            case 'kilogram':
                setMilligram(value * 1e+6);
                setGram(value * 1000);
                setKilogram(value);
                setTon(value * 0.00110231);
                setOunce(value * 35.274);
                setPound(value * 2.20462);
                break;
            case 'ton':
                setMilligram(value * 9.0718e+8);
                setGram(value * 907185);
                setKilogram(value * 907.185);
                setTon(value);
                setOunce(value * 32000);
                setPound(value * 2000);
                break;
            case 'ounce':
                setMilligram(value * 28349.5);
                setGram(value * 28.3495);
                setKilogram(value * 0.0283495);
                setTon(value * 3.125e-5);
                setOunce(value);
                setPound(value * 0.0625);
                break;
            case 'pound':
                setMilligram(value * 453592);
                setGram(value * 453.592);
                setKilogram(value * 0.453592);
                setTon(value * 0.0005);
                setOunce(value * 16);
                setPound(value);
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
        <div className="resultsMass" id="massResult">
            <label htmlFor="massFirstValue">
                Milligram
                <input
                    type="number"
                    id="massFirstValue"
                    className="valuesMass"
                    placeholder="Mg"
                    value={milligram}
                    onChange={(e) => InputChange(e, 'milligram')}
                />
            </label>
            <label htmlFor="massSecondValue">
                Gram
                <input
                    type="number"
                    id="massSecondValue"
                    className="valuesMass"
                    placeholder="Gram"
                    value={gram}
                    onChange={(e) => InputChange(e, 'gram')}
                />
            </label>
            <label htmlFor="massThirdValue">
                Kilogram
                <input
                    type="number"
                    id="massThirdValue"
                    className="valuesMass"
                    placeholder="Kg"
                    value={kilogram}
                    onChange={(e) => InputChange(e, 'kilogram')}
                />
            </label>
            <label htmlFor="massFourthValue">
                Ton
                <input
                    type="number"
                    id="massFourthValue"
                    className="valuesMass"
                    placeholder="Ton"
                    value={ton}
                    onChange={(e) => InputChange(e, 'ton')}
                />
            </label>
            <label htmlFor="massFifthValue">
                Ounce
                <input
                    type="number"
                    id="massFifthValue"
                    className="valuesMass"
                    placeholder="Ounce"
                    value={ounce}
                    onChange={(e) => InputChange(e, 'ounce')}
                />
            </label>
            <label htmlFor="massSixthValue">
                Pound
                <input
                    type="number"
                    id="massSixthValue"
                    className="valuesMass"
                    placeholder="Pound"
                    value={pound}
                    onChange={(e) => InputChange(e, 'pound')}
                />
            </label>
        </div>
    );
}

export default Mass;
