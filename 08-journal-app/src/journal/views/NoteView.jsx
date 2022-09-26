import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid 
        container 
        direction="row"
        justifyContent="space-between"
        sx={{ mb: 1 }}
    >
        <Grid item>
            <Typography variant="h6" fontSize={ 39} fontWeight='light'>September, 24 of 2022</Typography>
        </Grid>
        <Grid item>
            <Button sx={{ padding: 2 }}>
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
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="What appends today?"
                label="Description"
                minRows={ 5 }
                sx={{ border: 'none', mb: 1 }}
            />
        </Grid>

        <ImageGallery />

    </Grid>
  )
}
