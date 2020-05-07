import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import { Container, Content, Card, CardHeader, CardAccount, CardContent, Title, Description, CardFooter, Annotation } from './styles';


export default function Main() {

  let offset = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  )

  function onHandlerStateChanged(event) {
    let opened = false;

    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
        Animated.timing(translateY, {
          toValue: 400,
          duration: 200,
          useNativeDriver: true,
        }).start();
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 400 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 400 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });


    }
  }

  return (
    <Container>
      <Header />

      <Content>

        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card style=
            {{
              transform: [{
                translateY: translateY.interpolate({
                  inputRange: [-200, 0, 400],
                  outputRange: [-50, 0, 350],
                  extrapolate: 'clamp',
                })
              }],

            }}
          >
            <CardHeader>
              <Icon name="attach-money" size={24} color="#666" />
              <CardAccount>Conta</CardAccount>
              <Icon name="visibility-off" size={24} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 85.261.600,00</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 600,00 recebida de CAIXA AUXIL. sexta
            </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
