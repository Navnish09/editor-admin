import { ChangeEvent } from "react";
import { UseFormHandleSubmit, SubmitHandler } from "react-hook-form";


export type FormProps = {
  configs: FormConfigs;
  validationSchemas: Record<string, any>;
  defaultValues?: Record<string, any>;
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onValidationChange?: (state: boolean) => void;
}

export type FormConfigs = {
  id: string;
  fields: Field[];
}

export type Field = {
  type?: string;
  name: string;
  label?: string;
  placeholder?: string;
  options?: Option[];
}

export type Option = {
  id: string | number | null;
  value: string;
  label: string;
  name?: string;
}

export type FormRef = {
  handleSubmit: (callback: SubmitHandler<any>) => void;
  getValues: () => Record<string, any>;
  reset : () => void;
}
