import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center'
    }
  }));
export default function SimpleRating() {
    const classes = useStyles();
  const [value, setValue] = React.useState(2);

  return (
    <div className={classes.root}>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        {value}
    </div>
  );
}