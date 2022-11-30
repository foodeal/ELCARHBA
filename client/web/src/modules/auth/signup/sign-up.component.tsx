import React from 'react';
import { SigninData } from '@core/models';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '../state/auth.actions';
import { authLoading, authSubmitting } from '../state/auth.selectors';
import { Divider, Grid } from '@mui/material';
import { Field } from 'react-final-form';
import { FormIdEnum } from '@core/enums';
import { SignupFormNamesEnum } from '@core/enums/form-names/sign-up-form-names.enum';
import { Validators } from '@shared/validators';
import { Input, Form } from '@shared/components';
import { PolygonButton } from '@shared/components/Buttons';
import { Checkbox } from '@shared/components/CheckBox/checkbox.component';
import styles from './sign-up.module.scss';

export function SignUp(): JSX.Element {
  const dispatch = useDispatch();
  const submitting = useSelector(authLoading);
  const loading = useSelector(authSubmitting);

  const submitForm = (data: SigninData) => {
    dispatch(authenticate(data));
  };

  const renderFields = (fieldData: SignupFormNamesEnum) => (
    <Grid item xs={12} md={4}>
      <Field
        name={SignupFormNamesEnum.field.getValue(fieldData)}
        validate={(value: string) =>
          Validators.required(
            SignupFormNamesEnum.toValidationMsg.getValue(fieldData)
          )(value)
        }
      >
        {field => (
          <Input
            placeholder={SignupFormNamesEnum.toPlaceholder.getValue(fieldData)}
            meta={field.meta}
            input={field.input}
            className={styles.auth_input}
            type={SignupFormNamesEnum.toInputType.getValue(fieldData)}
          />
        )}
      </Field>
    </Grid>
  );

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      direction='column'
      className={styles.signup_container}
    >
      <Grid
        className={styles.signup_content}
        container
        justifyContent='center'
        direction='column'
      >
        <div className={styles.title}>Fiche d&apos;inscription utilisateur</div>
        <Grid>
          <Form
            formId={FormIdEnum.Signup}
            initialValues={{}}
            onSubmit={submitForm}
          >
            <Grid
              container
              direction={'row'}
              rowSpacing={2}
              columnSpacing={2}
              justifyContent='space-between'
            >
              <Grid item xs={12} style={{ display: 'flex',marginTop : 20 }}>
                <p>Informations obligatoires</p>
              </Grid>

              {renderFields(SignupFormNamesEnum.FullName)}
              {renderFields(SignupFormNamesEnum.BirthDate)}
              {renderFields(SignupFormNamesEnum.Email)}
              {renderFields(SignupFormNamesEnum.PhoneNumber)}
              {renderFields(SignupFormNamesEnum.Country)}
              {renderFields(SignupFormNamesEnum.Town)}
              {renderFields(SignupFormNamesEnum.Address)}
              {renderFields(SignupFormNamesEnum.Password)}
              {renderFields(SignupFormNamesEnum.ConfirmPassword)}

              <Grid
                item
                xs={12}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <PolygonButton
                  htmlType='submit'
                  spinning={loading}
                  disabled={submitting}
                  content={'Se Connecter'}
                  classNames={styles.submit_button}
                />
              </Grid>
            </Grid>
          </Form>
        </Grid>
      </Grid>
    </Grid>
  );
}
