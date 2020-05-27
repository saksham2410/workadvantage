import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from "@material-ui/core/Button";
import SimpleRating from './rating';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: 450,
    overflow: 'scroll',
    borderRadius: 10,
    borderWidth: 5
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  paper: {
      flex:1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));


export default function RecipeReviewCard(props) {
    
  const classes = useStyles();
  const { avatarUrl, title, subtitle, description, imageUrl, detail, rating } = props;

  return (
    <Card className={classes.root} border={3}  >
      <CardMedia onClick={
        ()=> {
            detail()
        }
    }
        className={classes.media}
        image={imageUrl}
      />
      <CardContent>
      <Grid item xs={12}>
      <Grid container alignItems="center">
      <Grid item xs={6}><h3>{title}</h3></Grid>
      <Grid item xs={6}><SimpleRating value={rating}/></Grid>
      </Grid>
      </Grid>
      <h6>{subtitle}</h6>
        <Typography variant="body2" color="textSecondary" component="p">
        {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Grid container alignItems="center" justify="space-between">
      <Grid item>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        </Grid>
        <Grid item xs={3}>
        <Button variant="contained" onClick={
            ()=> {
                detail()
            }
        } size="small" className={classes.paper}>BUY NOW</Button>
        </Grid></Grid>
      </CardActions>
    </Card>
  );
}