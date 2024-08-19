import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: "black" }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Magnet
                </Typography>
                <Button component={Link} to="/login" color="inherit">
                    Login
                </Button>
                <Button
                    component={Link}
                    to="/register"
                    color="inherit"
                    style={{ marginLeft: 10 }}
                >
                    Register
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
