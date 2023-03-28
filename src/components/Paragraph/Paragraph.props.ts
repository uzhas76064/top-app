import {DetailedHTMLProps, HTMLAttributes, HTMLProps} from "react";

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size: 'small' | 'medium' | 'large'
}