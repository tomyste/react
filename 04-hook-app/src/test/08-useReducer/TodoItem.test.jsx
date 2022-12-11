import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";

describe('Pruebas en TodoItem', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() )

    test('Debe de mostrar el TODO pendiente de completar', () => {

        render(<TodoItem todo={ todo }
        onDeleteTodo={ onDeleteTodoMock }
        onToggleTodo={ onToggleTodoMock }>

        </TodoItem>);


        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className).toContain('align-self-center')
    })

    test('Debe de mostrar el TODO completado', () => {

        todo.done= true;

        render(<TodoItem todo={ todo }
         onDeleteTodo={ onDeleteTodoMock }
         onToggleTodo={ onToggleTodoMock }>
         </TodoItem>);

    
        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className).toContain('text-decoration-line-through')
        
    })

    test('Debe de llamar al toggleTodo', () => { 

        render(<TodoItem todo={ todo }
            onDeleteTodo={ onDeleteTodoMock }
            onToggleTodo={ onToggleTodoMock }>
            </TodoItem>);
        
        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement )

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );

     })

     test('Debe de llamar el deleteTodo', () => { 

        render(<TodoItem todo={ todo }
            onDeleteTodo={ onDeleteTodoMock }
            onToggleTodo={ onToggleTodoMock }>
            </TodoItem>);
        
        const buttonElement = screen.getByRole('button');
        fireEvent.click( buttonElement )

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

     })
});
