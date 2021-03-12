import { createMuiTheme } from '@material-ui/core/styles';

import typography from './typography';
import overrides from './overrides/index';

const theme = createMuiTheme({
    typography,
    overrides,
    zIndex: {
        appBar: 1200,
        drawer: 1100
    }
});

export default theme;
