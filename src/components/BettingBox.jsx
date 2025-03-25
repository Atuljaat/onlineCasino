import React from 'react'
import { Input } from './ui/input'
import Store from '@/store/Store'
import { useRef } from 'react';

function BettingBox() {
    const inputRef = useRef();
    let {amount} = Store();
    function checkAmount(){
        if (amount < 0){
            alert("You don't have enough balance to bet");
        }  
    }
  return (
    <div className='flex items-center'>
        <span> Enter the amount : </span>
        <Input ref={inputRef} type="number" className="text-black " />
        
    </div>
  )
}

export default BettingBox