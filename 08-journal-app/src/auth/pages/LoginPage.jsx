import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link as RouterLink} from 'react-router-dom'

import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { checkingAuthentication, startEmailPasswordSignIn, startGoogleSignIn, startLogInWithEmailAndPassword,  } from '../../store/auth/thunks'


const initialForm = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth);
  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const dispatch = useDispatch();
  

  const { email, password, onInputChange } = useForm(initialForm);
  
  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log( {email, password})
    dispatch( startLogInWithEmailAndPassword({ email, password}) );
  }

  const onGoogleSignIn = () => {
    // console.log("onGoogleSignIn");
    dispatch( startGoogleSignIn() );
  }



  return (
    <AuthLayout title='Login'>
        
        <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn"
        aria-label='test-form'>
          <Grid container>
            <Grid item xs={ 12 } sx={{pb: 1, mt: 1 }}>

              <TextField 
              label='Correo'
              type='email' 
              placeholder="correo@google.com" 
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
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
              inputProps={{
                'data-testid': 'password'
              }}>
              </TextField>
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 0.2 }} >
              <Grid item xs={ 12 } display={ !!errorMessage? '': 'none'}>
                  <Alert severity='error'> { errorMessage }</Alert>
              </Grid>
              <Grid item xs={ 12 } md={ 6 } >
                <Button type='submit' variant="contained" fullWidth disabled={ isAuthenticating }>Login</Button>
              </Grid>

              <Grid item xs={ 12 } md={ 6 } >
                <Button onClick={onGoogleSignIn} variant="contained" fullWidth disabled={ isAuthenticating }
                aria-label='google-btn'>
                  <Google/>
                  <Typography sx={{ ml:1 }}>Google</Typography>
                </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to='/auth/register'> Crear una cuenta</Link>
            </Grid>


          </Grid>
        </form>
    </AuthLayout>


  )
}
