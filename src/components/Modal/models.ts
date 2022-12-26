import { ReactElement } from "react";
import {ButtonProps} from "reactstrap";

export type ModalProps = {
  isOpen: boolean;
  toggle: () => void;
  content: ReactElement,
  title?: string,
  footerButtons?: Array<ButtonProps>,
  size?: "sm" | "md" | "lg" | "xl",
  centered?: boolean,
}
