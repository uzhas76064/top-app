import React from "react";
import {ButtonProps} from "./Button.props";
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({children, appearance,arrow, className, ...props}: ButtonProps):JSX.Element => {
    return (
        <button
        className={cn(styles.button, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost'
        })} {...props}>
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow === 'down'})}>
                <img src="Vector.svg" alt="arrow"/></span>}
        </button>
    )
}