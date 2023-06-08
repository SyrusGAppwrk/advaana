import { Avatar, Box, Container, Grid, TextField, Typography } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Card from '@mui/material/Card';
import React, { useState } from 'react'
import "./sources.css"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import GA4 from "../assets/img/ga4.png";
import AddIcon from '@mui/icons-material/Add';
const sourcesList = [
    { id: 1, label: "Google Anayltics 4", img: GA4 },
    { id: 2, label: "Google Anayltics", img: GA4 },
]

export const ManageSources = () => {
    const [activeSource, setActiveSource] = useState("Google Anayltics")

    const handleSource = (label) => {
        setActiveSource(label)
    }
    return (
        <>
            <Box sx={{ p: 6 }}>
                <Container>
                    <Typography variant='h5' component="h5" sx={{ fontWeight: "bold" }}>
                        Manage data sources
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <Grid container sx={{ display: "flex", flexFlow: 1 }} xs={12}>
                            <Grid item xs={3}>
                                <Card variant="outlined" sx={{ p: 1, height: "450px" }} >
                                    <Typography component="span" sx={{ ml: 1, fontSize: "12px", fontWeight: "bold" }}>Channels</Typography>
                                    <TextField
                                        // label="With normal TextField"
                                        id="outlined-start-adornment"
                                        placeholder='Search..'
                                        className='searchChannel'
                                        sx={{ mt: 1, width: '30ch' }}
                                        InputProps={{
                                            startAdornment: <SearchOutlinedIcon position="start" sx={{ mr: 1, color: '#A9A9A9', fontSize: "20px" }}>kg</SearchOutlinedIcon>,
                                        }}
                                    />
                                    <List component="nav">
                                        {sourcesList.map((itm) => {
                                            return (
                                                <Box className="list_class-container">
                                                    <ListItem className='list_class'
                                                        key={itm.id}
                                                        sx={activeSource === itm.label ? { backgroundColor: "#000", color: "#fff" } : ""}
                                                        onClick={() => handleSource(itm.label)}>
                                                        <ListItemAvatar sx={{ display: 'flex', alignItems: "center" }}>
                                                            <Avatar alt="Remy Sharp" src={itm.img} className='logoavtar' />
                                                            <Typography component="span" sx={{ fontWeight: "bold", fontSize: "13px" }}>{itm.label}</Typography>
                                                        </ListItemAvatar>
                                                        <KeyboardArrowRightOutlinedIcon />
                                                    </ListItem >
                                                    <Divider />
                                                </Box>
                                            )
                                        })}

                                    </List>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card variant="outlined" sx={{ p: 1, height: "450px" }} >
                                    <Typography component="span" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <Typography sx={{ ml: 1, fontSize: "12px", fontWeight: "bold", color: "#A9A9A9" }}>Account</Typography>
                                        <Typography sx={{ ml: 1, fontSize: "12px", fontWeight: "bold", color: "#1976D2", display: "flex", alignItems: "center" }}> Add new
                                            <AddIcon sx={{ fontSize: "15px", fontWeight: "bold" }} />
                                        </Typography>
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card variant="outlined" sx={{ p: 1, height: "450px" }} ></Card>
                            </Grid>
                        </Grid>

                    </Box>
                </Container >
            </Box >
        </>
    )
}
