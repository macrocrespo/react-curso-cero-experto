import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({ title = '', children }) => {
  return (
    <Grid 
        container
        spacing={ 0 }
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ 
            minHeight: '100vh',
            backgroundColor: 'primary.main',
            padding: 4
        }}
    >
        <Grid 
            item
            className="box-shadow animate__animated animate__fadeIn"
            xs={ 3 }
            sx={{
                width: { md: 450 },
                backgroundColor: 'white',
                padding: 3,
                borderRadius: 2
            }}
        >
            <Typography variant="h5" sx={{ mb: 1 }} >
                { title }
            </Typography>

            { children }

        </Grid>
    </Grid>
  )
}
