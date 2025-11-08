import React from "react";
import { ThemeProvider, createTheme, Button, Typography, CssBaseline } from "@mui/material";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f4f6f8",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h4: {
      fontWeight: "bold",
      color: "#1976d2",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <Typography variant="h4" gutterBottom>
          Custom MUI Theme Example
        </Typography>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
      </div>
    </ThemeProvider>
  );
}
export default App;