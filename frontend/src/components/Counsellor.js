import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';

function AddCounsellor() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      id: data.get('id'),
      name: data.get('name'),
      qualification: data.get('qualification'),
      age: data.get('age'),
      department: data.get('department'),
    });

    // Assume form submission is successful
    setIsSubmitted(true);
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div
          style={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* You can replace this avatar with an icon representing a counselor */}
            <PersonAddRoundedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Counsellor
          </Typography>
          {isSubmitted ? (
            <Typography variant="body1" color="primary" style={{ marginTop: 20 }}>
              Counsellor details added successfully!
            </Typography>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ marginTop: 20 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="id"
                label="Counsellor ID"
                name="id"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Counsellor Name"
                name="name"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="qualification"
                label="Qualification"
                name="qualification"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                type="number"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="department"
                label="Department"
                name="department"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ marginTop: 20 }}
              >
                Add Counsellor
              </Button>
            </form>
          )}
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default AddCounsellor;