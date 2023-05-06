import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // logged, not-logged
        user: {},
        errorMessage: undefined,
    },
    reducers: {
        onChecking: ( state ) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: ( state, { payload } ) => {
            state.status = 'logged';
            state.user = payload,
            state.errorMessage = undefined;
        },
        onLogout: ( state, { payload } ) => {
            state.status = 'not-logged';
            state.user = {},
            state.errorMessage = payload;
        },
        clearErrorMessage: ( state ) => {
            state.errorMessage = undefined;
        }
    }
});

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions;