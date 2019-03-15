import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

export default props => (
    // <div>
    // </div>

    <AppBar position="static">
        <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton> */}
            <Typography variant="headline" color="inherit" gutterBottom>
                News
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
    </AppBar>
)