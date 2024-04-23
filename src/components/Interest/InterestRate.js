// src/components/Interest/InterestCalculator.js
//modified file
import React, { useState } from 'react';
import './IntrestRate.css'; // Import CSS file
import useDarkMode from '../../hooks/useDarkMode'; // Adding our Custom hooks
const IntrestRate = () => {
    const [principal, setPrincipal] = useState('');
    const [duration, setDuration] = useState('');
    const [name, setName] = useState('');
    const [result, setResult] = useState(null);
    const [isDarkMode, toggleDarkMode] = useDarkMode();// state for toggling the mode

    const handleSubmit = (event) => {
        event.preventDefault();

        // Calculate interest
        const interest = (parseFloat(principal) * 5 * parseFloat(duration)) / 100; // Assuming interest rate is 5%
        const totalAmount = parseFloat(principal) + interest;
        const interestRate = (interest / parseFloat(principal)) * 100;

        // Set result and hide form
        setResult({ interestRate: interestRate.toFixed(2), totalAmount: totalAmount.toFixed(2) });
    };

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>//use class to set the css
        <div className="interest-calculator">
            {result ? (
                <div className="result">
                    <h3>Result for {name}:</h3>
                    <p>Interest Rate: {result.interestRate}%</p>
                    <p>Total Amount after Maturity: ${result.totalAmount}</p>
                </div>
            ) : (
                <form className="input-form" onSubmit={handleSubmit}>
                    <label htmlFor="principal">Principal Amount:</label>
                    <input type="number" id="principal" value={principal} onChange={(e) => setPrincipal(e.target.value)} required /><br /><br />

                    <label htmlFor="duration">Duration (in years):</label>
                    <input type="number" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} required /><br /><br />

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />

                    <button type="submit">Calculate</button>
                </form>
                
            )}
            <button onClick={toggleDarkMode}>// Button to toggle between theme.
                Toggle Dark Mode
            </button>
        </div>
        </div>
    );
};

export default IntrestRate;