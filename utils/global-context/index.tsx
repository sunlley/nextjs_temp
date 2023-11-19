import {createContext, PropsWithChildren, useState} from "react";


export const ButterContext = createContext<any>({})
const GlobalContext = ({children}: PropsWithChildren) => {

    return (
        <ButterContext.Provider value={{}}>
            {children}
        </ButterContext.Provider>
    )
}

export default GlobalContext;
