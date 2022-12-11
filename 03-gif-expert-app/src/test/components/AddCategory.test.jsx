import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en AddCategory', () => { 

    test('debe cambiar el valor de la caja de texto ', () => { 

        render(<AddCategory onNewCategory={ () => {} }></AddCategory>)
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, {target:  { value: 'Dragon Ball'}} )

        expect( input.value ).toBe( 'Dragon Ball')

     })

     test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Dragon Ball';
        const onNewCategory =  jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }></AddCategory>);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue}});
        fireEvent.submit( form );
        
        expect( input.value ).toBe('')

        // Evaluaciones de la funcion

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
        
      })

      test('No debe de llamar el onNewCategory si el input esta vacio', () => { 

        
        const onNewCategory =  jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }></AddCategory>);

        
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        

        expect( onNewCategory ).not.toHaveBeenCalled();

      })
 })