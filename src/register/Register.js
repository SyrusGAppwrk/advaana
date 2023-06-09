import "./register.css"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from "react-router-dom";
const defaultTheme = createTheme();

export const Register = () => {
    const navigate = useNavigate()

    const handleBackLogin = () => {
        navigate("/login")
    }

    const handleSubmit = () => {

    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box className="register_main">
                <Container className="register_main-container" component="main" maxWidth="xs" sx={{ padding: '50px 0 0' }}>
                    <Box >
                        <Card sx={{
                            marginTop: 8,
                            borderRadius: "30px",
                            padding: "40px 78px 43px",
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: 'center',
                        }}>
                            <CardContent>
                                <Box>
                                    <Typography component="span" className="heading">
                                        Request your free Advaana trial
                                    </Typography>
                                    <Box component="form" onSubmit={handleSubmit} noValidate>

                                        <Grid
                                            container
                                            alignItems="center"
                                            marginTop={2}
                                            sx={{ display: "flex" }}
                                        >
                                            <Grid item md={6} xs={12} lg={6}>
                                                <TextField
                                                    required
                                                    id="email"
                                                    fullWidth
                                                    placeholder="First name*"
                                                    name="text"
                                                    autoComplete="email"
                                                    className="register-form"
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item md={6} xs={12} lg={6}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    name="password"
                                                    placeholder="Last name*"
                                                    type="text"
                                                    id="password"
                                                    className="register-form"
                                                    autoComplete="current-password"
                                                />
                                            </Grid>
                                        </Grid>
                                        <TextField
                                            sx={{ mt: 1 }}
                                            required
                                            name="password"
                                            placeholder="Company name*"
                                            type="text"
                                            fullWidth
                                            id="password"
                                            className="register-form"
                                            autoComplete="current-password"
                                        />
                                        <TextField
                                            sx={{ mt: 1 }}
                                            required
                                            name="password"
                                            placeholder="Company email"
                                            type="text"
                                            fullWidth
                                            id="password"
                                            className="register-form"
                                            autoComplete="current-password"
                                        />
                                        <TextField
                                            sx={{ mt: 1 }}
                                            required
                                            name="password"
                                            placeholder="Username*"
                                            type="text"
                                            fullWidth
                                            id="password"
                                            className="register-form"
                                            autoComplete="current-password"
                                        />
                                        <TextField
                                            sx={{ mt: 1 }}
                                            required
                                            name="password"
                                            placeholder="Password*"
                                            type="text"
                                            fullWidth
                                            id="password"
                                            className="register-form"
                                            autoComplete="current-password"
                                        />
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, p: 1, textTransform: "none" }}
                                        >
                                            Request a free trial
                                        </Button>
                                        <Typography component="span" className="back-login" onClick={handleBackLogin}>
                                            <KeyboardBackspaceIcon sx={{ fontSize: "15px" }} />
                                            <Typography sx={{ fontSize: "12px" }}> Back to login</Typography>
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    )
}
