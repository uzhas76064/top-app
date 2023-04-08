import React from "react";
import styles from "./Footer.module.css";
import {FooterProps} from "./Footer.props";

export const Footer = ({...props}: FooterProps): JSX.Element => {
    return (
        <footer {...props}>
            Footer
        </footer>
    )
}