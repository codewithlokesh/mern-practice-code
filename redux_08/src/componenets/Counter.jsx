import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament, increamentByAmount } from '../redux/counterSlice'

const Counter = () => {
    const [amount, setAmount] = useState("")

    const dispatch = useDispatch()
    const count = useSelector((state)=> state.counter.value)
    // console.log(count);

    const handleAddAmount = ()=>{
        dispatch(increamentByAmount(Number(amount)))
        setAmount("")
    }
    return (
        <div>
            <h2>Click the buttons and see results.</h2>
                <button onClick={()=>dispatch(decreament())}>-</button>
                {count}
                <button onClick={()=>dispatch(increament())}>+</button>
                <br />
                <div>
                    <input 
                    type="number" 
                    value={amount}
                    placeholder='Enter amount'
                    onChange={(e)=>setAmount(e.target.value)}
                    />
                    <button onClick={handleAddAmount}>add</button>
                </div>
           
        </div>
    )
}

export default Counter
