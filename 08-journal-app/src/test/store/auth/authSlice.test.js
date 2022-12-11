import { authSlice, checkingCredentials, login, logout } from "../../../store/auth/authSlice";
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../fixtures/authFixtures";



describe('Pruebas en el authSlice', () => { 

    const errorMessage = 'Credenciales Incorrectas'
    
    test('Debe de regresar el estado inicial y llamarse "auth"', () => {
        const state = authSlice.reducer( initialState,{} );
        
        expect( state ).toEqual( initialState );
        expect( authSlice.name ).toBe('auth')
    });


    test('Debe de realizar la autenticaciòn', () => { 
        
        const state = authSlice.reducer( initialState, login( demoUser ));

        expect( state ).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        })
       
     })

     test('Debe de realizar el logout', () => { 
        const state = authSlice.reducer( authenticatedState, logout() );

        expect( state ).toEqual({
            status : 'not-authenticated', 
            uid : null,
            email : null, 
            displayName : null,
            photoURL : null,
            errorMessage: undefined
        })
      })

      test('Debe de realizar el logout y mostrar el mensaje de error', () => { 
        const state = authSlice.reducer( authenticatedState, logout({
            errorMessage: errorMessage
        }) );

        expect( state ).toEqual({
            status : 'not-authenticated', 
            uid : null,
            email : null, 
            displayName : null,
            photoURL : null,
            errorMessage: errorMessage
        })

       })

       test('Debe de cambiar el estado a checking', () => { 
        
        const state = authSlice.reducer( notAuthenticatedState, checkingCredentials())

        expect( state ).toEqual({
            status: 'checking',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: null
            })

        })

 })


 