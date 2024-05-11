import React, {useState} from "react";
import "./Length.css"
function Length () {
    const [mile, setmile] = useState('');
    const [km, setkm] = useState('');
    const [metre, setmetre] = useState('');
    const [cm, setcm] = useState('');
    const [mm, setmm] = useState('');
    const [yard , setyard] = useState('');
    const [foot , setfoot] = useState('');
    const [inch , setinch] = useState('');


    const updateValues = (value, unit) => {
        switch (unit) {
            case 'mile':
                setmile(value);
                setkm(value * 1.60934);
                setmetre(value * 160934);
                setcm(value* 16093400);
                setmm(value * 1.60934e+6);
                setyard(value * 1760);
                setfoot(value * 5280);
                setinch(value * 63360);
                break;
            case 'km':
                setmile(value / 1.60934);
                setkm(value);
                setmetre(value * 1000);
                setcm(value * 100000);
                setmm(value * 1e+6);
                setyard(value * 1094);
                setfoot(value * 3281);
                setinch(value * 39370);
                break;
            case 'metre':
                setmile(value / 160934);
                setkm(value / 1000);
                setmetre(value);
                setcm(value * 100);
                setmm(value * 1000);
                setyard(value * 1.094);
                setfoot(value * 3.281);
                setinch(value * 39.37);
                break;
            case 'cm':
                setmile(value / 160900);
                setkm(value / 100000);
                setmetre(value / 100);
                setcm(value);
                setmm(value * 10);
                setyard(value / 91.44);
                setfoot(value / 30.48);
                setinch(value / 2.54);
                break;
            case 'mm':
                setmile(value / 1.609e+6);
                setkm(value / 1e+6);
                setmetre(value / 1000);
                setcm(value / 10);
                setmm(value);
                setyard(value / 914.4);
                setfoot(value / 304.8);
                setinch(value / 25.4);
                break;
            case 'yard':
                setmile(value / 1760);
                setkm(value / 1094);
                setmetre(value / 1.094);
                setcm(value * 91.44);
                setmm(value * 914.4);
                setyard(value);
                setfoot(value * 3);
                setinch(value * 36);
                break;
            case 'foot':
                setmile(value / 5280);
                setkm(value / 3281);
                setmetre(value / 3.281);
                setcm(value * 30.88);
                setmm(value * 304.8);
                setyard(value / 3);
                setfoot(value);
                setinch(value * 12);
                break;
            case 'inch':
                setmile(value / 63360);
                setkm(value / 39370);
                setmetre(value / 39.37);
                setcm(value * 2.54);
                setmm(value * 25.4);
                setyard(value / 36);
                setfoot(value / 12);
                setinch(value);
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
        <div className="resultsLength" id="lengthResult">

            <label htmlFor="lengthFirstValue">
                Mile
                <input
                    type="number"
                    placeholder="Mile"
                    id="lengthFirstValue"
                    className="valuesLength"
                    value={mile}
                    onChange={(e) => InputChange(e, 'mile')}
                />
            </label>

            <label htmlFor="lengthSecondValue">
                Kilometre
                <input
                    type="number"
                    placeholder="Km"
                    id="lengthSecondValue"
                    className="valuesLength"
                    value={km}
                    onChange={(e) => InputChange(e, 'km')}
                />
            </label>

            <label htmlFor="lengthThirdValue">
                Meter
                <input
                    type="number"
                    placeholder="Meter"
                    id="lengthThirdValue"
                    className="valuesLength"
                    value={metre}
                    onChange={(e) => InputChange(e, 'metre')}

                />
            </label>

            <label htmlFor="lengthForthValue">
                Centimetre
                <input
                    type="number"
                    placeholder="Cm"
                    id="lengthFifthValue"
                    className="valuesLength"
                    value={cm}
                    onChange={(e) => InputChange(e, 'cm')}

                />
            </label>

            <label htmlFor="lengthFifthValue">
                Millimetre
                <input
                    type="number"
                    placeholder="Mm"
                    id="lengthSixthValue"
                    className="valuesLength"
                    value={mm}
                    onChange={(e) => InputChange(e, 'mm')}

                />
            </label>

            <label htmlFor="lengthSixthValue">
                Yard
                <input
                    type="number"
                    placeholder="Yard"
                    id="lengthEightsValue"
                    className="valuesLength"
                    value={yard}
                    onChange={(e) => InputChange(e, 'yard')}

                />
            </label>

            <label htmlFor="lengthSeventhValue">
                Foot
                <input
                    type="number"
                    placeholder="Foot"
                    id="lengthNinthValue"
                    className="valuesLength"
                    value={foot}
                    onChange={(e) => InputChange(e, 'foot')}

                />
            </label>

            <label htmlFor="lengthEightsValue">
                Inch
                <input type="number"
                       placeholder="Inch"
                       id="lengthTenthValue"
                       className="valuesLength"
                       value={inch}
                       onChange={(e) => InputChange(e, 'inch')}

                />
            </label>
        </div>

    )
}

export default Length;