import React, { useState } from 'react';
import Store from '@/store/Store';
import BettingBox from '@/components/BettingBox';
import { Button } from '@/components/ui/button';

function CoinFlip() {
    const { amount, multiply, bettingAmount } = Store();
    const [ishead, setishead] = useState(false);
    const [isTail, setisTail] = useState(false);
    const [result, setResult] = useState('');
    const [isFlipping, setIsFlipping] = useState(false); // State for animation

    function selectTail() {
        if (ishead) {
            alert('You can only select one side');
        } else {
            setisTail((prev) => !prev);
        }
    }

    function selectHead() {
        if (isTail) {
            alert('You can only select one side');
        } else {
            setishead((prev) => !prev);
        }
    }

    function placeBet() {
        if ((ishead || isTail) && bettingAmount > 0) {
            setIsFlipping(true); // Start the flipping animation
            setTimeout(() => {
                const random = Math.random() < 0.5 ? 'head' : 'tail';
                setResult(random);
                setIsFlipping(false); // Stop the flipping animation
                if ((random === 'head' && ishead) || (random === 'tail' && isTail)) {
                    multiply(bettingAmount, 2);
                } else {
                    multiply(bettingAmount, 0);
                }
            }, 1000); // Animation duration (2 seconds)
        } else {
            alert('Please select a side to place bet or enter a valid amount');
        }
    }

    return (
        <div className="bg-gray-500 min-h-screen flex flex-col items-center">
            <div className="text-center py-12 flex justify-center items-center">
                <div
                    className={`border flex justify-center items-center rounded-full border-gray-300 w-40 h-40 sm:w-56 sm:h-56 bg-gray-800 text-white ${
                        isFlipping ? 'flipping' : ''
                    }`}
                    style={{
                        transform: isFlipping ? 'rotateY(360deg)' : 'rotateY(0deg)',
                        transition: 'transform 2s ease-in-out',
                    }}
                >
                    <div className="border flex justify-center items-center rounded-full border-gray-300 w-36 h-36 sm:w-52 sm:h-52 bg-gray-700 text-white">
                        <div>
                            <h1 className="text-xl sm:text-3xl font-bold">Coin Flip</h1>
                            <h2 className="text-lg sm:text-xl font-semibold">Win upto 2x</h2>
                            {result && (
                                <div className="mt-4 text-sm sm:text-lg font-bold">
                                    Result: {result.toUpperCase()}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-2 flex flex-col sm:flex-row justify-center items-center">
                <BettingBox />
                <div className="flex  mx-0 sm:mx-10 gap-5 mt-5 sm:mt-0">
                    <button onClick={selectTail}>
                        <div
                            className={`w-32 h-32 sm:w-40 sm:h-40 ${
                                isTail ? `bg-green-800` : `bg-red-600`
                            } rounded-full flex justify-center items-center`}
                        >
                            <div className="text-white font-semibold text-lg sm:text-2xl">TAIL</div>
                        </div>
                    </button>
                    <button onClick={selectHead}>
                        <div
                            className={`w-32 h-32 sm:w-40 sm:h-40 ${
                                ishead ? `bg-green-800` : `bg-red-600`
                            } rounded-full flex justify-center items-center`}
                        >
                            <div className="text-white font-semibold text-lg sm:text-2xl">HEAD</div>
                        </div>
                    </button>
                </div>
            </div>
            <div className="flex justify-center mt-10 pb-5">
                <Button
                    onClick={placeBet}
                    className="px-6 py-3 sm:p-10 rounded-lg bg-green-900 text-lg sm:text-4xl"
                >
                    Place Bet
                </Button>
            </div>
        </div>
    );
}

export default CoinFlip;