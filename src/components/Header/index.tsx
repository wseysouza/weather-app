import React from 'react';
import { Image, View, } from 'react-native';

import { Container, Title, WrapperSelect } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <WrapperSelect>
                <Image source={require('@assets/Pin.png')} />
                <Title>São Paulo</Title>
                <Image source={require('@assets/Check.png')} />
            </WrapperSelect>
            <Image source={require('@assets/Sino.png')} />
        </Container>
    );
}

export default Header;