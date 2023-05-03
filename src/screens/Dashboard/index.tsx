import React, { useEffect, useState } from 'react';

import Header from '@components/Header';
import TodayTemperature from './components/TodayTemperature';
import TodayWrapper from './components/TodayWrapper';
import NextForecast from './components/NextForecast';
import { Container } from './styles';
import { useWeather } from '@hooks/weather';
import { useTheme } from 'styled-components';


const Dashboard: React.FC = () => {
  const { colors } = useTheme();
  const [temp, setTemp] = useState('sol');

  const { getWeather, listToday } = useWeather();
  useEffect(() => {
    getWeather();
  }, [])

  const ArrRain = ['5', '6', '9', '10', '11', '12', '28', '35', '40', '45']

  const getColor = () => {
    let isRain = false;
    ArrRain.forEach(element => {
      if (listToday.condition_code === element) {
        isRain = true;
      }
    });

    if (isRain) {
      return colors.background_secundary;
    } else if (listToday.currently === "noite") {
      return colors.background_secundary
    } else {
      return colors.background_primary
    }
  }

  return (
    <Container color={getColor()}>
      <Header />
      <TodayTemperature />
      <TodayWrapper />
      <NextForecast />
    </Container>
  )
}

export default Dashboard;