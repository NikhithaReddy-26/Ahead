import React, { ReactNode } from 'react';
import { Button } from '@mui/material';

interface ButtonProps {
    value: string | ReactNode;
    buttonStyle: 'contained' | 'outlined' | 'text';
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    styles?: React.CSSProperties;
    onClick?: (event:any) => void;
}

const ButtonComp = ({
    value,
    buttonStyle,
    startIcon,
    endIcon,
    onClick,
    styles
}: ButtonProps) => {
    return (
        <Button
            data-testid="clickButton"
            variant={buttonStyle}
            startIcon={startIcon}
            endIcon={endIcon}
            sx={styles}
            onClick={onClick}
        >
            {value}
        </Button>
    );
};

export default ButtonComp;
