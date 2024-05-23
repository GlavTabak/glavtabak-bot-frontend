import { Card as CardBase, CardBody, CardFooter, Image } from "@nextui-org/react";
import type { FC } from 'react';

interface CardProps {
  cardText: string;
  cardTitle?: string;
  cardImg?: string;
} 

export const Card: FC<CardProps> = ({cardText, cardImg}) => {
  return (
    <CardBase shadow="sm" className="w-full" isPressable onPress={() => console.log("item pressed")}>
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={cardText}
          className="w-full object-cover h-[140px]"
          src={cardImg}
        />
      </CardBody>
      <CardFooter className="text-small justify-center items-center">
        <b>{cardText}</b>
      </CardFooter>
    </CardBase>
  );
}
