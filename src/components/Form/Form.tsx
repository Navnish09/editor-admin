import React, { ChangeEvent, ForwardedRef, forwardRef, useEffect, useImperativeHandle } from "react"
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { FormProps, FormRef, Option } from "./model";

export const Form = forwardRef(({
  configs,
  validationSchemas,
  defaultValues,
  onInputChange,
  onValidationChange,
}: FormProps, ref: ForwardedRef<FormRef>) => {

  const { fields, id } = configs;
  const formDefaultValues = defaultValues || fields.reduce((acc, input) => {
    acc[input.name] = "";
    return acc;
  }, {} as { [key: string]: string });

  const { formState: { errors, isValid }, control, getValues, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues: formDefaultValues
  });

  // Expose the events and values to the parent component
  useImperativeHandle(ref, () => ({
    getValues,
    handleSubmit: (callback) => handleSubmit(callback)(),
    reset
  }), [getValues, handleSubmit]);

  // Expose the validation state to the parent component
  useEffect(() => {
    onValidationChange?.(isValid);
  }, [isValid]);

  return (
    <div id={id}>
      {
        fields.map(({ label, name, type, ...inputRest }: any) => {
          return (
            <FormGroup key={name}>
              <Label for={name}>
                {label} {
                  validationSchemas[name]?.required ? (
                    <span className="text-danger fw-bold">*</span>
                  ) : ""}</Label>
              <Controller
                name={name}
                control={control}
                rules={validationSchemas[name as keyof typeof validationSchemas]}
                render={({ field: { ref, onChange, ...restControls } }) => {
                  return (
                    <Input
                      id={name}
                      innerRef={ref}
                      type={type || "text"}
                      invalid={!!errors[name]}
                      valid={!!getValues()[name] && !errors[name]}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        onChange(e);
                        onInputChange?.(e);
                      }}

                      {...inputRest}
                      {...restControls} >

                      {
                        type === "select" ? inputRest.options?.map((option: Option) => (
                          <option key={option.id} value={`${option.id}`}>{option.label}</option>
                        )) : null
                      }
                    </Input>
                  )
                }}
              />
              <FormFeedback>
                {`${errors[name]?.message}`}
              </FormFeedback>
            </FormGroup>
          )
        })
      }
    </div>
  )
})

export default Form