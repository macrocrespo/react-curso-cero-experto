import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store";

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [ (value) => value.includes('@'), 'El email debe tener un @.'],
    password: [ (value) => value.length >= 6, 'El password debe tener al menos 6 letras.'],
    displayName: [ (value) => value.length >=3, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector( state => state.auth );
    const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );

    const { 
        formState, displayName, email, password, onInputChange, 
        isFormValid , displayNameValid, emailValid, passwordValid
    } = useForm (formData, formValidations);

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted(true);

        if ( !isFormValid ) return;
        dispatch( startCreatingUserWithEmailPassword( formState ) );
    }

    return (
        <AuthLayout title="Register">

            <h2>FormValid { isFormValid ? 'Valid' : 'Invalid' }</h2>

            <form onSubmit={ onSubmit }>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Fullname"
                            type="text"
                            placeholder="Nombre Completo"
                            fullWidth
                            name="displayName"
                            value={ displayName }
                            onChange={ onInputChange }
                            error={ !!displayNameValid && formSubmitted }
                            helperText={ formSubmitted && displayNameValid }
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="johndoe@gmail.com"
                            fullWidth
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                            error={ !!emailValid && formSubmitted }
                            helperText={ formSubmitted && emailValid }
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="****"
                            fullWidth
                            name="password"
                            value={ password }
                            onChange={ onInputChange }
                            error={ !!passwordValid && formSubmitted }
                            helperText={ formSubmitted && passwordValid }
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
    
                        <Grid 
                            item 
                            xs={12}
                            display={ !!errorMessage ? '' : 'none' }
                        >
                            <Alert severity="error">{ errorMessage }</Alert>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <Button 
                                type="submit"
                                variant="contained" 
                                fullWidth
                                disabled={ isCheckingAuthentication }
                            >
                                Create Account
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
                        <Link component={RouterLink} color="inherit" to="/auth/login">
                            Login
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    )
}
