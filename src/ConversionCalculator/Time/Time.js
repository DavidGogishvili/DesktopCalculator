import React, { useState } from "react";
import "./Time.css";

function Time() {
    const [second, setSecond] = useState('');
    const [minute, setMinute] = useState('');
    const [hour, setHour] = useState('');
    const [day, setDay] = useState('');
    const [week, setWeek] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [century, setCentury] = useState('');

    const updateValues = (value, unit) => {
        switch (unit) {
            case 'second':
                setSecond(value);
                setMinute(value * 0.0166667);
                setHour(value * 0.000277778);
                setDay(value * 1.15741e-5);
                setWeek(value * 1.65344e-6);
                setMonth(value * 3.80257e-7);
                setYear(value * 3.16888e-8);
                setCentury(value * 3.16888e-10);
                break;
            case 'minute':
                setSecond(value * 60);
                setMinute(value);
                setHour(value * 0.0166667);
                setDay(value * 0.000694444);
                setWeek(value * 9.92063e-5);
                setMonth(value * 2.28311e-5);
                setYear(value * 1.90259e-6);
                setCentury(value * 1.90259e-8);
                break;
            case 'hour':
                setSecond(value * 3600);
                setMinute(value * 60);
                setHour(value);
                setDay(value * 0.0416667);
                setWeek(value * 0.00595238);
                setMonth(value * 0.00136986);
                setYear(value * 0.000114155);
                setCentury(value * 1.14155e-6);
                break;
            case 'day':
                setSecond(value * 86400);
                setMinute(value * 1440);
                setHour(value * 24);
                setDay(value);
                setWeek(value * 0.142857);
                setMonth(value * 0.0328767);
                setYear(value * 0.00273973);
                setCentury(value * 2.73973e-5);
                break;
            case 'week':
                setSecond(value * 604800);
                setMinute(value * 10080);
                setHour(value * 168);
                setDay(value * 7);
                setWeek(value);
                setMonth(value * 0.229984);
                setYear(value * 0.0191781);
                setCentury(value * 0.000191781);
                break;
            case 'month':
                setSecond(value * 2.628e+6);
                setMinute(value * 43800);
                setHour(value * 730.001);
                setDay(value * 30.4167);
                setWeek(value * 4.34524);
                setMonth(value);
                setYear(value * 0.0833333);
                setCentury(value * 0.000833333);
                break;
            case 'year':
                setSecond(value * 3.1536e+7);
                setMinute(value * 525600);
                setHour(value * 8760);
                setDay(value * 365);
                setWeek(value * 52.1429);
                setMonth(value * 12);
                setYear(value);
                setCentury(value * 0.01);
                break;
            case 'century':
                setSecond(value * 3.1536e+9);
                setMinute(value * 5.256e+7);
                setHour(value * 8.76e+5);
                setDay(value * 36500);
                setWeek(value * 5214.29);
                setMonth(value * 1200);
                setYear(value * 100);
                setCentury(value);
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
        <div className="resultsTime" id="timeResult">
            <label htmlFor="timeFirstValue">
                Second
                <input
                    type="number"
                    id="timeFirstValue"
                    className="valuesTime"
                    placeholder="Sec"
                    value={second}
                    onChange={(e) => InputChange(e, 'second')}
                />
            </label>
            <label htmlFor="timeSecondValue">
                Minute
                <input
                    type="number"
                    id="timeSecondValue"
                    className="valuesTime"
                    placeholder="Min"
                    value={minute}
                    onChange={(e) => InputChange(e, 'minute')}
                />
            </label>
            <label htmlFor="timeThirdValue">
                Hour
                <input
                    type="number"
                    id="timeThirdValue"
                    className="valuesTime"
                    placeholder="Hr"
                    value={hour}
                    onChange={(e) => InputChange(e, 'hour')}
                />
            </label>
            <label htmlFor="timeFourthValue">
                Day
                <input
                    type="number"
                    id="timeFourthValue"
                    className="valuesTime"
                    placeholder="Day"
                    value={day}
                    onChange={(e) => InputChange(e, 'day')}
                />
            </label>
            <label htmlFor="timeFifthValue">
                Week
                <input
                    type="number"
                    id="timeFifthValue"
                    className="valuesTime"
                    placeholder="Week"
                    value={week}
                    onChange={(e) => InputChange(e, 'week')}
                />
            </label>
            <label htmlFor="timeSixthValue">
                Month
                <input
                    type="number"
                    id="timeSixthValue"
                    className="valuesTime"
                    placeholder="Month"
                    value={month}
                    onChange={(e) => InputChange(e, 'month')}
                />
            </label>
            <label htmlFor="timeSeventhValue">
                Year
                <input
                    type="number"
                    id="timeSeventhValue"
                    className="valuesTime"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => InputChange(e, 'year')}
                />
            </label>
            <label htmlFor="timeEighthValue">
                Century
                <input
                    type="number"
                    id="timeEighthValue"
                    className="valuesTime"
                    placeholder="Century"
                    value={century}
                    onChange={(e) => InputChange(e, 'century')}
                />
            </label>
        </div>
    );
}

export default Time;
