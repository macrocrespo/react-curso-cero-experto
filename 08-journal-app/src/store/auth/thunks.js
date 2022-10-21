import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase";
import { checkingCredentials, logout, login } from "./"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await signInWithGoogle();
        if ( !result.ok ) return dispatch( logout( result ) );

        return dispatch( login( result ) );
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if (!ok) return dispatch( logout({ errorMessage }) );

        dispatch( login({ uid, email, displayName, photoURL }) );
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const { ok, uid, photoURL, displayName, errorMessage } = await loginWithEmailPassword({ email, password });

        if (!ok) return dispatch( logout({ errorMessage }) );
        dispatch( login({ uid, email, displayName, photoURL }) );
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase();

        dispatch( logout({}) );

    }
}