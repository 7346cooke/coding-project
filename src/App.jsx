import React from 'react'
import Dictaphone from './Dictaphone';
import { AppBar, Toolbar, Container, Box, Card, CardContent, Button, Typography } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';

export default function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <AppBar position="static">
        <Toolbar>
          <MicIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Speech Recognition App
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 4 }}>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Welcome to Your App
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              Use the dictaphone below to test speech recognition.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                Speech Recognition
              </Typography>
            </Box>
            <Dictaphone />
            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
              <Button variant="contained" color="primary">Start Listening</Button>
              <Button variant="outlined" color="secondary">Clear</Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
