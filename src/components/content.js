import React from "react";
import RecipeReviewCard from "./card1";
import { Grid } from "@material-ui/core";
import coffeMakerList from "../constants";
import SimpleDialog from './popup';

export default function Content() {
    const emails = ['username@gmail.com', 'user02@gmail.com'];
    const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const getCoffeMakerCard = coffeMakerObj => {
    return (
      <Grid item xs={12} sm={3} >
        <RecipeReviewCard detail={handleClickOpen} {...coffeMakerObj} />
      </Grid>
    );
  };


  return (
      <div>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose}/>
     
    <Grid container spacing={2}>
      {coffeMakerList.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))}
    </Grid>
    </div>
  );
};
