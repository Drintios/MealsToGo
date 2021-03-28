import styled from "styled-components/native";
import { Card, Paragraph, Title } from "react-native-paper";
import { View, Text, Image } from "react-native";

export const RestaurantCard = styled(Card)`
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const CardTitle = styled(Title)`
  font-family: ${(props) => props.theme.fonts.heading};
  margin-top: ${(props) => props.theme.space[3]};
`;

export const Address = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.space[1]} 0;
`;

export const IconSection = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OpenStatus = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const ClosedTemporarily = styled(Text)`
  color: ${(props) => props.theme.colors.text.error};
  margin-right: ${(props) => props.theme.space[2]};
`;

export const StatusIcon = styled(Image)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
  margin-left: ${(props) => props.theme.space[2]};
`;
