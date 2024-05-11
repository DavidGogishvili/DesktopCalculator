import React, { useState } from "react";
import "./Speed.css";

function Speed() {
    const [mph, setMph] = useState('');
    const [kph, setKph] = useState('');
    const [mps, setMps] = useState('');
    const [fps, setFps] = useState('');

    const updateValues = (value, unit) => {
        switch (unit) {
            case 'mph':
                setMph(value);
                setKph(value * 1.60934);
                setMps(value / 3600);
                setFps(value * 1.46667);
                break;
            case 'kph':
                setMph(value / 1.60934);
                setKph(value);
                setMps(value * 0.277778);
                setFps(value * 0.911344);
                break;
            case 'mps':
                setMph(value * 3600);
                setKph(value * 3.6);
                setMps(value);
                setFps(value * 3.28084);
                break;
            case 'fps':
                setMph(value * 0.681818);
                setKph(value * 1.09728);
                setMps(value * 0.3048);
                setFps(value);
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
        <div className="resultsSpeed" id="speedResult">
            <label htmlFor="speedFirstValue">
                Mile Per Hour
                <input
                    type="number"
                    id="speedFirstValue"
                    className="values"
                    value={mph}
                    onChange={(e) => InputChange(e, 'mph')}
                    placeholder="Mph"
                />
            </label>
            <label htmlFor="speedSecondValue">
                Kilometre Per Hour
                <input
                    type="number"
                    id="speedSecondValue"
                    className="values"
                    value={kph}
                    onChange={(e) => InputChange(e, 'kph')}
                    placeholder="Kph"
                />
            </label>
            <label htmlFor="speedThirdValue">
                Mile Per Second
                <input
                    type="number"
                    id="speedThirdValue"
                    className="values"
                    value={mps}
                    onChange={(e) => InputChange(e, 'mps')}
                    placeholder="Mps"
                />
            </label>
            <label htmlFor="speedForthValue">
                Foot Per Second
                <input
                    type="number"
                    id="speedForthValue"
                    className="values"
                    value={fps}
                    onChange={(e) => InputChange(e, 'fps')}
                    placeholder="Fps"
                />
            </label>
        </div>
    );
}

export default Speed;
