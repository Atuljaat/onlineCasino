import React from 'react'
import Store from '@/store/Store'
import BettingBox from '@/components/BettingBox'
import {Button} from '@/components/ui/button'
import { useState } from 'react'

function CoinFlip() {
    const {amount , multiply} = Store();
    const [ishead , setishead] = useState(false);
    const [isTail , setisTail] = useState(false);
    const [result , setResult] = useState('');
    const [betAmount , setBetAmount] = useState('');

    function selectTail () {
      if (ishead) {
        alert('You can only select one side');
      } else {
        setisTail((prev) => !prev)
      }
    };

    function selectHead () {
      if (isTail) {
        alert('You can only select one side');
      } else {
        setishead((prev) => !prev)
      }
    };

    function placeBet() {
      if (ishead || isTail) {
        const random = Math.random() < 0.5 ? 'head' : 'tail';
        setResult(random);
        if ((random === 'head' && ishead) || (random === 'tail' && isTail)) {
          multiply(2);
        } else {
          multiply(0);
        }
      } else {
        alert('Please select a side to place bet');
      }
    }

  return (
    <div className='bg-gray-500 ' >
        <div className=' text-center py-12 flex justify-center  items-center' >
          <div className='border flex justify-center items-center rounded-full border-gray-300 w-56 h-56 bg-gray-800 text-white ' >
          <div className='border flex justify-center items-center rounded-full border-gray-300 w-52 h-52 bg-gray-700 text-white ' >
             <div>
                <h1 className='text-3xl font-bold'>Coin Flip</h1>
                <h2 className='text-xl font-semibold'>Win upto 2x</h2>
             </div>
          </div>
          </div>
        </div>
        <div className='my-2 flex justify-center'>
           <BettingBox /> 
           <div className='flex mx-10 gap-5'>
           <button onClick={selectTail} > 
              <div className={`w-40 h-40 ${isTail ? `bg-green-800 ` : `bg-red-600`} rounded-full  flex justify-center items-center`}>
                 <div className='text-white font-semibold text-2xl'>
                  TAIL
                 </div>
              </div>
            </button>
            <button onClick={selectHead} > 
              <div className={`w-40 h-40 ${ishead ? `bg-green-800 ` : `bg-red-600`} rounded-full  flex justify-center items-center`}>
                 <div className='text-white font-semibold text-2xl'>
                  HEAD
                 </div>
              </div>
            </button>
           </div>
        </div>
           <div className='flex justify-center mt-10 pb-5'>
              <Button onClick={placeBet} className='p-10 rounded-b-lg bg-green-900 text-4xl'>
                Place Bet
              </Button>
           </div>
    </div>
  )
}

export default CoinFlip