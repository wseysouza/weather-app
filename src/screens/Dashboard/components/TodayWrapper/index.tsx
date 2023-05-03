import React from 'react';
import { Image } from 'react-native';
import { useWeather } from '@hooks/weather';

import { Container, Header, Title, SubTitle, Wrapper, BoxItem } from './styles';

const TodayWrapper: React.FC = () => {
  const { listForecast } = useWeather();
  const ArrTemp = [
    {
      temp: '20ºC',
      hours: '15:00'
    },
    {
      temp: '20ºC',
      hours: '16:00'
    },
    {
      temp: '19ºC',
      hours: '17:00'
    },
    {
      temp: '18ºC',
      hours: '18:00'
    },
  ]
  return (
    <Container>
      <Header>
        <Title>Today</Title>
        <SubTitle>{listForecast.length > 0 ? listForecast[0].date : '--'}</SubTitle>
      </Header>

      <Wrapper>
        {ArrTemp.map((item, index) =>
          <BoxItem activeBorder={item.hours === '17:00'} key={index}>
            <SubTitle>{item.temp}</SubTitle>
            <Image source={require('@assets/Dia.png')} style={{ width: 40 }} />
            <SubTitle>{item.hours}</SubTitle>
          </BoxItem>)}
      </Wrapper>

    </Container>
  );
}

export default TodayWrapper;