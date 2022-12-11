import { screen, render } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { AppRouter } from "../../router/AppRouter";

describe('Pruebas en componente AppRouter', () => {
    
    test('Debe de mostrar el login si no està autenticado', () => { 

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter></AppRouter>
                </AuthContext.Provider>
            </MemoryRouter>
        )
        
        
        expect( screen.getAllByText('Login').length).toBe(2);
     })

     test('Debe de comprobar el componente de Marvel si està autenticado', () => { 

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'tomas'
            }
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter></AppRouter>
                </AuthContext.Provider>
            </MemoryRouter>
        )

    
        expect(screen.getByText('Marvel Comics')).toBeTruthy();
        expect(screen.getByText('tomas')).toBeTruthy();

     })
});
