import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Activity } from '../app/models/activity';

interface Props
{
    openActivityForm: () => void
}

function Navbar({ openActivityForm }: Props)
{
    return (
        <Box>
            <AppBar position="static" sx={{ backgroundImage: 'linear-gradient(135deg, rgb(24, 42, 115) 0%, rgb(33, 138, 174) 69%, rgb(32, 167, 172) 89%)' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img src="/assets/Images/logo.png" alt="Custom Icon" style={{ height: 36, width: 36 }} />
                    </IconButton>
                    <Typography variant="h6">
                        Reactivities
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{ mx: 2 }}
                        onClick={openActivityForm}
                    >Create Activity</Button>
                    <Button color="inherit" sx={{ float: 'right' }}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
