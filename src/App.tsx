import React from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Download from "./pages/Download";
import Upload from "./pages/Upload";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#121212", // Dark background color
            paper: "#1E1E1E", // Slightly lighter color for paper-like components
        },
        text: {
            primary: "#ffffff", // White text color
            secondary: "#b0b0b0", // Lighter gray text for less important text
        },
    },
});

function App() {
    return (
        <AuthProvider>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />

                <Navbar />
                <Routes>
                    <React.Fragment>
                        <Route path="/" element={<Landing />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/download"
                            element={
                                <ProtectedRoute>
                                    <Download />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/upload"
                            element={
                                <ProtectedRoute>
                                    <Upload />
                                </ProtectedRoute>
                            }
                        />
                    </React.Fragment>
                </Routes>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
