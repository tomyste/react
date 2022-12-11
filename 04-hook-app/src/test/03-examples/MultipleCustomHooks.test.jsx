import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => {

    const mockIncrement = jest.fn()

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('Debe mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError:null
        })

        render(<MultipleCustomHooks></MultipleCustomHooks>);
        
        expect( screen.getByText('Loading...'));
        expect( screen.getByText('BreakinBad Quotes'));

        const nexButton = screen.getByRole('button',{name: 'Next Quote'})

        expect( nexButton.disabled).toBeTruthy();

        
     })

     test('Debe de retornar un Quote', () => { 

        useFetch.mockReturnValue({
            data: [{
                author: "Walter White",
                quote: "I am the danger"
            }],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks></MultipleCustomHooks>);

        expect( screen.getByText( 'I am the danger' ) ).toBeTruthy();
        expect( screen.getByText( 'Walter White' ) ).toBeTruthy();

        const nexButton = screen.getByRole('button',{name: 'Next Quote'})

        expect( nexButton.disabled).toBeFalsy();
      })

      test('Debe de llamar la funciòn de incrementar', () => { 

            

            useFetch.mockReturnValue({
                data: [{
                    author: "Walter White",
                    quote: "I am the danger"
                }],
                isLoading: false,
                hasError: null
            })


            render(<MultipleCustomHooks></MultipleCustomHooks>);
            const nexButton = screen.getByRole('button',{name: 'Next Quote'});
            fireEvent.click( nexButton );

            expect( mockIncrement).toHaveBeenCalled();

            


            

       })
    
});

