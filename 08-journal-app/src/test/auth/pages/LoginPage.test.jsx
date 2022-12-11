import { configureStore } from "@reduxjs/toolkit"
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider, useDispatch } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { LoginPage } from "../../../auth/pages/LoginPage"
import { authSlice } from "../../../store/auth/authSlice"
import { notAuthenticatedState } from "../../fixtures/authFixtures"


const mockStartGoogleSignIn = jest.fn();
const mockStartLogInWithEmailAndPassword = jest.fn();

jest.mock('../../../store/auth/thunks', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLogInWithEmailAndPassword: ({email, password}) => {return () => mockStartLogInWithEmailAndPassword({ email, password })},
}));

//En este momento se sobreescribe el funcionamiento del useDispatch
jest.mock('react-redux', ()=> ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
}))


//Las pruebas de material UI son mas lentas!

//Creamos un store para proveerlo en el provider y tener mayor control

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
})

const user = {
    email: 'Tomy@gmail.com',
    password: '1234AVS'
}

describe('Pruebas en el componente LoginPage', () => { 

    beforeEach( () => jest.clearAllMocks())
    test('Debe de mostrar el componente correctamente', () => { 
        
        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        )
        // screen.debug()
        expect( screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
     })


     test('El boton de google debe de llamar al googleSignIn', () => { 

        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        )
        
        const googleBtn = screen.getByLabelText('google-btn')
        fireEvent.click( googleBtn ); 
        //Hay que tener cuidado con que el boton no este deshabilitado
        
        expect( mockStartGoogleSignIn ).toHaveBeenCalled();

      })

      test('Submit debe de llamar startLoginWithEmailPassword', () => { 
            render(
                <Provider store={ store }>
                    <MemoryRouter>
                        <LoginPage/>
                    </MemoryRouter>
                </Provider>
            )

            const emailField = screen.getByRole('textbox', { name: 'Correo'});
            const passwordField = screen.getByTestId('password');

            const loginForm = screen.getByLabelText('test-form');
            
            fireEvent.change( emailField, { target: { name: 'email', value: user.email }});
            fireEvent.change( passwordField, { target: { name: 'password', value: user.password }});
            fireEvent.submit( loginForm );

            expect( mockStartLogInWithEmailAndPassword ).toHaveBeenCalledWith({
                email: user.email,
                password: user.password
            })

       })
 })