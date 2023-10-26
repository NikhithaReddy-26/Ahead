import React from 'react';
import { Typography } from '@mui/material';

interface TypoProps {
    value: string | number;
    styles?: React.CSSProperties;
}

const MyTypography = ({ value, styles }: TypoProps) => {
    return <Typography children={value} sx={styles} />;
};

export default MyTypography;
