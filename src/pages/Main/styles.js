import { Animated } from 'react-native';

import styled from 'styled-components/native';

const fontFamily = "Graphik-Regular";

export const Container = styled.View`
  flex: 1;
  background: #8B10AE;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 350px;
  z-index: 5;
  font-family: ${fontFamily};
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #FFF;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const CardAccount = styled.Text`
  flex: 1;
  color: #666;
  padding-left: 10px;
  font-family: ${fontFamily};
  font-size: 15px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 20px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #666;
  font-family: ${fontFamily};
`;
export const Description = styled.Text`
  font-size: 32px;
  color: #333;
  font-family: ${fontFamily};

`;
export const CardFooter = styled.View`
  padding: 30px 20px;
  background-color: #eee;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const Annotation = styled.Text`
  font-size: 12.5px;
  line-height: 18px;
  color: #444;
  font-family: ${fontFamily};
`;

