import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#9932cc',
        },
        secondary: {
            main: amber[500],
        },
        common: {
            gray: '#eaeaea',
        },
    },
    typography: {
        color: '#eaeaea',
        fontFamily: 'Quicksand',
    },
});

export default theme;
