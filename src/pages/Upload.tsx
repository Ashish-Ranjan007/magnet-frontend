import React, { useState, ChangeEvent } from "react";
import {
    Container,
    Typography,
    Button,
    Paper,
    Box,
    TextField,
} from "@mui/material";
import { UploadFile } from "@mui/icons-material";

const Upload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploadUrl, setUploadUrl] = useState<string>("");

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    const handleUpload = (): void => {
        if (file) {
            // Implement file upload logic here and generate URL
            console.log("Uploading file:", file);
            const generatedUrl = `https://yourdomain.com/download/${file.name}`; // Example URL
            setUploadUrl(generatedUrl);
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
                Upload Your File
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
                    <input
                        accept="*/*"
                        id="upload-file"
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                    <label htmlFor="upload-file">
                        <Button
                            component="span"
                            variant="contained"
                            color="primary"
                            startIcon={<UploadFile />}
                            sx={{
                                marginBottom: 2,
                                backgroundColor: "#1E88E5",
                                "&:hover": {
                                    backgroundColor: "#1565C0",
                                },
                            }}
                        >
                            Choose File
                        </Button>
                    </label>
                    {file && (
                        <>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "#B0B0B0",
                                    marginBottom: 2,
                                    textAlign: "center",
                                }}
                            >
                                Selected file: {file.name}
                            </Typography>
                            <Button
                                onClick={handleUpload}
                                variant="contained"
                                color="primary"
                                sx={{
                                    backgroundColor: "#1E88E5",
                                    "&:hover": { backgroundColor: "#1565C0" },
                                    marginBottom: 2,
                                }}
                            >
                                Upload
                            </Button>
                        </>
                    )}
                    {uploadUrl.length > 0 && (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: 4,
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="outlined"
                                value={uploadUrl}
                                InputProps={{
                                    readOnly: true,
                                    sx: {
                                        color: "#E0E0E0",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#B0B0B0",
                                        },
                                    },
                                }}
                                sx={{ marginBottom: 2 }}
                            />
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#B0B0B0",
                                    textAlign: "center",
                                }}
                            >
                                Share this link to allow others to download your
                                file.
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Paper>
        </Container>
    );
};

export default Upload;
