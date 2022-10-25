import React from "react";
import { FormControlLabel, Grid, Checkbox } from "@mui/material";
import styles from "./checkbox.module.scss";

interface InputProps {
  fields: { label: string; count: number }[];
}

/**
 * Component CheckboxGroup
 *
 * @component
 *
 * @example
 * return (
 *   <CheckboxGroup />
 * )
 */
export function CheckboxGroup(props: InputProps): JSX.Element {
  return (
    <>
      {props.fields.map((field, index) => (
        <Grid
          key={`field-${index}`}
          className={styles.checkbox_container}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <FormControlLabel control={<Checkbox size="small" />} label={field.label} />
          <Grid>({field.count})</Grid>
        </Grid>
      ))}
    </>
  );
}
