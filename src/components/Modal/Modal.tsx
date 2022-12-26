import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ModalProps } from "./models";

export const ModalComponent = ({
  isOpen,
  content,
  title,
  footerButtons,
  toggleModal,
  size = "md"
}: ModalProps) => {
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggleModal} size={size} keyboard unmountOnClose>
        {
          title && (
            <ModalHeader toggle={toggleModal}>{title}</ModalHeader>
          )
        }

        <ModalBody>
          {content}
        </ModalBody>

        {
          footerButtons && (
            <ModalFooter>
              {
                footerButtons?.map((button) => (
                  <Button {...button}>
                    {button.text}
                  </Button>
                ))
              }
            </ModalFooter>
          )
        }
      </Modal>
    </div>
  );
}