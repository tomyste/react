import { useRef } from "react"


export const FocusSceen = () => {

    const inputRef = useRef()

    const onClick = () => {
        inputRef.current.select();
    }

  return (
    <>
        <h1> FocusScreen </h1>
        <hr/>

        <input type="text" placeholder="Ingrese su Nombre" className="form-control" ref={inputRef}></input>

        <button className="btn btn-dark mt-2" onClick={onClick}>Set Focus</button>
    </>
  )
}
