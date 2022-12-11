import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

const heavyStuff = (iteration) => {
    
    for(let i= 0; i < iteration; i++){
        console.log("Iterando")
    }

    return `${iteration} iteraciones completadas`

}

export const MemoHook = () => {

    const [show, setShow] = useState(true);
    const {counter, increment} = useCounter(1000);

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
        <h1>
            Counter: <small>{ counter }</small>
        </h1>

        <h4> { memorizeValue } </h4>
        <hr/>
        <button className='btn btn-dark' onClick={ ()=>increment() }> +1</button>

        <button className='btn btn-danger' onClick={()=> setShow(!show)}> Show/Hide {JSON.stringify(show)}</button>

    </>
  )
}
