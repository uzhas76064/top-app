import React from "react";
import {ButtonProps} from "@/components/Button/Button.props";
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({children, appearance}: ButtonProps):JSX.Element => {
    return (
        <button
        className={cn(styles.button, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost'
        })}>
            {children}
        </button>
    )
}