import { createTheme} from '@material-ui/core/styles';
import { green, common} from '@material-ui/core/colors';

 export const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
        background: {
            default: common,
        },
    },
});