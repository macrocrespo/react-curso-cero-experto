import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {

    const dispatch = useDispatch();
    const { isSaving, active } = useSelector( state => state.journal );

    const onClickNewNote = () => {
        dispatch( startNewNote() );
    }

    return (
        <JournalLayout>
            {/* <Typography variant="h1">Journal Page</Typography>
        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum nesciunt enim doloribus, maxime sint eveniet quasi! Iusto doloremque adipisci reprehenderit.</Typography> */}

        { 
            (!!active) 
                ? <NoteView /> 
                : <NothingSelectedView /> 
        }

        <IconButton
            disabled={ isSaving }
            onClick={ onClickNewNote }
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
        </IconButton>

        </JournalLayout>
    )
}
