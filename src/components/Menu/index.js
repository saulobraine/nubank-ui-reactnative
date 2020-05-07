import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import QRCode from 'react-native-qrcode-svg';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

export default function Menu({ translateY }) {
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1]
            })
        }} >
            <Code>
                <QRCode value="https://braine.dev" size={100} backgroundColor="#fff" color="#8B10AE"  />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#fff"></Icon>
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#fff"></Icon>
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#fff"></Icon>
                    <NavText>Configurar Cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#fff"></Icon>
                    <NavText>Configurar Conta</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>SAIR DA CONTA</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}