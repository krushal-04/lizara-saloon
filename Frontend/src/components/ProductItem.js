import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions, Rating } from '@mui/material';

export default function ProductCard({ product }) {
    const image = `./images/${product.image}`;

    return (
        <Card
            sx={{
                justifyContent: "space-between",
                boxShadow: 3,
                borderRadius: "10px",
                display: 'flex',
                flexDirection:'column',
                height: '100%',
                '&:hover': {
                    boxShadow: 5,
                    transform: "scale(1.02)",
                    transition: "box-shadow 0.3s ease, transform 0.3s ease",
                    
                },
                
               
            }}
        >
            <CardActionArea>
                <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
                    <CardMedia
                        component="img"
                        image={image}
                        alt={product.name}
                        sx={{
                            height: 350,
                            objectFit: 'cover',
                            borderRadius: '10px 10px 0 0',
                        }}
                    />
                </Link>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        textAlign="center"
                        sx={{
                            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                        }}
                    >
                        {product.name}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            mb: 1,
                            fontSize: { xs: '0.8rem', sm: '1rem' },
                        }}
                    >
                        {product.desc}
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.primary"
                        sx={{
                            fontSize: { xs: '1rem', sm: '1.25rem' },
                        }}
                    >
                        Price: {product.price}
                    </Typography>
                    <Rating
                        value={product?.rating}
                        readOnly
                        precision={0.5}
                        sx={{ mt: 1, fontSize: { xs: '1rem', sm: '1.5rem' } }}
                    />
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button
                    size="medium"
                    variant="contained"
                    sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        height: 30,
                        width: 300,
                        fontSize: { xs: '0.8rem', sm: '1rem' },
                        transition: "background-color 0.3s ease, transform 0.3s ease",
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                            transform: "scale(1.05)",
                        },
                    }}
                >
                    Add to Cart
                </Button>

                <Button
                    size="medium"
                    variant="contained"
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        height: 30,
                        width: 300,
                        fontSize: { xs: '0.8rem', sm: '1rem' },
                        transition: "background-color 0.3s ease, transform 0.3s ease",
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                            transform: "scale(1.05)",
                        },
                    }}
                >
                    Buy Now
                </Button>
            </CardActions>
        </Card>
    );
}
