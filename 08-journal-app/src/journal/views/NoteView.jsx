import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';

import { Button as IconButton, Grid, Input, TextField, Typography } from '@mui/material';
import { Delete, DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2';


import { setActiveNote, startDeleteNote, startSaveNote, startUploadingFiles } from '../../store/journal';
import { ImageGallery } from '../components'


export const NoteView = () => {

    const dispatch = useDispatch();
    
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
    
    const { body, title, date, onInputChange, formState} = useForm( note );
    
    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date])
    
    useEffect(() => {
        dispatch( setActiveNote( formState ))
    }, [formState])
    
    useEffect(() => {
        if( messageSaved.length > 0 ){
            Swal.fire('Nota actualizada', messageSaved, 'success')
        }
        
    }, [messageSaved])
    
    
    const onClickSave = () => {
        dispatch( startSaveNote() );
    }


    const fileInputRef = useRef();

    const onFileInputChange = ({ target }) => {
        if( target.files === 0 ) return;

        dispatch( startUploadingFiles(  target.files ))        
    }

    const deleteNote = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            dispatch( startDeleteNote() );
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success',
              )
            }
        }) 
    }

    
 


  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}
    className="animate__animated animate__fadeIn">
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >{ dateString }</Typography>
        </Grid>
        <Grid item>

            <input type='file'
                    style={{display: 'none'}}
                    multiple
                    onChange={ onFileInputChange }  
                    ref={ fileInputRef }
                    />
            
            <IconButton
            disabled={ isSaving }
            onClick={ ()=> fileInputRef.current.click() }
            >
                <UploadOutlined/>
            </IconButton>


            <IconButton color="primary" sx={{ padding: 2 }}
            disabled={ isSaving }
            onClick={ onClickSave }>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </IconButton>

            <IconButton 
            sx={{ padding: 2 }}
            disabled={ isSaving }
            onClick={ deleteNote }>
                <DeleteOutline sx={{fontSize: 25, margin: 3}}></DeleteOutline>
            </IconButton>
        </Grid>

        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                label="Título"
                sx={{ border: 'none', mb: 1 }}
                value={title} 
                name="title"
                onChange={ onInputChange }
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió en el día de hoy?"
                minRows={ 5 }
                value={body} 
                name="body"
                onChange={ onInputChange }
            />
        </Grid>

        

        {/* Image gallery */}
        <ImageGallery images={note.imageUrls} />


    </Grid>
  )
}