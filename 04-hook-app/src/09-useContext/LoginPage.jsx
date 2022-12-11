import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  const {user, setUser } = useContext(UserContext);

  return (
    <>
        <h1>LoginPage</h1>
        <button className="btn btn-primary" onClick={() => setUser({id:10, name:"Tomas", email: "tomaco@gmail.com"}) }>
          Establecer usuario
        </button>
    </>
  )
}
