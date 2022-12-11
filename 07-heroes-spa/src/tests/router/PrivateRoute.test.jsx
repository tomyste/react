import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { PrivateRoute } from "../../router/PrivateRoute";

describe('Pruebas en el componente PrivateRoute', () => {
    
    test('Debe de mostrar el children si està autenticado', () => { 

        Storage.prototype.setItem = jest.fn();

        const contextValue = { 
            logged: true,
            user: {
                id: 'abc123',
                name: 'Tomaco'
            }
         };

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                <PrivateRoute>
                    <h1>Ruta Privada</h1>
                </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect( screen.getByText('Ruta Privada')).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", '/search?q=batman');
    })

});
