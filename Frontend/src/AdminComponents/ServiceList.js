import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import axios from 'axios';


export default function ServiceList() {
  // console.log(service);
  const [services, setServices] = React.useState([]);

  useEffect(() => {
    fetchData1();
  }, []);
  const fetchData1 = async () => {
    try {
      await axios.get("http://localhost:5050/Services/").then((response) => {
        setServices(response.data);
        console.log(response.data);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // const image = `./images/${services.image}`;
  return (
    
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Service List
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper sx={{ padding: 2 }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    
                    <TableCell>Image</TableCell>
                    <TableCell>Service Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {services?.Service?.map((service) => (
                    
                    <TableRow key={service.id}>
                      
                      
                      <TableCell 
                      sx={{
                        display: "flex",
                        alignItems: "center",

                      }}> <img
                        src={`../images/${service.image}`}
                        alt={service.name}
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: "1%",
                          marginBottom: 8,
                        }}
                      />
                      </TableCell>
                      <TableCell>
                      <Typography variant="h6">{service.name}</Typography>
                      </TableCell>
                      
                      <TableCell>₹{service.price}</TableCell>
                      {/* <TableCell>{service.duration}</TableCell> */}
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          sx={{ marginRight: 1 }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
