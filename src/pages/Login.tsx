import React, { useState } from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    Paper,
    Box,
} from "@mui/material";
import { Link } from "react-router-dom";

import { validateEmail } from "../utils/utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [loginError, setLoginError] = useState<string>("");

    const handleLogin = async (
        e: React.MouseEvent<HTMLButtonElement>
    ): Promise<void> => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setEmailError("Invalid email address");
            return;
        }

        // Handle login logic here
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error: any) {
            setLoginError(error.message);
        }
    };

    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 8,
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    padding: 3,
                    width: "100%",
                    backgroundColor: "#1E1E1E",
                    color: "white",
                }}
            >
                <Typography
                    variant="h5"
                    align="center"
                    sx={{ color: "#E0E0E0" }}
                >
                    Login
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        variant="outlined"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                        }
                        type="email"
                        sx={{
                            input: { color: "#E0E0E0" },
                            label: { color: "#B0B0B0" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#B0B0B0" },
                            },
                        }}
                        error={!!emailError}
                        helperText={emailError}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                        }
                        sx={{
                            input: { color: "#E0E0E0" },
                            label: { color: "#B0B0B0" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#B0B0B0" },
                            },
                        }}
                    />
                    {loginError && (
                        <Typography color="error">{loginError}</Typography>
                    )}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: 2,
                            backgroundColor: "#1E88E5",
                            "&:hover": { backgroundColor: "#1565C0" },
                        }}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                            handleLogin(e)
                        }
                    >
                        Login
                    </Button>
                    <Button
                        component={Link}
                        to="/register"
                        fullWidth
                        variant="text"
                        color="inherit"
                        sx={{ mt: 2, color: "#B0B0B0" }}
                    >
                        Don't have an account? Register
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Login;
