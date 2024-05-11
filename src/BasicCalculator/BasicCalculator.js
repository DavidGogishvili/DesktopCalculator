import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Basic.css';

function BasicCalculator({ setResult }) {
    const buttonsArray = [
        "C", "ᐊ", "*", "÷", "7", "8", "9", "+", "-", "4", "5", "6", "%",
        "+/-", "1", "2", "3", "x²", "√", "0", ".", "=", "π"
    ];

    const buttonsArrayWithId = buttonsArray.map(button => ({
        button: button,
        id: uuidv4()
    }));

    const [expression, setExpression] = useState('');

    const calculateResult = (exp) => {
        try {
            return eval(exp.replace(/π/g, Math.PI)).toString();
        } catch (error) {
            return '';
        }
    };

    const ButtonClick = (buttonText) => {
        if (buttonText === 'C') {
            setExpression('');
        } else if (buttonText === 'ᐊ') {
            setExpression(prevExp => prevExp.slice(0, -1));
        } else if (buttonText === '=') {
            setExpression(calculateResult(expression));
        }  else if (buttonText === '%') {
            setExpression(prevExp => (parseFloat(prevExp) / 100).toString());
        } else if (buttonText === 'x²') {
            setExpression(prevExp => Math.pow(parseFloat(prevExp), 2).toString());
        } else if (buttonText === '+/-') {
            setExpression(prevExp => (-(parseFloat(prevExp))).toString());
        } else if (buttonText === '√') {
            setExpression(prevExp => Math.sqrt(parseFloat(prevExp)).toString());
        } else if (buttonText === 'π') {
            setExpression(prevExp => prevExp + 'π');
        } else {
            setExpression(prevExp => prevExp + buttonText);
        }
    };

    const ButtonClickEvent = (event) => {
        const buttonText = event.target.textContent;
        ButtonClick(buttonText);
    };

    const KeyDown = (event) => {
        const key = event.key;
        if (!isNaN(key) || ['+', '-', '*', '/', '.', 'Backspace', 'Delete'].includes(key)) {
            if (key !== 'Backspace' && key !== 'Delete') {
                setExpression(prevExp => prevExp + key);
            } else if (key === 'Backspace') {
                setExpression(prevExp => prevExp.slice(0, -1));
            } else if (key === 'Delete') {
                setExpression('');
            }
        } else if (key === '=' || key === 'Enter') {
            ButtonClick('=');
        }
        event.preventDefault();
    };


    useEffect(() => {
        const KeyPress = (event) => {
            KeyDown(event);
        };

        document.addEventListener('keydown', KeyPress);

        return () => {
            document.removeEventListener('keydown', KeyPress);
        };
    }, [expression, KeyDown]);

    return (
        <div>
            <div className="calculator">
                <label htmlFor="result">
                    <input type="text" id="result" value={expression} readOnly/>
                </label>

                <div className={"keypad"}>
                    {buttonsArrayWithId.map(button => (
                        <button key={button.id} onClick={ButtonClickEvent}
                                id={button.button === "C" ? "clear" : button.button === "=" ? "equal" : null}>
                            {button.button}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default BasicCalculator;

