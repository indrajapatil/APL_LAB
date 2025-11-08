//Implement a program for demonstarting MUI component.
import React from 'react';
import {
  AppBar, Toolbar, Typography, Container, Button, Card, CardContent, CardActions,} from '@mui/material';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Toolbar
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="body1" gutterBottom>
          Welcome to my MUI app
        </Typography>
        <Button variant="contained" color="primary" sx={{ mb: 4 }}>
          Click Me Button
        </Button>

        <Card sx={{ maxWidth: 400, margin: '20px auto', padding: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Card
            </Typography>
            <Typography color="text.secondary">
              This is card.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color="primary">
              Buy Now
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400,align: 'center', margin: '20px auto', padding: 2, backgroundColor: '#f0f0f0' }}>
        <CardContent>
          <Typography variant="h6">
            Dialog
          </Typography>
          <Typography color="text.secondary">
            This is dialog box.
          </Typography>
        </CardContent>
      </Card>
      </Container>
    </div>
  );
}

export default App;