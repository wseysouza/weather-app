import styled from 'styled-components/native';

interface BoxItemProps {
    activeBorder: boolean;
}

export const Container = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_transparent};
    border-radius: 20px;
    margin-top: 25px;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
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
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: 16px;
    text-shadow:-2px 3px 1px rgba(0, 0, 0, 0.1);
`;

export const Wrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const BoxItem = styled.View<BoxItemProps>`
    border-width: ${(props) => props.activeBorder ? '1px' : 0} ;
    border-style: solid;
    border-color: rgba(72, 153, 227, 0.2);
    padding: 10px;
    border-radius: 20px;
`;
