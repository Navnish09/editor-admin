import { ReactElement } from "react";

export type ModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
  content: ReactElement,
  title?: string,
  footerButtons?: Array<FooterButton>,
  size?: "sm" | "md" | "lg" | "xl"
}

export type FooterButton = {
  type: "primary" | "secondary",
  text: string,
  onClick: () => void,
}
