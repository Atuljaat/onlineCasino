import React, { useState, useRef } from 'react';
import { Input } from './ui/input';
import Store from '@/store/Store';

function BettingBox() {
    const [betAmount, setBetAmount] = useState('');
    const inputRef = useRef();
    let { amount } = Store(); 

    function settingBetAmount(value) {
        const numericValue = Number(value);

        if (numericValue < 0) {
            alert("Please enter a valid amount");
            setBetAmount('');
        } else if (numericValue > amount) {
            alert("You don't have enough balance to bet");
        } else {
            setBetAmount(numericValue);
        }
    }

    return (
        <div className="flex flex-col items-center gap-4 p-4 border-2 border-gray-300 rounded-lg shadow-md bg-slate-800 ">
            <div className="text-lg font-semibold text-white">
                Balance: <span className="text-green-600">${amount}</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="font-medium text-white">Enter the amount:</span>
                <Input
                    ref={inputRef}
                    value={betAmount}
                    onChange={(e) => settingBetAmount(e.target.value)}
                    type="number"
                    min="0"
                    max={amount}
                    className="w-24 p-2 border-2 border-gray-400 rounded-md focus:border-blue-500 focus:outline-none text-white text-center"
                />
            </div>
            {betAmount !== '' && (
                <div className="text-lg font-medium text-blue-600">
                    Bet Amount: ${betAmount}
                </div>
            )}
        </div>
    );
}

export default BettingBox;
