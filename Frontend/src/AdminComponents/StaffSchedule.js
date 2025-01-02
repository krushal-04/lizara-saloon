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

// Sample data for staff schedules
const staffSchedules = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'Stylist',
    schedule: '9:00 AM - 5:00 PM',
    days: 'Monday to Friday',
  },
  {
    id: 2,
    name: 'Bob Smith',
    role: 'Color Specialist',
    schedule: '10:00 AM - 6:00 PM',
    days: 'Tuesday to Saturday',
  },
  {
    id: 3,
    name: 'Catherine Lee',
    role: 'Receptionist',
    schedule: '8:00 AM - 4:00 PM',
    days: 'Monday to Friday',
  },
];

export default function StaffSchedule() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Staff Schedule
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper sx={{ padding: 2 }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Schedule</TableCell>
                    <TableCell>Days</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {staffSchedules.map((staff) => (
                    <TableRow key={staff.id}>
                      <TableCell>{staff.name}</TableCell>
                      <TableCell>{staff.role}</TableCell>
                      <TableCell>{staff.schedule}</TableCell>
                      <TableCell>{staff.days}</TableCell>
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
                          Remove
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
