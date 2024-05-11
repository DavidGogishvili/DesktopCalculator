// import React, {useEffect, useState} from 'react';
// import "./ConversionMain.css";
// import thermometerIcon from "../icons/thermometer.png";
// import speedometerIcon from "../icons/speedometer.png";
// import lengthIcon from "../icons/length.png";
// import volumeIcon from "../icons/volume.png";
// import massIcon from "../icons/mass.png";
// import timeIcon from "../icons/time.png";
// import areaIcon from "../icons/area.png";
// import energyIcon from "../icons/energy.png";
// import pressureIcon from "../icons/pressure.png";
// import { v4 as uuidv4 } from 'uuid';
// import Temperature from '../ConversionCalculator/Temperature/Temperature';
// import DefaultScreen from "../ConversionCalculator/DefaultScreen/DefaultScreen";
// import Speed from "./Speed/Speed";
// import Length from "./Length/Length";
// import Area from "./Area/Area";
// import Mass from "./Mass/Mass";
// import Energy from "./Energy/Energy";
// import Volume from "./Volume/Volume";
// import Pressure from "./Pressure/Pressure";
// import Time from "./Time/Time";
//
// function ConversionMain() {
//     const [selectedConversion, setSelectedConversion] = useState(null);
//
//     const buttonArray = [
//         { name: "temperature", icon: thermometerIcon },
//         { name: "speed", icon: speedometerIcon },
//         { name: "length", icon: lengthIcon },
//         { name: "volume", icon: volumeIcon },
//         { name: "mass", icon: massIcon },
//         { name: "time", icon: timeIcon },
//         { name: "area", icon: areaIcon },
//         { name: "energy", icon: energyIcon },
//         { name: "pressure", icon: pressureIcon },
//     ];
//     const clearInputs = () => {
//         const Components = document.querySelectorAll('.resultsTemp, .resultsSpeed, .resultsLength, .ResultsArea, .resultsMass, .resultsEnergy, .resultsVolume, .resultsPressure, .resultsTime');
//         Components.forEach(component => {
//             const inputs = component.querySelectorAll('.values');
//             inputs.forEach(input => (input.value = ''));
//         });
//     };
//
//     const KeyDown = (event) => {
//         if (event.keyCode === 46) {
//             clearInputs();
//         }
//     };
//
//
//     useEffect(() => {
//         window.addEventListener('keydown', KeyDown);
//         return () => {
//             window.removeEventListener('keydown', KeyDown);
//         };
//     }, [KeyDown]);
//
//     const ConversionButtonClick = (conversionName) => {
//         switch (conversionName) {
//             case 'temperature':
//                 setSelectedConversion(<Temperature/>);
//                 break;
//             case 'speed':
//                 setSelectedConversion(<Speed/>);
//                 break;
//             case "length":
//                 setSelectedConversion(<Length/>);
//                 break;
//             case "area":
//                 setSelectedConversion(<Area/>);
//                 break;
//             case "mass":
//                 setSelectedConversion(<Mass/>);
//                 break;
//             case "energy":
//                 setSelectedConversion(<Energy/>);
//                 break;
//             case "volume":
//                 setSelectedConversion(<Volume/>);
//                 break;
//             case 'pressure':
//                 setSelectedConversion(<Pressure/>);
//                 break;
//             case 'time':
//                 setSelectedConversion(<Time/>)
//                 break;
//             default:
//                 setSelectedConversion(null);
//         }
//     };
//
//     return (
//         <div>
//             <div className="calculator">
//                 {selectedConversion ? selectedConversion : <DefaultScreen />}
//                 <div className="keypadConversion">
//                     {buttonArray.map(button => (
//                         <div key={uuidv4()} onClick={() => ConversionButtonClick(button.name)}>
//                             <button className="button">
//                                 <abbr title={button.name}>
//                                     <img src={button.icon} alt="icon"/>
//                                 </abbr>
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//                 <button id="clearConversion" className="button" onClick={() => {clearInputs(); }}>
//                     C
//                 </button>
//             </div>
//         </div>
//     )
// }
//
// export default ConversionMain;



import React, { useEffect, useState } from 'react';
import "./ConversionMain.css";
import thermometerIcon from "../icons/thermometer.png";
import speedometerIcon from "../icons/speedometer.png";
import lengthIcon from "../icons/length.png";
import volumeIcon from "../icons/volume.png";
import massIcon from "../icons/mass.png";
import timeIcon from "../icons/time.png";
import areaIcon from "../icons/area.png";
import energyIcon from "../icons/energy.png";
import pressureIcon from "../icons/pressure.png";
import { v4 as uuidv4 } from 'uuid';
import Temperature from '../ConversionCalculator/Temperature/Temperature';
import DefaultScreen from "../ConversionCalculator/DefaultScreen/DefaultScreen";
import Speed from "./Speed/Speed";
import Length from "./Length/Length";
import Area from "./Area/Area";
import Mass from "./Mass/Mass";
import Energy from "./Energy/Energy";
import Volume from "./Volume/Volume";
import Pressure from "./Pressure/Pressure";
import Time from "./Time/Time";

function ConversionMain() {
    const [selectedConversion, setSelectedConversion] = useState(null);

    const buttonArray = [
        { name: "temperature", icon: thermometerIcon },
        { name: "speed", icon: speedometerIcon },
        { name: "length", icon: lengthIcon },
        { name: "volume", icon: volumeIcon },
        { name: "mass", icon: massIcon },
        { name: "time", icon: timeIcon },
        { name: "area", icon: areaIcon },
        { name: "energy", icon: energyIcon },
        { name: "pressure", icon: pressureIcon },
    ];

    const clearInputs = () => {
        const inputs = document.querySelectorAll('.valuesArea, .valuesEnergy, .valuesLength, .valuesMass, .valuesPressure, .values, .valuesTime, .valuesVolume');
        inputs.forEach(input => (input.value = ''));
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 46) {
            clearInputs();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const ConversionButtonClick = (conversionName) => {
        switch (conversionName) {
            case 'temperature':
                setSelectedConversion(<Temperature />);
                break;
            case 'speed':
                setSelectedConversion(<Speed />);
                break;
            case "length":
                setSelectedConversion(<Length />);
                break;
            case "area":
                setSelectedConversion(<Area />);
                break;
            case "mass":
                setSelectedConversion(<Mass />);
                break;
            case "energy":
                setSelectedConversion(<Energy />);
                break;
            case "volume":
                setSelectedConversion(<Volume />);
                break;
            case 'pressure':
                setSelectedConversion(<Pressure />);
                break;
            case 'time':
                setSelectedConversion(<Time />);
                break;
            default:
                setSelectedConversion(null);
        }
    };

    return (
        <div>
            <div className="calculator">
                {selectedConversion || <DefaultScreen />}
                <div className="keypadConversion">
                    {buttonArray.map(button => (
                        <div key={uuidv4()} onClick={() => ConversionButtonClick(button.name)}>
                            <button className="button">
                                <abbr title={button.name}>
                                    <img src={button.icon} alt="icon" />
                                </abbr>
                            </button>
                        </div>
                    ))}
                </div>
                <button id="clearConversion" className="button" onClick={clearInputs}>
                    C
                </button>
            </div>
        </div>
    )
}

export default ConversionMain;
