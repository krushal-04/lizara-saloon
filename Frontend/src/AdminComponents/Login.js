import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, IconButton, InputAdornment, Alert, Snackbar, SnackbarContent } from '@mui/material';
import { Visibility, VisibilityOff, CheckCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const validUsername = 'admin';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
      setSnackbarOpen(true);
      setTimeout(() => {
        navigate('/admin/Dashboard');
      }, 4000);
    } else {
      setError('Invalid username or password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 6,
          p: 4,
          borderRadius: 4,
          bgcolor: 'background.paper',
          animation: 'fadeIn 1s ease-in-out',
          '@keyframes fadeIn': {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
          }}
        >
          Login
        </Typography>
        {error && <Alert severity="error" sx={{ width: '100%' }}>{error}</Alert>}
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#6a11cb',
              },
              '&:hover fieldset': {
                borderColor: '#2575fc',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#2575fc',
              },
            },
          }}
        />
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#6a11cb',
              },
              '&:hover fieldset': {
                borderColor: '#2575fc',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#2575fc',
              },
            },
          }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            py: 1.5,
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
            color: 'white',
            textTransform: 'uppercase',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0px 6px 30px rgba(0, 0, 0, 0.15)',
              background: 'linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)',
            },
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <SnackbarContent
          sx={{
            backgroundColor: 'green',
            display: 'flex',
            alignItems: 'center',
          }}
          message={
            <Box sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
              <CheckCircle sx={{ mr: 1 }} />
              Login successful! Redirecting...
            </Box>
          }
        />
      </Snackbar>
    </Container>
  );
}
