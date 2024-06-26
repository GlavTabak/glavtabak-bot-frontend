import { Card as CardBase, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import type { FC } from 'react';

interface CardProps {
  cardText: string;
  cardTitle?: string;
  cardImg?: string;
}

export const Card: FC<CardProps> = ({ cardText, cardImg, cardTitle }) => {
  return (
    <CardBase shadow="sm" fullWidth isPressable classNames={{
      base: 'h-full',
    }}>
      {cardTitle && (
        <CardHeader>
          <b>{cardTitle}</b>
        </CardHeader>
      )}
      <CardBody className="overflow-visible p-0">
        {cardImg && (
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={cardText}
            className="h-[140px] w-full object-cover"
            src={cardImg}
          />
        )}
      </CardBody>
      <CardFooter className="items-center h-full justify-center text-small">
        <b>{cardText}</b>
      </CardFooter>
    </CardBase>
  );
};
