import { Box, Container } from '@mui/system'
import React from 'react'
import "./Home.css"
import ActivityPanel from './ActivityPanel'
import Folder from './Folder'
import Reports from './Reports'

const Home = () => {

  return (
    <Box sx={{ p: 6 }} className="home">
      <Container>
        <ActivityPanel />
        <Folder />
        <Reports />
      </Container>
    </Box>
  )
}

export default Home
