import React, { ChangeEvent } from 'react';
import { InputAdornment, TextField } from '@mui/material';

interface MyTextFieldProps {
    placeholder?: string;
    name?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    size?: 'small' | 'medium';
    iconStart?: React.ReactNode;
    iconEnd?: React.ReactNode;
    styles?: React.CSSProperties;
    type?: string;
}

const MyTextField: React.FC<MyTextFieldProps> = ({
    placeholder,
    name,
    type,
    value,
    onChange,
    size,
    iconStart,
    iconEnd,
    styles
}) => {
    return (
        <TextField
            placeholder={placeholder}
            value={value}
            type={type}
            name={name}
            onChange={onChange}
            size={size}
            InputProps={{
                startAdornment: iconStart && (
                    <InputAdornment position="start">
                        {iconStart}
                    </InputAdornment>
                ),
                endAdornment: iconEnd && (
                    <InputAdornment position="end">{iconEnd}</InputAdornment>
                )
            }}
            sx={styles}
        />
    );
};

export default MyTextField;
