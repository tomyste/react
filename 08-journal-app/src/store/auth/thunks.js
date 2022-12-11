import { async } from "@firebase/util";
import { signInWithEmailAndPassword } from "firebase/auth";
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/provider";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = ( email, password ) => {

    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }

}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const result =  await signInWithGoogle()
        if ( !result.ok ) return dispatch(logout( result.errorMessage ));

        dispatch( login( result ) );
        

    }
}

export const startEmailPasswordSignIn = ({email, password, displayName}) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = await registerUserWithEmailPassword( {email, password, displayName});

        if( !result.ok ) return dispatch( logout( { errorMessage } ) );

        dispatch( login( result ));

    }
}


export const startLogInWithEmailAndPassword = ( {email, password} ) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({email, password});

        if(!result.ok) return dispatch( logout( result ) );

        dispatch( login( result ));
       
    }
}


export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase();

        dispatch( clearNotesLogout() );
        dispatch( logout() );
    }
}