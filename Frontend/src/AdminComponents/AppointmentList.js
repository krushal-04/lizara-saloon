import React from 'react';
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

// Sample data for appointments
const appointments = [
  {
    id: 1,
    customer: 'John Doe',
    service: 'Haircut',
    date: '2024-12-27',
    time: '10:00 AM',
    status: 'Completed',
  },
  {
    id: 2,
    customer: 'Jane Smith',
    service: 'Coloring',
    date: '2024-12-27',
    time: '11:00 AM',
    status: 'Pending',
  },
  {
    id: 3,
    customer: 'Michael Brown',
    service: 'Styling',
    date: '2024-12-28',
    time: '01:00 PM',
    status: 'Cancelled',
  },
];

export default function AppointmentList() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Appointment List
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper sx={{ padding: 2 }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Customer</TableCell>
                    <TableCell>Service</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell>{appointment.customer}</TableCell>
                      <TableCell>{appointment.service}</TableCell>
                      <TableCell>{appointment.date}</TableCell>
                      <TableCell>{appointment.time}</TableCell>
                      <TableCell>{appointment.status}</TableCell>
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
                          Cancel
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
