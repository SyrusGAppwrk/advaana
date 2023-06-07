import { Card, Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import "./Home.css"

const Home = () => {

  return (
    <Box sx={{ p: 6 }} className="home">
      <Container>
        <Typography sx={{ fontWeight: "bold" }}>Team Activity Panel</Typography>
        <Box sx={{ minWidth: 275, mt: 2 }}>
          <Card variant="outlined" sx={{ p: 4 }}>
            <Grid container sx={{ display: "flex", flexFlow: 1 }} xs={12}>
              <Grid item xs={3}>
                <Typography className='grid-text'>Sources connected</Typography>
                <Typography sx={{ display: "flex", alignItems: "center", fontSize: "24px", fontWeight: "bold" }}>3
                  <Typography sx={{ fontSize: "12px" }}>
                    /unlimited
                  </Typography>
                </Typography>
                <Typography sx={{ mt: 1 }} className='manage_team'>Manage your plan</Typography>
              </Grid>
              <Grid xs={3}>
                <Typography className='grid-text'>Sources that require verification</Typography>
                <Typography sx={{ display: "flex", alignItems: "center", fontSize: "24px", fontWeight: "bold" }}>3
                  <Typography sx={{ fontSize: "12px" }}>
                    /unlimited
                  </Typography>
                </Typography>
                <Typography sx={{ mt: 1 }} className='manage_team'>Manage your sources</Typography>
              </Grid>
              <Grid xs={6}>
                <Typography className='grid-text'>Team members</Typography>
                <Typography sx={{ display: "flex", alignItems: "center", fontSize: "24px", fontWeight: "bold" }}>3
                  <Typography sx={{ fontSize: "12px" }}>
                    /unlimited
                  </Typography>
                </Typography>
                <Typography className='manage_team' sx={{ mt: 1 }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}> Manage your team</Typography>
                  <Typography className='grid-text'> Send feedback</Typography>

                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
