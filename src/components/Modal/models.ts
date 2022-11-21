import { ReactElement } from "react";

export interface ModalProps {
  isOpen : boolean;
  toggleModal : () => void;
  content: ReactElement,
  title?: string,
  footerButtons?: Array<FooterButton>,
  size?: "sm" | "md" | "lg" | "xl"
}

export interface FooterButton {
  type : "primary" | "secondary",
  text : string,
  onClick : () => void,
}
