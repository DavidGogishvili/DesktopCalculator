import React, { useState } from 'react';
import './App.css';
import HeaderComponent from "./Header/HeaderComponent";

function App() {
    const [result, setResult] = useState('0');

    return (
        <div className="App">
            <header>
                <HeaderComponent setResult={setResult} />
            </header>
            <main>
                {/* Other main content */}
            </main>
        </div>
    );
}

export default App;
