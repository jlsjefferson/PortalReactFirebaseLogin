import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./firebase/base";
import { AuthContext } from "./firebase/Auth";
import "./components/css/login_style.css";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/Welcome" />;
  }

  return (
    <div id="tudo" component="main" maxWidth="xs">
      <CssBaseline />
      <container>
      <div id="formLogin">
       
        <Typography component="h1" variant="h5">
          LOGIN
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            variant="outlined"
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
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembrar Senha?"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Acessar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
               Lembrar Senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Primeiro Acesso? Crie uma nova conta"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
      </container>
    </div>
    );
}

export default withRouter(Login);


