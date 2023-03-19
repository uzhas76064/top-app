import {ReactNode} from "react";

export interface HeadersProps {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode;
}