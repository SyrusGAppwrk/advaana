import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ReactComponent as Google } from '../assets/svg/google.svg';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent } from '@mui/material';
import "./login.css"
import { app, auth } from '../utils/firebase';
import { collection, getFirestore, query, getDocs, where, addDoc } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setAuthUserData } from '../Redux/action/auth';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();


  //handle submit

  const handleSubmit = () => {

  }

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;
      localStorage.setItem("user", JSON.stringify(user))
      dispatch(setAuthUserData(user))
      if (user !== null || user !== undefined) {
        navigate("/")
      }
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ height: "100vh", bgcolor: '#B8926B' }} className="login_main">
        <Container component="main" maxWidth="xs" sx={{ padding: '50px 0 0' }}>
          <Avatar
            className='avatar-icon'
            sx={{
              bgcolor: 'secondary.main',
              display: 'flex',
              margin: 'auto',
            }}>
            <LockOutlinedIcon />
          </Avatar>
          <Card sx={{
            marginTop: 8,
            minWidth: 275,
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
          }}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: "center",
                  alignItems: 'center',
                }}
              >
                <Typography component="h1" variant="h5">
                  Log in
                </Typography>
                <Typography component="h2" variant="h6" fontSize={14} alignItems='center' display={"flex"} sx={{ mt: 1 }} >
                  New to Advaana?<Typography fontWeight={"bold"} fontSize={14}>&nbsp;Create a free account</Typography>
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />

                  <TextField
                    sx={{ mt: 1 }}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <Grid
                    container
                    direction="row"
                    justifyContent="end"
                    alignItems="center"
                  >
                    <Grid item sx={{ mt: 1 }}>
                      <Link href="#" variant="body2">
                        {"Forgot password?"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, p: 1, textTransform: "none" }}
                  >
                    Log in with email and password
                  </Button>
                  <Typography
                    align='center'>
                    OR
                  </Typography>
                  <Button
                    fullWidth
                    className='google_btn'
                    variant="contained"
                    sx={{ mt: 3, mb: 2, p: 1 }}
                    onClick={signInWithGoogle}
                  >
                    <Typography
                      align='center' sx={{ mt: 1, ml: 1 }}>
                      <Google />
                    </Typography>
                    Continue with Google
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default Login