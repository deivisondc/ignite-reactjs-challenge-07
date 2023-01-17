import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imgUrl, setImgUrl] = useState('');

  function handleViewImage(url: string): void {
    setImgUrl(url);

    onOpen();
  }

  return (
    <SimpleGrid columns={3} spacing={10} mb={10}>
      {cards.map(cardInfo => (
        <Card
          data={cardInfo}
          viewImage={(url: string) => handleViewImage(url)}
        />
      ))}

      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imgUrl} />
    </SimpleGrid>
  );
}
