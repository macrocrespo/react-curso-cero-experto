import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
        {/* <Typography variant="h1">Journal Page</Typography>
        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum nesciunt enim doloribus, maxime sint eveniet quasi! Iusto doloremque adipisci reprehenderit.</Typography> */}
    
        <NothingSelectedView />
        {/* <NoteView />

        <IconButton
            size="large"
            sx={{ 
                color: 'white',
                backgroundColor: 'error.main',
                ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
                position: 'fixed',
                right: 50,
                bottom: 100
             }}
        >
            <AddOutlined sx={{ fontSize: 40 }} />
        </IconButton> */}

    </JournalLayout>
  )
}
