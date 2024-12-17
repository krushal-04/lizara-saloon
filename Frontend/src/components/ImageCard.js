import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const cards = [
  {
    id: 1,
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
    image: '/images/hair.jpg',
    alt: 'green iguana',
  },
  {
    id: 2,
    title: 'Gecko',
    description:
      'Geckos are small lizards found in warm climates throughout the world. They have a unique ability to climb smooth surfaces.',
    image: '/images/card2.jfif',
    alt: 'colorful gecko',
  },
  {
    id: 3,
    title: 'Chameleon',
    description:
      'Chameleons are known for their ability to change color and their elongated tongues used to catch prey.',
    image: '/images/card3.jfif',
    alt: 'chameleon',
  },
  {
    id: 4,
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
    image: '/images/hair.jpg',
    alt: 'green iguana',
  },
  {
    id: 5,
    title: 'Gecko',
    description:
      'Geckos are small lizards found in warm climates throughout the world. They have a unique ability to climb smooth surfaces.',
    image: '/images/card2.jfif',
    alt: 'colorful gecko',
  },
  {
    id: 6,
    title: 'Chameleon',
    description:
      'Chameleons are known for their ability to change color and their elongated tongues used to catch prey.',
    image: '/images/card3.jfif',
    alt: 'chameleon',
  },
  {
    id: 7,
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
    image: '/images/hair.jpg',
    alt: 'green iguana',
  },
  {
    id: 8,
    title: 'Gecko',
    description:
      'Geckos are small lizards found in warm climates throughout the world. They have a unique ability to climb smooth surfaces.',
    image: '/images/card2.jfif',
    alt: 'colorful gecko',
  },
  {
    id: 9,
    title: 'Chameleon',
    description:
      'Chameleons are known for their ability to change color and their elongated tongues used to catch prey.',
    image: '/images/card3.jfif',
    alt: 'chameleon',
  },
  {
    id: 10,
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
    image: '/images/hair.jpg',
    alt: 'green iguana',
  },
  {
    id: 11,
    title: 'Gecko',
    description:
      'Geckos are small lizards found in warm climates throughout the world. They have a unique ability to climb smooth surfaces.',
    image: '/images/card2.jfif',
    alt: 'colorful gecko',
  },
  {
    id: 12,
    title: 'Chameleon',
    description:
      'Chameleons are known for their ability to change color and their elongated tongues used to catch prey.',
    image: '/images/card3.jfif',
    alt: 'chameleon',
  },
];

export default function ImageCards() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          // backgroundColor: 'blanchedalmond',

          padding: 2,

        }}>

        <Grid container spacing={3} justifyContent="center" maxWidth={1800}>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={3} key={card.id}>
              <Card sx={{
                   maxWidth: 345,
                  margin: '0 auto',
                  borderRadius: "30px",
                  // display: 'flex',
                  // flexDirection: 'column',
                  height: "100%",
                 
                }}>
                <CardMedia

                  component="img"
                  alt={card.alt}
                  image={card.image}
                  sx={{
                    height: 300,
                    objectFit: '-moz-initial',
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {card.description}
                  </Typography>
                </CardContent>
                {/* <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
