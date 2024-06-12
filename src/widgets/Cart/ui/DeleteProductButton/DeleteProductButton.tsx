import { useDictionary } from '@hooks';
import { Icon } from '@iconify/react';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import type { Row } from '@tanstack/react-table';
import type { FC } from 'react';
import { useCartStore } from '@root/entities';
import type { CartItem } from '../../model/types';

interface DeleteProductButtonProps {
  row: Row<CartItem>;
}

export const DeleteProductButton: FC<DeleteProductButtonProps> = ({ row }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const d = useDictionary();
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <>
      <Button isIconOnly variant="light" onPress={onOpen}>
        <Icon icon="heroicons-outline:trash" className="size-5 text-theme-text-color" />
      </Button>
      <Modal
        size="xs"
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: 'bg-theme-bg-color',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{d.confirmDeletionTitle}</ModalHeader>
              <ModalBody>{d.confirmDeletionDescription}</ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    removeFromCart(row.original.itemName);
                    onClose();
                  }}
                >
                  {d.confirmDeletionButton}
                </Button>
                <Button color="primary" onPress={onClose}>
                  {d.cancelDeletionButton}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
