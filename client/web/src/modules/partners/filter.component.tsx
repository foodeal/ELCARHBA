import React from "react";
import { Button, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { Field } from "react-final-form";
import { ControlledAccordion, Input, Form } from "@shared/components";
import SearchIcon from "@mui/icons-material/Search";

import styles from "../offers/offers.module.scss";
import { FormIdEnum } from "@core/enums";
import { CheckboxGroup } from "@shared/components/CheckBox/check-box-group.component";

export const Filter: React.FC = () => {
  const submitForm = () => {
    console.info("test");
  };
  return (
    <Grid className={styles.filter_container}>
      <Grid item className={styles.filter_title}>
        Chercher votre prestataire
      </Grid>
      <Grid item className={styles.filter_content}>
        <Form
          formId={FormIdEnum.Filter}
          initialValues={{}}
          onSubmit={submitForm}
        >
          <ControlledAccordion
            open={true}
            title={<div className={styles.accordion_title}>Rechercher par nom</div>}
            content={
              <Field name="search">
                {field => (
                  <Input
                    icon={<SearchIcon />}
                    placeholder="Rechercher par nom"
                    meta={field.meta}
                    input={field.input}
                  />
                )}
              </Field>
            }
          />
          <ControlledAccordion
            title={<div className={styles.accordion_title}>Spécialité</div>}
            content={
              <Grid container direction="column">
                <CheckboxGroup
                  fields={[
                    { label: "Vidange", count: 20 },
                    { label: "Pneus", count: 20 },
                    { label: "Lavage", count: 20 },
                    { label: "Mécaniques génerales", count: 20 }
                  ]}
                />
              </Grid>
            }
          />
          <ControlledAccordion
            title={<div className={styles.accordion_title}>Ville</div>}
            content={<Grid container direction="column">
            <CheckboxGroup
              fields={[
                { label: "Tunis", count: 20 },
                { label: "Monastir", count: 20 },
                { label: "Sousse", count: 20 },
                { label: "Sfax", count: 20 },
                { label: "Gafsa", count: 20 },
                { label: "Medanine", count: 20 }
              ]}
            />
          </Grid>}
          />
          
          <Grid container className={styles.btn_init_container}>
            <Button className={styles.btn_init}>Réinitialisation</Button>
          </Grid>
        </Form>
      </Grid>
    </Grid>
  );
};
