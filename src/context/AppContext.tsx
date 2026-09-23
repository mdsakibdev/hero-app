"use client"
import { IAppType } from '@/typescript/app.type';
import React, {  createContext, ReactNode, useState } from 'react';


type TAppContext = {
    installedApp: IAppType[];
    setInastallApp: React.Dispatch<React.SetStateAction <IAppType[]>>
}

export const AppContext = createContext<TAppContext>({
    installedApp: [],
    setInastallApp: () => {}
})

const AppProvider = ({ children }: {children: ReactNode}) => {
    const [installedApp, setInastallApp] = useState<IAppType[]>([])

    const sharedData = {
        installedApp, 
        setInastallApp
    }

    return (<AppContext.Provider value={sharedData} >{children}</AppContext.Provider>
    );
};

export default AppProvider;