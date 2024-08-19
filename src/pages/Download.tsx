import React, { useState, ChangeEvent } from "react";
import {
    Container,
    Typography,
    Button,
    TextField,
    Paper,
    Box,
} from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";

const Download: React.FC = () => {
    const [fileLink, setFileLink] = useState<string>("");

    const handleDownload = (): void => {
        if (fileLink) {
            // Implement file download logic here
            console.log("Downloading file from link:", fileLink);
            // Example: window.location.href = fileLink;
        }
    };

    return (
        <Container
            component="main"
            maxWidth="sm"
            sx={{ marginTop: 8, padding: 4 }}
        >
            <Typography
                variant="h4"
                align="center"
                sx={{ marginBottom: 4, color: "#E0E0E0" }}
            >
                Download Your File
            </Typography>

            <Paper
                elevation={6}
                sx={{
                    padding: 4,
                    backgroundColor: "#1E1E1E",
                    borderRadius: 2,
                }}
            >
                <Box
                    component="form"
                    noValidate
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="File Link"
                        name="fileLink"
                        autoComplete="fileLink"
                        variant="outlined"
                        value={fileLink}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setFileLink(e.target.value)
                        }
                        sx={{
                            input: { color: "#E0E0E0" },
                            label: { color: "#B0B0B0" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#B0B0B0",
                                },
                            },
                        }}
                    />
                    <Button
                        onClick={handleDownload}
                        variant="contained"
                        color="primary"
                        sx={{
                            marginTop: 2,
                            backgroundColor: "#1E88E5",
                            "&:hover": { backgroundColor: "#1565C0" },
                        }}
                        startIcon={<DownloadIcon />}
                    >
                        Download
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Download;
