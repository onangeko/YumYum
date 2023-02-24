import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box } from '@mui/material';
import Image from './Image';
import logoYumYum from '../assets/images/YumYum.png';

// ----------------------------------------------------------------------

Logo.propTypes = {
    disabledLink: PropTypes.bool,
    sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {

    const logo = (
        <Box sx={{ width: 40, height: 40, ...sx }}>
            <Image src={logoYumYum} sx={{width:240, mr: 2.5 }} />
        </Box>
    );

    if (disabledLink) {
        return <>{logo}</>;
    }

    return <RouterLink to="/">{logo}</RouterLink>;
}
