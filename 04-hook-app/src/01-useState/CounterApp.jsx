import { useState } from "react"


export const CounterApp = () => {

    const [state, setCounter] = useState({
      counter1: 10,
      counter2: 20,
      counter3: 30,
    });

    const { counter1, counter2, counter3 } = state

    
   
  return (
    <>
        <div className="row">
          <div className="col">
            <h2> Counter1: {counter1}</h2>
          </div>
      
        <div className="col">
          <button className="btn btn-dark btn-lg me-4" onClick={
            () => setCounter({
              ...state,
              counter1: counter1 +1,
            })
          } > +1 </button>
          <button className="btn btn-dark btn-lg" onClick={
            () => setCounter({
              ...state,
              counter1: counter1 - 1
            })
          }> - 1 </button>
        </div>
      
      </div>


      <h2> Counter2: {counter2}</h2>
      <h2> Counter3: {counter3}</h2>

    </>
  )
}
