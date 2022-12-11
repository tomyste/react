import {Link as RouterLink} from 'react-router-dom'

import { useForm } from '../../hooks/useForm'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useMemo, useState } from 'react'
import { startEmailPasswordSignIn } from '../../store/auth/thunks'
import { useDispatch, useSelector } from 'react-redux'


const formData = {
  displayName: '',
  email: '',
  password: '',
}

const formValidations = {
  email: [( value ) => (value.includes('@') && value.length > 3), 'El correo es obligatorio y debe tener @'],
  password: [( value ) => value.length >= 6, 'El Password debe de tener mas de 6 letras'],
  displayName: [( value ) => value.length >= 1, 'El nombre es obligatorio']
}


export const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const { status, errorMessage } = useSelector( state => state.auth);
  const dispatch = useDispatch();
  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const {formState, displayName, email, password, onInputChange,
  isFormValid, displayNameValid, emailValid, passwordValid } = useForm( formData, formValidations );


  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if( !isFormValid ) return; 

    dispatch( startEmailPasswordSignIn( formState ) );
    
  }

  

  return (
    <AuthLayout title='Register'>
      <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn">
          <Grid container>
          
            <Grid item xs={ 12 } sx={{pb: 1, mt: 1 }}>
                <TextField label='Full Name'
                type='name' 
                placeholder="Full Name" 
                fullWidth
                name='displayName'
                value={ displayName }
                onChange={ onInputChange }
                error={ !!displayNameValid && formSubmitted }
                helperText={ formSubmitted && displayNameValid }
                >
                </TextField>

              </Grid>

            <Grid item xs={ 12 } sx={{pb: 1, mt: 1 }}>

              <TextField label='Correo'
              type='email' 
              placeholder="correo@google.com" 
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ formSubmitted && emailValid }
              >
              </TextField>
            </Grid>
            
            <Grid item xs={ 12 }>

              <TextField label='Contraseña'
              type='password' 
              fullWidth
              name='password'
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid  && formSubmitted}
              helperText={formSubmitted && passwordValid }
              >
              </TextField>
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 0.2 }} >
              <Grid item xs={ 12 } display={ !!errorMessage? '': 'none'}>
                <Alert severity='error'> { errorMessage }</Alert>
              </Grid>
              <Grid item xs={ 12 } >
                <Button variant="contained" fullWidth type='submit' disabled={ isAuthenticating }>Register</Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx= {{ mr: 1 }}>Ya tienes Cuenta? </Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login'> Ingrese</Link>
            </Grid>


          </Grid>
        </form>
    </AuthLayout>
  )
}
