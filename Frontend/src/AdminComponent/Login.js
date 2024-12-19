import React, { useState,useNavigate } from 'react';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import { Link } from 'react-router-dom'; // Use useNavigate for programmatic navigation

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if username and password are correct
    if (username === 'krushal' && password === 'krushal123') {
      setError('');
      setShowPopup(true);
      setUsername('');
      setPassword('');

      // Redirect after 2 seconds
      setTimeout(() => {
       window// Programmatic navigation to /dashboard
      }, 2000);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.header}>Login</h2>

        {/* Material-UI Snackbar for the popup */}
        <Snackbar
          open={showPopup}
          autoHideDuration={2000}
          onClose={() => setShowPopup(false)}
        >
          <Alert severity="success" sx={{ width: '100%' }}>
            Login Successful!
          </Alert>
        </Snackbar>

        {error && <Alert severity="error">{error}</Alert>}

        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          {/* <Link to="/admin/Dashboard"> */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={styles.submitBtn}
          >
            Login
          </Button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f7fc',
  },
  formContainer: {
    background: '#ffffff',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '400px',
  },
  header: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    marginBottom: '15px',
  },
  submitBtn: {
    marginTop: '20px',
  },
};

export default LoginForm;
