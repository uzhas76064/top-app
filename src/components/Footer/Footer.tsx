import React from "react";
import styles from "./Footer.module.css";
import {FooterProps} from "./Footer.props";
import cn from "classnames"

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div className={styles.copyright}>OwlTop © 2020 - 2021 Все права защищены</div>
            <a href={"#"} className={styles.agreement}>Пользовательское соглашение</a>
            <a href={"#"} className={styles.confidential}>Политика конфиденциальности</a>
        </footer>
    )
}