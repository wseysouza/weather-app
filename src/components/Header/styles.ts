import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 70px;
`;

export const WrapperSelect = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: 17px;
    color: ${({ theme }) => theme.colors.text};
    margin-left: 16px;
    margin-right: 20px;
`;