import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { PublicRoute } from "../../router/PublicRoute";

describe('Pruebas en el componente Public Route', () => {
    
    test('Debe de mostrar el children si no està autenticado', () => { 

        const contextValue = { logged: false };

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta Publica')).toBeTruthy();
    })

    test('Debe de navegar si esta autenticado', () => { 

        const contextValue = { 
            logged: true, 
            user: {name: 'Tomas',
             id:'abc123'}
        }
        
        render(
            <AuthContext.Provider value={ contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta Publica</h1>
                            </PublicRoute>
                        }></Route>
                        <Route path="marvel" element={<h1>Marvel Page</h1>}></Route>
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect( screen.getByText('Marvel Page')).toBeTruthy();

     })
});
