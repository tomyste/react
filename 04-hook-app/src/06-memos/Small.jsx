import { memo } from "react"

//El memo permite que solo se pinte de nuevo el componente cuando cambian las properties, en este caso es el value.

export const Small = memo(({value}) => {

    console.log("Me estoy pintando de nuevo")
    
  return (
    <small> {value} </small>
  )
})
