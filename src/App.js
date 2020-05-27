import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Content from './components/content';

// import logo from './logo.svg';
// import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    margin: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div >
      <Grid item container className={classes.root}>
        <Grid item xs={12}>
          <Content/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
