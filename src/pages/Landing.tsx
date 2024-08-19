import { Container, Typography, Button, Grid, Paper } from "@mui/material";

const Landing = () => {
    return (
        <Container
            component="main"
            maxWidth="lg"
            sx={{ marginTop: 8, padding: 4 }}
        >
            <Typography
                variant="h2"
                align="center"
                sx={{ marginBottom: 4, color: "#E0E0E0" }}
            >
                Welcome to Magnet
            </Typography>
            <Typography
                variant="h5"
                align="center"
                sx={{ marginBottom: 4, color: "#B0B0B0" }}
            >
                The ultimate peer-to-peer file sharing solution for seamless and
                secure transfers.
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper
                        elevation={3}
                        sx={{ padding: 4, backgroundColor: "#1E1E1E" }}
                    >
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{ color: "#E0E0E0" }}
                        >
                            Fast & Efficient Transfers
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#B0B0B0" }}>
                            Enjoy blazing-fast file transfers with Magnet's
                            optimized peer-to-peer technology. No more waiting
                            for uploads and downloads—just quick and efficient
                            sharing, anytime, anywhere.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper
                        elevation={3}
                        sx={{ padding: 4, backgroundColor: "#1E1E1E" }}
                    >
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{ color: "#E0E0E0" }}
                        >
                            Secure & Private
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#B0B0B0" }}>
                            With end-to-end encryption, your files are safe and
                            private. Magnet ensures that only you and your
                            intended recipients have access to your shared
                            content.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            <Typography
                variant="h5"
                align="center"
                sx={{ marginTop: 6, marginBottom: 4, color: "#B0B0B0" }}
            >
                Ready to experience the future of file sharing?
            </Typography>
            <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                    display: "block",
                    margin: "0 auto",
                    backgroundColor: "#1E88E5",
                    "&:hover": { backgroundColor: "#1565C0" },
                }}
            >
                Get Started
            </Button>
        </Container>
    );
};

export default Landing;
