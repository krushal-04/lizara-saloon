import React from 'react';
import {Card,CardContent,CardMedia,Typography,Button,CardActionArea,CardActions,Rating} from '@mui/material';


export default function ProductCard({ product }) {

    return (
        <Card sx={{
            height: "100%",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 3,
            borderRadius: '10px',
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{
                        height: 400,
                        objectFit: 'cover',
                        borderRadius: '10px 10px 0 0',
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {product.description}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        {product.price}
                    </Typography>
                    <Rating value={product.rating} readOnly precision={0.5} />
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button
                    size="medium"
                    variant="contained"
                    sx={{ backgroundColor: 'primary.main', color: 'white' }}
                >
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}