
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../../firebase/provider";
import { checkingCredentials, login, logout } from "../../../store/auth/authSlice";
import { checkingAuthentication, startEmailPasswordSignIn, startGoogleSignIn, startLogInWithEmailAndPassword, startLogout } from "../../../store/auth/thunks";
import { clearNotesLogout } from "../../../store/journal";
import { demoUser } from "../../fixtures/authFixtures";


//Al realizar de esta manera el mock de un path
//Hace que todo lo que devuelva este se convierte en un mock
jest.mock('../../../firebase/provider')


describe('Pruebas en AuthThunks', () => {
    
    const dispatch = jest.fn();
    beforeEach( ()=> jest.clearAllMocks() );
    
    test('Debe de incovar el checkingCredentials', async() => { 
        
        await checkingAuthentication()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
     })

     test('startGoogleSignIn debe de llamar checkingCredentials y login - Exito', async() => { 
        const loginData = { ok: true, ...demoUser };
        await signInWithGoogle.mockResolvedValue( loginData );

        //thunk
        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login(loginData) );
      })

      test('startGoogleSignIn debe de llamar checkingCredentials y logout - Fracaso', async() => { 

        const loginData = { ok: false, errorMessage: 'Un error en google'};
        await signInWithGoogle.mockResolvedValue( loginData );


        //thunk
        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout(loginData.errorMessage) );

       })

       test('startLoginWithEMailPassword debe de llamar checkingCredentials y login - Exito', async() => { 

        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456'};

        await loginWithEmailPassword.mockResolvedValue( loginData );

        await startLogInWithEmailAndPassword( formData )(dispatch);
        
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );

        })
        
        test('startLoginWithEMailPassword debe de llamar checkingCredentials y logout - Fracaso', async() => {
        const loginData = { ok: false, errorMessage: 'Un error en google'};
        const formData = { email: demoUser.email, password: '123456'};

        await loginWithEmailPassword.mockResolvedValue( loginData );
        
        await startLogInWithEmailAndPassword( formData )(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout( loginData ) );
        

         })

        test('startEmailPasswordSignIn y login - Exito', async() => { 
            const registerData = { ok: true, ...demoUser };
            const formData = { email: demoUser.email, password: '123456', displayName: demoUser.displayName };

            await registerUserWithEmailPassword.mockResolvedValue( registerData );

            await startEmailPasswordSignIn( formData )( dispatch );
        
            expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
            expect( dispatch ).toHaveBeenCalledWith( login( registerData ) );  

            

         })


         test('startLogout debe de llamar logoutFirebase, clearNotes yt logout', async() => { 

            await startLogout()(dispatch);

            expect( logoutFirebase ).toHaveBeenCalled();
            expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
            expect( dispatch ).toHaveBeenLastCalledWith( logout() );

          })
       
});
 