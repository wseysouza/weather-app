import React from 'react';
import { Image } from 'react-native';
import { useWeather } from '@hooks/weather';

import { Container, Header, Title, SubTitle, Wrapper, BoxItem, ContentBox, TxtTemp, TxtTempMin } from './styles';

const NextForecat: React.FC = () => {
  const { listForecast } = useWeather();
  const getImage = (condition: string) => {
    switch (condition) {
      case 'storm':
        return require('@assets/PingosTemp.png')
      case 'snow':
        return require('@assets/PingosTemp.png')
      case 'hail':
        return require('@assets/PingosTemp.png')
      case 'rain':
        return require('@assets/PingosTemp.png')
      case 'fog':
        return require('@assets/PingosTemp.png')
      case 'clear_day':
        return require('@assets/Dia.png')
      case 'clear_night':
        return require('@assets/Dia.png')
      case 'cloud':
        return require('@assets/Nublado.png')
      case 'cloudly_day':
        return require('@assets/Nublado.png')
      case 'cloudly_night':
        return require('@assets/Nublado.png')
      case 'none_day':
        return require('@assets/Nublado.png')
      case 'none_night':
        return require('@assets/Nublado.png')
      default:
        break;
    }
  }
  return (
    <Container>
      <Header>
        <Title>Next Forecast</Title>
        <Image source={require('@assets/calendar.png')} />
      </Header>
      <Wrapper>
        {listForecast.map((item, index) =>
          <BoxItem key={index}>
            <SubTitle>{item.weekday}</SubTitle>
            <Image source={getImage(item.condition)} style={{ height: 40 }} />
            <ContentBox>
              <TxtTemp>{item.max}°c</TxtTemp>
              <TxtTempMin>{item.min}°c</TxtTempMin>
            </ContentBox>
          </BoxItem>)}
      </Wrapper>
    </Container>
  );
}

export default NextForecat;