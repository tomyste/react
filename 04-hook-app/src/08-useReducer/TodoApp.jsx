import { useEffect, useReducer } from "react"
import { useTodo } from "../hooks/useTodo.jsx";
import { TodoAdd } from "./TodoAdd.jsx";
import { TodoList } from "./TodoList.jsx";
import { todoReducer } from './todoReducer.js'
 

export const TodoApp = () => {

    const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, todoCount, pendingTodoCounts } = useTodo()



    return (
        <>
            <h1>TodoApp: { todoCount } <small> Pendientes: { pendingTodoCounts } </small></h1>
            <hr/>

            <div className="row">
                <div className="col-6">
                     <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={ handleToggleTodo }></TodoList> 
                </div>

                <div className="col-6">
                    <h4> Agregar TODO </h4>
                    <hr/>
                    <TodoAdd onNewTodo={ handleNewTodo }></TodoAdd>
                </div>

            </div>


        </>
  )
}
