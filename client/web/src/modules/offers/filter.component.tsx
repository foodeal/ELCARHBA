import React from "react";
import { Button, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { Field } from "react-final-form";
import { ControlledAccordion, Input, Form } from "@shared/components";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./offers.module.scss";
import { FormIdEnum } from "@core/enums";
import { CheckboxGroup } from "@shared/components/CheckBox/check-box-group.component";

export const Filter: React.FC = () => {
  const submitForm = () => {
    console.info("test");
  };
  return (
    <Grid className={styles.filter_container}>
      <Grid item className={styles.filter_title}>
        Chercher votre produit
      </Grid>
      <Grid item className={styles.filter_content}>
        <Form
          formId={FormIdEnum.Filter}
          initialValues={{}}
          onSubmit={submitForm}
        >
          <ControlledAccordion
            open={true}
            title={<div className={styles.accordion_title}>Rechercher</div>}
            content={
              <Field name="search">
                {field => (
                  <Input
                    icon={<SearchIcon />}
                    placeholder="Rechercher"
                    meta={field.meta}
                    input={field.input}
                  />
                )}
              </Field>
            }
          />
          <ControlledAccordion
            title={<div className={styles.accordion_title}>Catéorie</div>}
            content={
              <Grid container direction="column">
                <CheckboxGroup
                  fields={[
                    { label: "Vidange", count: 20 },
                    { label: "Pneus", count: 20 },
                    { label: "Motors", count: 20 },
                    { label: "Vidange", count: 20 }
                  ]}
                />
              </Grid>
            }
          />
          <ControlledAccordion
            title={<div className={styles.accordion_title}>Sous catégorie</div>}
          />
          <ControlledAccordion
            title={<div className={styles.accordion_title}>Marque</div>}
          />
          <ControlledAccordion
            title={<div className={styles.accordion_title}>Modèle</div>}
          />
          <ControlledAccordion
            title={
              <div className={styles.accordion_title}>Type de motorisation</div>
            }
          />
          <ControlledAccordion
            title={<div className={styles.accordion_title}>Prix</div>}
          />
          <ControlledAccordion
            title={<div className={styles.accordion_title}>Ville</div>}
          />
          <ControlledAccordion
            title={<div className={styles.accordion_title}>Status</div>}
          />
          <ControlledAccordion
            title={
              <div className={styles.accordion_title}>Date de l&apos;offre </div>
            }
          />
          <Grid container className={styles.btn_init_container}>
            <Button className={styles.btn_init}>Réinitialisation</Button>
          </Grid>
        </Form>
      </Grid>
    </Grid>
  );
};
