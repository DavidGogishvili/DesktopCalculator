import React, { useState } from 'react';
import "./Temperature.css";

function Temperature() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [kelvin, setKelvin] = useState('');

    const celsiusToFahrenheit = (celsius) => {
        return (celsius * 9/5) + 32;
    };

    const celsiusToKelvin = (celsius) => {
        return celsius + 273.15;
    };

    const fahrenheitToCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5/9;
    };

    const fahrenheitToKelvin = (fahrenheit) => {
        return (fahrenheit - 32) * 5/9 + 273.15;
    };

    const kelvinToCelsius = (kelvin) => {
        return kelvin - 273.15;
    };

    const kelvinToFahrenheit = (kelvin) => {
        return (kelvin - 273.15) * 9/5 + 32;
    };

    // Event handlers
    const handleCelsiusChange = (event) => {
        const value = event.target.value;
        setCelsius(value);
        setFahrenheit(celsiusToFahrenheit(value));
        setKelvin(celsiusToKelvin(value));
    };

    const handleFahrenheitChange = (event) => {
        const value = event.target.value;
        setFahrenheit(value);
        setCelsius(fahrenheitToCelsius(value));
        setKelvin(fahrenheitToKelvin(value));
    };

    const handleKelvinChange = (event) => {
        const value = event.target.value;
        setKelvin(value);
        setCelsius(kelvinToCelsius(value));
        setFahrenheit(kelvinToFahrenheit(value));
    };

    return (
        <div className="resultsTemp" id="temperatureResult">
            <label htmlFor="tempFirstValue">
                ℃elsius
                <input type="number" id="tempFirstValue" className="values" value={celsius} onChange={handleCelsiusChange} placeholder="℃" />
            </label>

            <label htmlFor="tempSecondValue">
                ℉ahrenheit
                <input type="number" id="tempSecondValue" className="values" value={fahrenheit} onChange={handleFahrenheitChange} placeholder="℉" />
            </label>

            <label htmlFor="tempThirdValue">
                Kelvin
                <input type="number" id="tempThirdValue" className="values" value={kelvin} onChange={handleKelvinChange} placeholder="K" />
            </label>
        </div>
    );
}

export default Temperature;
