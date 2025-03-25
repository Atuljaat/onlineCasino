import React from 'react'
import Store from '@/store/Store'
import BettingBox from '@/components/BettingBox'

function CoinFlip() {
    const {amount , multiply} = Store();
  return (
    <div className='min-h-screen bg-gray-500 ' >
        <div className='text-7xl text-center py-12' >COIN</div>
        <div className='my-10 flex justify-center'>
           <BettingBox />
        </div>
    </div>
  )
}

export default CoinFlip