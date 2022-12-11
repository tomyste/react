import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../08-useReducer/TodoApp";
import { useTodo } from "../../hooks/useTodo";

jest.mock("../../hooks/useTodo")


describe('Pruebas en TodoApp', () => { 

    useTodo.mockReturnValue({
        todos: [
            {id: 1 , description: 'todo1', done: false},
            {id: 2 , description: 'todo2', done: true},
        ],
        todoCount: 2,
        pendingTodoCounts: 1,
        handleDeleteTodo: jest.fn(),
        handleAddTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    })

    test('Debe de Mostrar el componente correctamente', () => { 
        render(<TodoApp></TodoApp>);

        expect( screen.getByText('todo1')).toBeTruthy();
        expect( screen.getByText('todo2')).toBeTruthy();
        expect( screen.getByRole('textbox')).toBeTruthy();

    })
 })