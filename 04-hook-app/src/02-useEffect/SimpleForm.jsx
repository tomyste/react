import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
      username: 'strider',
      email: 'tomas@hotmail.com'
    });

    const {username, email} = formState

    const onInputChange = ({ target }) => {
      const {name, value} = target;
      setFormState({
        ...formState,
        [ name ]: value
      })
    }

    useEffect(() => {
      //console.log("useEffect are called")
      // return () => {
      //   cleanup
      // };
    }, []);

    useEffect(() => {
      // console.log("FormState changed!")
      // return () => {
      //   cleanup
      // };
    }, [formState]);

    useEffect(() => {
      // console.log("Email change")
      // return () => {
      //   cleanup
      // };
    }, [email]);



    useEffect(() => {
      // console.log("useEffect are called")
      // return () => {
      //   cleanup
      // };
    }, []);


    

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr></hr>

        <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={ onInputChange } />

        <input type="email" className="form-control mt-2" placeholder="tomas@hotmail.com" name="email" value={email} onChange={ onInputChange }/>

        {
          username === 'strider2' && <Message/>
        }
          

        
    </>
  )
}
