import {
    Container,
    Typography,
    TextField,
    Button,
    Paper,
    Box,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail } from "../utils/utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const Register = () => {
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [confirmPasswordError, setConfirmPasswordError] =
        useState<string>("");
    const [registerError, setRegisterError] = useState<string>("");

    const handleRegister = async (
        e: React.MouseEvent<HTMLButtonElement>
    ): Promise<void> => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setEmailError("Invalid email address");
        }
        if (password.length < 8) {
            setPasswordError("Password should have atleast 8 characters.");
        }
        if (password !== confirmPassword) {
            setPasswordError("Password and confirm password do not match");
            setConfirmPasswordError(
                "Password and confirm password do not match"
            );
        }

        // Handle register logic here
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error: any) {
            setRegisterError(error.message);
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
                sx={{ padding: 3, width: "100%", backgroundColor: "#1E1E1E" }}
            >
                <Typography
                    variant="h5"
                    align="center"
                    sx={{ color: "#E0E0E0" }}
                >
                    Register
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
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!emailError}
                        helperText={emailError}
                        sx={{
                            input: { color: "#E0E0E0" },
                            label: { color: "#B0B0B0" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#B0B0B0" },
                            },
                        }}
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
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!passwordError}
                        helperText={passwordError}
                        sx={{
                            input: { color: "#E0E0E0" },
                            label: { color: "#B0B0B0" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#B0B0B0" },
                            },
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        autoComplete="new-password"
                        variant="outlined"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={!!confirmPasswordError}
                        helperText={confirmPasswordError}
                        sx={{
                            input: { color: "#E0E0E0" },
                            label: { color: "#B0B0B0" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#B0B0B0" },
                            },
                        }}
                    />
                    {registerError && (
                        <Typography color="error">{registerError}</Typography>
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
                        onClick={(e) => handleRegister(e)}
                    >
                        Register
                    </Button>
                    <Button
                        component={Link}
                        to="/login"
                        fullWidth
                        variant="text"
                        color="inherit"
                        sx={{ mt: 2, color: "#B0B0B0" }}
                    >
                        Already have an account? Login
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Register;
