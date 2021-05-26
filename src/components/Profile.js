import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography'



const useStyles = makeStyles({
  section: {
    marginTop: '15%'
  },

  card: {
    display: 'flex',
  },

  avatar: {
    marginLeft: 15,
    marginTop:25
  },

  paper: {
    width: 350,
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

});

export default function Profile() {
  const classes = useStyles();


  return (
    <Container component="main" maxWidth="xs" className={classes.section}>
      <Grid item xs={12} md={12}>
        <Card className={classes.card}>
          <Avatar variant="circle" className={classes.avatar}>
            <img src={localStorage.getItem("avatar")} />
          </Avatar>
          <CardContent component="div">
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">Имя пользователя</Typography>
              <Typography component="h2">Информация о пользователе</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}
