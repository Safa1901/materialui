import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
// import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';




const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function Login({authenticate, email, onEmailChange, password, onPasswordChahge}) {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar} src="">
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Войти в профиль
                </Typography>
                <form className={classes.form} onSubmit={authenticate} noValidate>
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email" 
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={onEmailChange}
                    />
                    
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Пароль" 
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={onPasswordChahge}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Запомнить?"
                    />
                    <Button
                        type="submit"
                        size="large"
                        fullWidth
                        variant="contained"
                        color="secondary"
                    >
                        Войти
                    </Button>
                    <Link to="/register">
                        <p>"Нет учетной записи? Зарегистрируйся"</p>
                    </Link>
                </form>
            </div>
        </Container>
    );
}
