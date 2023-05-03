import React, { ReactNode } from 'react';
import { WeatherProvider } from './weather';

type WeatherContextProviderProps = {
    children: ReactNode;
}

const AppProvider = ({ children }: WeatherContextProviderProps) => (
    <WeatherProvider>
        {children}
    </WeatherProvider>
)


export default AppProvider;
