import React from "react";
import styles from "./Tag.module.css"
import {TagProps} from "./Tag.props";
import cn from "classnames"

export const Tag = ({children, size, href, color, ...props}: TagProps):JSX.Element => {
    return (
        <p className={cn(styles.tag, {
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.ghost]: color === 'ghost',
            [styles.red]: color === 'red',
            [styles.green]: color === 'green',
            [styles.primary]: color === 'primary',
        })}>
            {href ? children: <a href={href}>{children}</a>}
        </p>
    )
}