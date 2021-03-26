import React from "react";
import { Card, Paragraph, Title } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { View, Text, Image } from "react-native";

const CardTitle = styled(Title)`
  font-family: ${(props) => props.theme.fonts.heading};
  margin-top: ${(props) => props.theme.space[3]};
`;

const Address = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.space[1]} 0;
`;

const IconSection = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const OpenStatus = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const ClosedTemporarily = styled(Text)`
  color: ${(props) => props.theme.colors.text.error};
  margin-right: ${(props) => props.theme.space[2]};
`;

const StatusIcon = styled(Image)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
  margin-left: ${(props) => props.theme.space[2]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://naturalproductsmarketplace.com/wp-content/uploads/2018/12/foodies.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemprarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card elevation={5}>
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <CardTitle>{name}</CardTitle>
        <IconSection>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <OpenStatus>
            {isClosedTemprarily && (
              <ClosedTemporarily variant="label">
                {" "}
                CLOSED TEMPORARILY
              </ClosedTemporarily>
            )}
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <StatusIcon source={{ uri: icon }} />
          </OpenStatus>
        </IconSection>
        <Address>{address}</Address>
      </Card.Content>
    </Card>
  );
};
