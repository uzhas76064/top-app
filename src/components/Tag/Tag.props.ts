import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size: 'small' | 'medium'
    href?:string
    color: 'red' | 'green' | 'primary' | 'ghost'
}