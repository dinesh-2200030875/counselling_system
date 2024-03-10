import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import EventIcon from '@mui/icons-material/Event';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function AppointmentBooking() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      fullName: data.get('fullName'),
      email: data.get('email'),
      phoneNumber: data.get('phoneNumber'),
      preferredDate: data.get('preferredDate'),
      preferredTime: data.get('preferredTime'),
      reason: data.get('reason'),
    });
    // You can add further logic here to handle the appointment booking, like sending the details to a server or performing validations.

    // Set the submitted state to true upon successful form submission
    setSubmitted(true);
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <EventIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Book an Appointment
          </Typography>
          {!submitted ? (
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                name="fullName"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="preferredDate"
                label="Preferred Date"
                name="preferredDate"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="preferredTime"
                label="Preferred Time"
                name="preferredTime"
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                multiline
                rows={4}
                id="reason"
                label="Reason for Appointment"
                name="reason"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Book Appointment
              </Button>
            </Box>
          ) : (
            <Box sx={{ mt: 3 }}>
              <Typography variant="body1" align="center">
                Thank you for booking your appointment!
              </Typography><Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/" variant="body2">
                    Go back to Home
                  </Link>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default AppointmentBooking;