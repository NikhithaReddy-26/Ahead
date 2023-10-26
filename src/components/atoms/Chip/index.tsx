import { Chip, ChipProps as MuiChipProps } from '@mui/material';

export interface ChipProps extends MuiChipProps {}
export const ChipComponent = ({ children, ...rest }: ChipProps) => {
    return <Chip {...rest}>{children}</Chip>;
};
