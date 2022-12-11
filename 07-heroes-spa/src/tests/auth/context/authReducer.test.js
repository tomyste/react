import { act } from "react-dom/test-utils";
import { authReducer } from "../../../auth/context/authReducer";
import { types } from "../../../auth/types/types";

describe('Pruebas en authReducer', () => {

    
    const initialState = {
        logged: false
    }

    test('Debe de retornar el estado por defecto', () => {
        const state = authReducer(initialState, {} );
        expect( state ).toBe( initialState );

    })

    test('Debe de (login) llamar el login autenticar y establecer el user', () =>{

        const action = {
            type: types.login,
            payload: {
                id: 'abc',
                user: 'tomas'
            }
        };

        const state = authReducer(initialState, action);

        expect( state.logged).toBe( true );
        expect( state.user).toEqual( action.payload );
    })
 
    test('Debe de (logout) borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.logout
        };
        
        const state = authReducer({logged: true, user: { id: '123', name:'Juan'}}, action);

        expect(state.logged).toBeFalsy();        
         });
});
