import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Chocolate = ({ chocolate, onAddToPack }) => {
  const { name, price, src } = chocolate;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={name} height="140" image={src} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onAddToPack(chocolate)}>
          Add
        </Button>
      </CardActions>
    </Card>
  );
};

export default Chocolate;
