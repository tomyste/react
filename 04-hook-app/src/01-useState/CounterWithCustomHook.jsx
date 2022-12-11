import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset} = useCounter(11)

  return (
    <>
        <div className="row">
            <div className="col">
                <h1>Counter With hook: { counter } </h1>
            </div>
            <div className="col">
                <button className="btn btn-dark" onClick={() => increment( 2 )}> +1 </button>
                <button className="btn btn-dark" onClick={reset}> Reset </button>
                <button className="btn btn-dark" onClick={() => decrement( 2 )}> -1 </button>
            </div>
        </div>  
                
    </>
  )
}
