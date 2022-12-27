import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ModalProps } from "./models";

export const ModalComponent = ({
  isOpen,
  content,
  title,
  footerButtons,
  toggle,
  size = "md",
  centered = false
}: ModalProps) => {
  return (
    <div>
      <Modal
        {...{ isOpen, toggle, size, centered }}
        keyboard
        unmountOnClose
        >
        {
          title && (
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
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
                  <Button key={button.text} {...button}>
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