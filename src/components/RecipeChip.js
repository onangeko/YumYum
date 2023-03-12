import React from 'react';
import Chip from '@mui/material/Chip';

export default function RecipeChip(props) {
    const { label, color } = props;

    return (
        <Chip label={label} style={{ marginRight: 5, backgroundColor: color }} />
    );
}
