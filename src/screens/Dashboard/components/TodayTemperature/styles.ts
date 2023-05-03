import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    align-items: center;
`;

export const TxtTemp = styled.Text`
    margin-top: -20px;
    font-size: 60px;
    font-family: ${({ theme }) => theme.fonts.primary_700};
    color: ${({ theme }) => theme.colors.text};
    text-shadow:-2px 3px 1px rgba(0, 0, 0, 0.1);
`;

export const TxtMinMax = styled.Text`
    text-align: center;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text};
    text-shadow:-2px 3px 1px rgba(0, 0, 0, 0.1);
`;

export const WrapperDetails = styled.View`
    width: 100%;
    height: 55px;
    background-color: ${({ theme }) => theme.colors.background_transparent};
    border-radius: 20px;
    margin-top: 25px;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
`;

export const TxtDetail = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_500};
    margin-left: 5px;
    text-shadow:-2px 3px 1px rgba(0, 0, 0, 0.1);
`;

export const Detail = styled.View`
    flex-direction: row;
    align-items: center;
`;