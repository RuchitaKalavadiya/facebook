import MuiAppBar from '@mui/material/AppBar';
import { Notification } from "../../../assets/headerLogo.jsx";
import { Toolbar, styled, Grid } from '@mui/material';
import user from "../../../assets/user.jpg";


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    background: 'transparent',
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    color: 'darkslategray',
    ...(open && {
        width: '100%',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


const AppBarComponent = () => {
    return <>
        <AppBar position='fixed' elevation="0">
            <Toolbar>
                <Grid lg justifyContent="end" display="flex">
                    <div className="facebook-header-icon-wrapper">
                        <div className="facebook-header-icon">
                            <Notification />
                        </div>
                    </div>
                    <div className="facebook-header-icon-wrapper">
                        <img src={user} className="facebook-header-user" alt='facebook-header-user' />
                    </div>
                </Grid>
            </Toolbar>
        </AppBar>
    </>
}

export default AppBarComponent