import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    }
  }));
export default function SimpleRating(props) {
    const classes = useStyles();
  const [value, setValue] = React.useState(props.value);

  return (
    <div >
    <Grid container alignItems="center" justify="space-between">
    <Grid item>
        <Rating
          name="simple-controlled"
          value={value}
          readOnly={true}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        </Grid>
        {value}
        </Grid>
    </div>
  );
}