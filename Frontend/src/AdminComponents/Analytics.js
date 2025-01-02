import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for the chart
const data = [
  { name: 'Haircuts', value: 40 },
  { name: 'Coloring', value: 25 },
  { name: 'Styling', value: 15 },
  { name: 'Treatments', value: 20 },
];

export default function Analytics() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Salon Analytics
      </Typography>

      <Grid container spacing={4}>
        {/* Key Metrics */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Appointments</Typography>
              <Typography variant="h4">120</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Revenue</Typography>
              <Typography variant="h4">$8,500</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Customer Retention</Typography>
              <Typography variant="h4">85%</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Chart Section */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Service Popularity
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Recent Activities */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Activities
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="John Doe - Haircut" secondary="2 hours ago" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Jane Smith - Coloring" secondary="3 hours ago" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Michael Brown - Styling" secondary="5 hours ago" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
