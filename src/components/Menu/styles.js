import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';

const fontFamily = "Graphik-Regular";

export const Container = styled(Animated.ScrollView)`
    margin: 0 20px;
`;

export const Code = styled.View`
    background: #fff;
    padding: 5px;
    overflow: hidden;
    align-self: center;
`;


export const Nav = styled.View`
    margin-top: 30px;
    align-self: stretch;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255,255,255,0.5);

`;

export const NavItem = styled.View`
    flex-direction:row;
    height: 50px;
    align-items: center;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255,255,255,0.5);
`;

export const NavText = styled.Text`
    font-size: 15px;
    margin-left: 15px;
    color: white;
    font-family: ${fontFamily};
`;

export const SignOutButton = styled.TouchableOpacity`
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255,255,255,0.5);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 10px;
`;

export const SignOutButtonText = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 16px;
`;