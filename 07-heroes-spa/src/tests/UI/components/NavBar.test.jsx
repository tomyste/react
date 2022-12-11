import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth/context/AuthContext";
import { Navbar } from "../../../UI/components/NavBar";


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en el componente NavBar', () => {

    const contextValue = {
        logged: true,
        user: {
            id: 'ads',
            name: 'tomas'
        },
        logout: jest.fn()
    };

    beforeEach(() => jest.clearAllMocks());
   
    test('Debe de mostrar el nombre del usuario', () => { 
    
        

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar></Navbar>

                </MemoryRouter>
            </AuthContext.Provider>

            
        );
            
        expect( screen.getByText('tomas')).toBeTruthy();

        
     })

     test('Debe de llamar el logout y navigate cuando se hace click en el boton', () => { 

        

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar></Navbar>

                </MemoryRouter>
            </AuthContext.Provider>
        );
    
        const buttonElement = screen.getByLabelText('button'); //or getByRole
        fireEvent.click(buttonElement);

        expect(contextValue.logout).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {"replace": true})


     })
});
