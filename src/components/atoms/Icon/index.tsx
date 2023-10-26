import { SxProps } from "@mui/material"

export interface IconProps {
    height?:string;
    width?:string;
    sxProps?: SxProps;
    alt?: string;
    src?: string;
    onClick?: ()=>void;
}

export const Icon =(props:IconProps)=>{
    return(
        <img {...props} />
    )
}