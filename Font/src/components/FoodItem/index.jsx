import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export default function FoodItem(props) {
  const item = props.item;
  const linkToDetail = `detail/${item.id}`;
  return (
    <div class="mr-3 mb-5" style={{ marginLeft: "5px" }}>
      <Card sx={{ maxWidth: 370, bgcolor: "#dee2e6" }}>
        <CardActionArea>
          <CardMedia component="img" height="350" src={item.food_img} />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              {item.title}
              <Button>VND {item.price}</Button>
            </Typography>
            <Typography variant="h4" color="text.secondary">
              {item.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            style={{ fontSize: 15 }}
            variant="contained"
            size="medium"
            color="warning"
          >
            <Link
              data={item}
              style={{ textDecoration: "none" }}
              to={linkToDetail}
            >
              Detail
            </Link>
          </Button>
          <Button
            style={{ fontSize: 15, marginRight: "50px" }}
            variant="contained"
            size="medium"
          >
            Add to card
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
