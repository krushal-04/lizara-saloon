import React from 'react'
import ImgMediaCard from './ImageCard';
import { Box, CardContent } from '@mui/material';
import Carousel from './Carousel';
const Home = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Carousel />
      <Box mt={3} width="100%">
        <CardContent>
          <ImgMediaCard />
        </CardContent>
      </Box>
    </div>
  )
}

export default Home