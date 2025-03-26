import React, { useRef } from 'react';
import { Input } from './ui/input';
import Store from '@/store/Store';

function BettingBox() {
    const inputRef = useRef();
    let { amount, bettingAmount, changeBettingAmount } = Store();

    function settingBetAmount(value) {
        const numericValue = Number(value);

        if (isNaN(numericValue) || numericValue < 0) {
            // Reset the input and show a warning
            changeBettingAmount('');
            inputRef.current.value = '';
            console.warn("Please enter a valid positive amount.");
        } else if (numericValue > amount) {
            // Reset the input and show a warning
            changeBettingAmount('');
            inputRef.current.value = '';
            console.warn("You don't have enough balance to bet.");
        } else {
            // Set the valid betting amount
            changeBettingAmount(numericValue);
        }
    }

    return (
        <div className="flex flex-col items-center gap-4 p-4 border-2 border-gray-300 rounded-lg shadow-md bg-slate-800">
            <div className="text-lg font-semibold text-white">
                Balance: <span className="text-green-600">₹{amount}</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="font-medium text-white">Enter the amount:</span>
                <Input
                    ref={inputRef}
                    value={bettingAmount}
                    onChange={(e) => settingBetAmount(e.target.value)}
                    type="number"
                    className="w-24 p-2 border-2 border-gray-400 rounded-md focus:border-blue-500 focus:outline-none text-white text-center"
                />
            </div>
            {bettingAmount !== '' && bettingAmount > 0 && (
                <div className="text-lg font-medium text-blue-600">
                    Bet Amount: ₹{bettingAmount}
                </div>
            )}
        </div>
    );
}

export default BettingBox;
