import styled from 'styled-components/native';

interface ViewColorProps {
    color?: string;
}

export const Container = styled.ScrollView<ViewColorProps>`
    flex: 1;
    background-color: ${(props) => props.color};
    padding: 0 30px;
`;