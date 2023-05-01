import React, {createContext, PropsWithChildren, ReactNode, useState} from "react";
import {MenuItem} from "../interfaces/menu.interfaces";
import {TopLevelCategory} from "../interfaces/page.interface";

export interface IAppContext {
    menu: MenuItem[],
    firstCategory: TopLevelCategory,
    setMenu?: (newMenu: MenuItem[]) => void
}

export const AppContext = createContext<IAppContext>({menu: [], firstCategory: TopLevelCategory.Courses})

export const AppContextProvider = ({menu, firstCategory, children}: PropsWithChildren<IAppContext>):JSX.Element => {
    const [menuState, setMenuState] = useState<MenuItem[]>(menu)
    const setMenu = (newMenu: MenuItem[]) => {
        setMenuState(newMenu)
    }

    return (
        <AppContext.Provider value={{menu: menuState, setMenu, firstCategory}}>
            {children}
        </AppContext.Provider>
    )
}