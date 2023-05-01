import React from "react";
import styles from './Sidebar.module.css';
import {SidebarProps} from "./Sidebar.props";
import {Menu} from "../Menu/Menu";

export const Sidebar = ({...props}: SidebarProps):JSX.Element => {
    return (
        <aside {...props}>
            <Menu/>
        </aside>
    )
}