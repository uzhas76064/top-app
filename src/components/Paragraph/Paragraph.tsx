import React from "react";
import styles from "./Paragraph.module.css";
import cn from "classnames";
import {ParagraphProps} from "./Paragraph.props";

export const Paragraph = ({children, size, ...props}: ParagraphProps):JSX.Element => {
    return (
        <p className={cn(styles.paragraph, {
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.large]: size === 'large'
        })}>
            {children}
        </p>
    )
}