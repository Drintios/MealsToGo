import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  RestaurantCard,
  CardTitle,
  Address,
  Rating,
  IconSection,
  OpenStatus,
  ClosedTemporarily,
  StatusIcon,
} from "./restaurant-info-card.styles";

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
    isClosedTemprarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <CardTitle>{name}</CardTitle>
        <IconSection>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml xml={star} key={index} width={20} height={20} />
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
    </RestaurantCard>
  );
};
