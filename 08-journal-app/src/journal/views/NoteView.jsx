import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import { useForm } from "../../hooks"
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../../store"
import { ImageGallery } from "../components";
import 'sweetalert2/dist/sweetalert2.css';
import { useRef } from "react"

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector( state => state.journal );
    const { id, title, body, date, imageUrls, onInputChange, formState } = useForm( note );

    const dateString = useMemo(() => {
        const dateFormatted = new Date( date );
        return dateFormatted.toUTCString();
    }, [ date ]);

    useEffect(() => {
      dispatch( setActiveNote( formState ) );
    }, [formState]);

    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Note updated', messageSaved, 'success');
        }
    }, [messageSaved]);

    const fileInputRef = useRef();
    
    const onFileInputChange = ({ target }) => {
        if ( target.files === 0 ) return;

        dispatch( startUploadingFiles( target.files ) );
    }

    const onDelete = () => {
        dispatch( startDeletingNote() );
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            sx={{ mb: 1 }}
        >
            <Grid item>
                <Typography variant="h6" fontSize={39} fontWeight='light'>{ dateString }</Typography>
            </Grid>
            <Grid item>

                <input 
                    type="file" 
                    multiple 
                    ref={ fileInputRef }
                    onChange={ onFileInputChange }
                    style={{ display: 'none' }}
                />

                <IconButton
                    color="primary"
                    disabled={ isSaving }
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined />
                </IconButton>

                <Button 
                    disabled={ isSaving }
                    onClick={ onSaveNote }
                    sx={{ padding: 2 }}
                    color="primary"
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Enter the title"
                    label="Title"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={ title }
                    onChange={ onInputChange }
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What appends today?"
                    label="Description"
                    minRows={5}
                    sx={{ border: 'none', mb: 1 }}
                    name="body"
                    value={ body }
                    onChange={ onInputChange }
                />
            </Grid>

            <Grid
                container
                justifyContent="end"
            >
                <Button
                    onClick={ onDelete }
                    sx={{ mt: 2 }}
                    color="error"
                >
                    <DeleteOutline />
                    Delete
                </Button>
            </Grid>

            <ImageGallery 
                images={ note.imageUrls }
            />

        </Grid>
    )
}
