import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Divider,
  Grid,
  IconButton,
  Button,
  CircularProgress
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Field } from 'react-final-form';
import Image from 'next/image';
import { SigninData } from '@core/models';
import { authenticate } from '../../auth/state/auth.actions';
import {
  authLoading,
  authSubmitting,
  userDetails
} from '../../auth/state/auth.selectors';
import { FormIdEnum, ModalIdEnum } from '@core/enums';
import { SigninFormNamesEnum } from '@core/enums/form-names/sign-in-form-names.enum';
import { Validators } from '@shared/validators';
import { Input, Form, openModal } from '@shared/components';
import { Checkbox } from '@shared/components/CheckBox/checkbox.component';

import styles from './login.module.scss';

interface LoginProps {
  handleClose: () => void;
}

export function Login(props: LoginProps) {
  const user = useSelector(userDetails);

  const dispatch = useDispatch();
  const submitting = useSelector(authLoading);
  const loading = useSelector(authSubmitting);

  const submitForm = (data: SigninData) => {
    dispatch(authenticate(data));
    dispatch(openModal({ modalId: ModalIdEnum.Purchase }));
  };

  return (
    <div className={styles.dialog_container}>
      {props.handleClose ? (
        <IconButton
          aria-label='close'
          onClick={props.handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}

      <Grid container direction='row' justifyContent={'space-between'}>
        <Grid item xs={12} md={5}>
          <Grid
            container
            direction='column'
            alignItems={'center'}
            justifyContent='center'
            style={{ height: '100%' }}
          >
            <Grid item style={{ marginBottom: 4 }}>
              <h4 className={styles.header_title}>
                Commander en tant que nouveau client
              </h4>
            </Grid>
            <Grid item style={{ marginBottom: 50 }}>
              <Image
                src='/svg-icons/man.svg'
                alt='confirmation'
                height={200}
                width={300}
              />
            </Grid>
            <Grid item style={{ marginTop: 'auto' }}>
              <Button onClick={props.handleClose} className={styles.normal_btn}>
                Créer un compte
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={1} style={{ display: 'flex', justifyContent: 'center' }}>
          <Divider
            orientation='vertical'
            flexItem
            style={{ height: '100%', marginTop: '1rem' }}
          />
          <div className={styles.divider_name}>OU</div>
        </Grid>

        <Grid item xs={12} md={5}>
          <Grid
            container
            direction='column'
            alignItems={'center'}
            justifyContent='center'
          >
            <Grid item style={{ marginBottom: 4 }}>
              <h4 className={styles.header_title}>
                Commander en utilisant votre compte
              </h4>
            </Grid>
            <Grid item style={{ marginBottom: 20 }}>
              <Image
                src='/svg-icons/pc.svg'
                alt='confirmation'
                height={100}
                width={200}
              />
            </Grid>
            <Grid item>
              <Form
                formId={FormIdEnum.Login}
                initialValues={{}}
                onSubmit={submitForm}
              >
                <Grid container justifyContent='center' alignItems='center'>
                  <Field
                    name={SigninFormNamesEnum.field.getValue(
                      SigninFormNamesEnum.Email
                    )}
                    validate={(value: string) =>
                      Validators.required("Nom d'utilisateur est obligatoire")(
                        value
                      )
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
                        darkTheme={false}
                      />
                    )}
                  </Field>
                  <Field
                    name={SigninFormNamesEnum.field.getValue(
                      SigninFormNamesEnum.Password
                    )}
                    validate={(value: string) =>
                      Validators.required('Mot de passe est obligatoire')(value)
                    }
                  >
                    {field => (
                      <Input
                        placeholder={SigninFormNamesEnum.toPlaceholder.getValue(
                          SigninFormNamesEnum.Password
                        )}
                        meta={field.meta}
                        input={field.input}
                        type='password'
                        className={styles.auth_input}
                        darkTheme={false}
                      />
                    )}
                  </Field>
                </Grid>
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
                        className={styles.checkbox}
                        labelClassName={styles.checkbox}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid container justifyContent='center' alignItems='center'>
                  <Button
                    type='submit'
                    disabled={submitting}
                    className={styles.normal_btn}
                  >
                    Se connecter
                    {loading && (
                      <CircularProgress
                        style={{ marginLeft: '0.5rem' }}
                        size={20}
                        color='inherit'
                      />
                    )}
                  </Button>
                </Grid>
              </Form>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
