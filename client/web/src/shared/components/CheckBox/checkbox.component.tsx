import React from "react";
import { FieldInputProps, FieldMetaState } from "react-final-form";
import { Checkbox as CheckboxMui, FormControlLabel } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

interface InputProps {
  meta: FieldMetaState<any>;
  input: FieldInputProps<any, any>;
  disabled?: boolean;
  label?: string;
  required?: boolean;
  multiline?: boolean;
  defaultValue?: string;
  className?: string;
  labelClassName?: string;
}

/**
 * Component Input
 *
 * @component
 *
 * @example
 * return (
 *   <Input />
 * )
 */
export function Checkbox(props: InputProps): JSX.Element {
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = event.target.value;
    props.input.onChange(value);
  };

  return (
    <FormControlLabel
      className={props.labelClassName}
      label={props.label}
      control={
        <CheckboxMui
          {...props.input}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 30,
              border: "0.5px solid #F5A934",
              color: "transparent"
            },
            "&.Mui-checked": {
              color: "black",
              "& svg": {
                color: "#F5A934"
              }
            }
          }}
          checkedIcon={<DoneIcon />}
          defaultValue={props.defaultValue}
          className={props.className}
          id={props.input.name + "-" + props.label}
          required={props.required}
          disabled={props.disabled}
          onChange={handleChange}
        />
      }
    />
  );
}
