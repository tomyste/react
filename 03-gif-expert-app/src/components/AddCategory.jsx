import  PropTypes  from "prop-types";
import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    const onSubmit = (event) =>{
      
        // el metodo event.prevent default permite que no se refresque la pagina cada vez que le damos enter al input
        event.preventDefault();

        // Evalua si existe algo en la caja de texto, de lo contrario no hace nada
        if(inputValue.trim().length <= 1) return ;

        // El trim() se encarga de cortar los espacios en blancos adelante y atras del texto
        onNewCategory(inputValue.trim())

        // Resetea el value de la caja de texto
        setInputValue('')
    }

  return (
    <form onSubmit={ onSubmit } aria-label='form'>
        <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
        >
        </input>
    </form>
    
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}