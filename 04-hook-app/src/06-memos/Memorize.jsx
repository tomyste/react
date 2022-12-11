import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {

    const [show, setShow] = useState(true);

    const {counter, increment} = useCounter(0);

  return (
    <>
        <h1>
            Counter: <Small value={counter}></Small>
        </h1>
        <hr/>
        <button className='btn btn-dark' onClick={ ()=>increment() }> +1</button>

        <button className='btn btn-danger' onClick={()=> setShow(!show)}> Show/Hide {JSON.stringify(show)}</button>

    </>
  )
}
