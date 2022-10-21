import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux";

export const SideBar = ({ drawerWidth }) => {

    const { displayName } = useSelector(state => state.auth);

    return (
        <Box
            className="animate__animated animate__slideInLeft animate__slow"
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent" // temporary
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant="h6">
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        ['January', 'February', 'March', 'April', 'May', 'June', 'July'].map(text => (
                            <ListItem key={text} disablePadding >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'Lorem ipsum dolor, sit amet consectetur'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
