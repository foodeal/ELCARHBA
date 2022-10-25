import React from "react";
import { SigninData } from "@core/models";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../state/auth.actions";
import { authLoading, authSubmitting } from "../state/auth.selectors";
import { Divider, Grid } from "@mui/material";
import { Field } from "react-final-form";
import { FormIdEnum } from "@core/enums";
import { SigninFormNamesEnum } from "@core/enums/form-names/sign-in-form-names.enum";
import { Validators } from "@shared/validators";
import { Input, Form} from "@shared/components";
import { PolygonButton } from "@shared/components/Buttons";
import { Checkbox } from "@shared/components/CheckBox/checkbox.component";
import styles from "./sign-in.module.scss";

interface SignInProps{
  partner?: boolean;
}

export function SignIn({partner}:SignInProps): JSX.Element {
  const dispatch = useDispatch();
  const submitting = useSelector(authLoading);
  const loading = useSelector(authSubmitting);

  const submitForm = (data: SigninData) => {
    dispatch(authenticate(data));
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      className={styles.login_container}
    >
      <Grid
        className={styles.login_content}
        container
        justifyContent="center"
        direction="column"
      >
        <h2>
          {partner ? "Connectez-Vous En Tant Que Prestataire" : "Connectez-Vous En Tant Qu'abonné"}
          <Divider />
        </h2>
        <Grid>
          <Form
            formId={FormIdEnum.Login}
            initialValues={{}}
            onSubmit={submitForm}
          >
            <Field
              name={SigninFormNamesEnum.field.getValue(
                SigninFormNamesEnum.Email
              )}
              validate={(value: string) =>
                Validators.required("Nom d'utilisateur est obligatoire")(value)
              }
            >
              {field => (
                <Input
                  placeholder={SigninFormNamesEnum.toPlaceholder.getValue(
                    SigninFormNamesEnum.Email
                  )}
                  meta={field.meta}
                  input={field.input}
                  className={styles.auth_input}
                />
              )}
            </Field>
            <Field
              name={SigninFormNamesEnum.field.getValue(
                SigninFormNamesEnum.Password
              )}
              validate={(value: string) =>
                Validators.required("Mot de passe est obligatoire")(value)
              }
            >
              {field => (
                <Input
                  placeholder={SigninFormNamesEnum.toPlaceholder.getValue(
                    SigninFormNamesEnum.Password
                  )}
                  meta={field.meta}
                  input={field.input}
                  type="password"
                  className={styles.auth_input}
                />
              )}
            </Field>
            <Grid container>
              <Field
                name={SigninFormNamesEnum.field.getValue(
                  SigninFormNamesEnum.RememberMe
                )}
              >
                {field => (
                  <Checkbox
                    label={SigninFormNamesEnum.toPlaceholder.getValue(
                      SigninFormNamesEnum.RememberMe
                    )}
                    meta={field.meta}
                    input={field.input}
                  />
                )}
              </Field>
            </Grid>
            <PolygonButton
              htmlType="submit"
              spinning={loading}
              disabled={submitting}
              content={"Se Connecter"}
              classNames={styles.submit_button}
            />
          </Form>
        </Grid>
      </Grid>
    </Grid>
  );
}
