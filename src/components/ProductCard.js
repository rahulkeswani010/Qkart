import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  CardActionArea,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card" >
      <CardActionArea className="card-actions">
        <CardMedia component="img" height="140" image={product.image} alt={product.name} />
        <CardContent>
          <Typography>
            {product.name}
          </Typography>
          <Typography paddingY="0.5rem" fontWeight="700">
            ${product.cost}
          </Typography>
          <Rating name="read-only" value={product.rating} precision={0.5} readOnly />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button fullWidth variant="contained" className="card-button" startIcon={<AddShoppingCartOutlined/>} onClick={handleAddToCart}>Add To Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
