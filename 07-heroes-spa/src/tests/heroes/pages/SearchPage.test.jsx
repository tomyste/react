import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchPage } from "../../../heroes";


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));



describe('Pruebas en el componente SearchPage', () => {

    beforeEach(() => jest.clearAllMocks());
    
    test('Debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage></SearchPage>
            </MemoryRouter>
        );

        expect( container ).toMatchSnapshot();

    })

    test('Debe de mostrar a Batman y el input con el valor del queryString', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage></SearchPage>
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg');

        const alert = screen.getByLabelText('div-alert-search');
        expect( alert.style.display ).toBe('none');
           
    })

    test('Debe de mostrar un error si no se encuentra el heroe (batman123)', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage></SearchPage>
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('div-alert-error');
        expect( alert.style.display ).toBeFalsy();
     })

     test('Debe de llamar el navigate a la pantalla nueva', () => { 

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage></SearchPage>
            </MemoryRouter>
        );

        const inputs = screen.getByRole('textbox');
        fireEvent.change( inputs, { target: { name: 'searchText', value: 'superman'}})

        const form = screen.getByRole('form');
        fireEvent.submit( form )

        const input = screen.getByRole('textbox');
        expect( mockedUseNavigate ).toHaveBeenCalledWith("?q=superman");



      })

});
