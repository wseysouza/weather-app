import React from 'react';
import { Image, Text } from 'react-native';
import { useWeather } from '@hooks/weather';

import {
  Container,
  TxtTemp,
  TxtMinMax,
  WrapperDetails,
  Detail,
  TxtDetail
} from './styles';

const TodayTemperature: React.FC = () => {
  const { listToday, listForecast } = useWeather();

  const ArrRain = ['5', '6', '9', '10', '11', '12', '28', '35', '40', '45']

  const getImage = () => {
    let isRain = false;
    ArrRain.forEach(element => {
      if (listToday.condition_code === element) {
        isRain = true;
      }
    });

    if (isRain) {
      return require('@assets/Chuva.png');
    } else if (listToday.currently === "noite") {
      return require('@assets/Noite.png');
    } else {
      return require('@assets/Sol.png');
    }
  }

  return (
    <Container>
      <Image source={getImage()} style={{ width: 200, height: 200 }} />
      <TxtTemp>{listToday.temp ? listToday.temp : '--'}º</TxtTemp>
      <TxtMinMax>Precipitations {'\n'} Max.: {listForecast.length > 0 ? listForecast[0].max : '--'}º   Min.: {listForecast.length > 0 ? listForecast[0].min : '--'}º</TxtMinMax>
      <WrapperDetails>
        <Detail>
          <Image source={require('@assets/Pingos.png')} />
          <TxtDetail>{listToday.rain}%</TxtDetail>
        </Detail>
        <Detail>
          <Image source={require('@assets/term.png')} />
          <TxtDetail>{listToday.humidity}%</TxtDetail>
        </Detail>
        <Detail>
          <Image source={require('@assets/vento.png')} />
          <TxtDetail>{listToday.wind_speedy}</TxtDetail>
        </Detail>
      </WrapperDetails>
    </Container>
  );
}

export default TodayTemperature;