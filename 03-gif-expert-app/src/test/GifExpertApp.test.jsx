import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../components/AddCategory";
import GifExpertApp from "../GifExpertApp";


// Mejorar en todo sentido

describe('Pruebas en componente <GifExpertApp>', () => {
    const newCategory = 'Saitama'
    test('No debe agregar una categoria existente', () => { 
        
        const onAddCategory = jest.fn();
        
        render(<GifExpertApp></GifExpertApp>);
           

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        
        fireEvent.input(input, { target: { value: newCategory}});
        fireEvent.submit( form );


        fireEvent.input(input, { target: { value: newCategory}});
        fireEvent.submit( form );

        
        expect((screen.getAllByText(newCategory)).length).toBe(1);
     })
});
