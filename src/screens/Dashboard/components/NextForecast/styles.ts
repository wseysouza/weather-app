import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_transparent};
    border-radius: 20px;
    margin-top: 25px;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
    margin-bottom: 50px;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_700};
    font-size: 16px;
    text-shadow:-2px 3px 1px rgba(0, 0, 0, 0.1);
`;

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: 16px;
    text-shadow:-2px 3px 1px rgba(0, 0, 0, 0.1);
`;

export const Wrapper = styled.View`
    width: 100%;
    justify-content: space-between;
`;

export const ContentBox = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TxtTemp = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: 14px;
    text-shadow:-2px 3px 1px rgba(0, 0, 0, 0.1);
`;

export const TxtTempMin = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: 14px;
    margin-left: 10px;
    text-shadow:-2px 3px 1px rgba(0, 0, 0, 0.1);
`;

export const BoxItem = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
`;
