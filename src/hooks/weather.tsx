import React, { createContext, useCallback, useContext, useState, useEffect, ReactNode } from 'react';

import { api } from '../services/api';

export interface TodayProps {
  city_name: string,
  cloudiness: number,
  condition_code: string,
  condition_slug: string,
  currently: string,
  date: string,
  description: string,
  forecast: [],
  humidity: number,
  rain: number,
  sunrise: string,
  sunset: string,
  temp: number,
  time: string,
  wind_direction: number,
  wind_speedy: string,
}

export interface ForecastProps {
  cloudiness: number,
  condition: string,
  date: string,
  description: string,
  max: number,
  min: number,
  rain: number,
  rain_probability: number,
  weekday: string,
  wind_speedy: string,
}

export interface WeatherContextData {
  listForecast: ForecastProps[];
  listToday: TodayProps;
  getWeather(): Promise<void>;
}

type WeatherContextProviderProps = {
  children: ReactNode;
}

const WeatherContext = createContext<WeatherContextData>({} as WeatherContextData)

export function WeatherProvider({ children }: WeatherContextProviderProps) {
  const [listToday, setListToday] = useState<TodayProps>({} as TodayProps)
  const [listForecast, setListForecast] = useState<ForecastProps[]>([])

  const getWeather = async () => {
    try {
      const { data } = await api.get("");
      setListToday(data.results);
      setListForecast(data.results.forecast);
    } catch (error) {
      console.warn("error >> ", error)
    }
  }

  return (
    <WeatherContext.Provider value={{
      listForecast,
      listToday,
      getWeather,

    }}>
      {children}
    </WeatherContext.Provider>
  )
}

export const useWeather = () => {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error('useWeather must be used within an homeProps')
  }

  return context;
}
