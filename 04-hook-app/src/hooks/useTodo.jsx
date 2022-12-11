import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
    return (JSON.parse(localStorage.getItem('todos')) || [])
}

export const useTodo = () => {
  
    const [todos, dispatch] = useReducer( todoReducer, [], init );
    
    useEffect(() => {
         localStorage.setItem('todos', JSON.stringify( todos ) );
     }, [todos]);
    


    const handleNewTodo = ( todo ) =>{
        const action  =  {
            type: '[TODO] add Todo',
            payload: todo
        }
        
        dispatch(action);
    }

    const handleDeleteTodo = ( id ) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id,
        };

        dispatch(action);
    }

    const handleToggleTodo = ( id ) =>{
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        };

        dispatch(action);
    }

    const todoCount = () =>{
        return todos.length;
    }

    const pendingTodoCounts = () =>{
        return (todos.filter(todo => !todo.done)).length;
    }
  

    return {
        todos,
        handleNewTodo,
        handleToggleTodo,
        handleDeleteTodo,
        todoCount,
        pendingTodoCounts
    }
}
