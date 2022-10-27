import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import { userDetails } from '../../auth/state/auth.selectors';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import styles from './purchase.module.scss'

interface PurchaseProps {
  handleClose: () => void;
}

export function Purchase(props: PurchaseProps) {
  const user = useSelector(userDetails);
  const [step, setStep]= useState(0)

  return (<div className={styles.dialog_container}>

    {step === 0 && (<Grid container direction="column" alignItems={'center'} justifyContent="center">
      <Grid item style={{marginBottom: 4}}>
        <h2 className={styles.header_title}>Êtes vous sûr de vouloir profiter de cette offre ?</h2>
      </Grid>
      <Grid item style={{marginBottom: 20}}>
        <Image src="/svg-icons/confirmation.svg" alt='confirmation' height={200} width={300}/>
      </Grid>
      <Grid item>
        <Button onClick={() => setStep(1)} className={styles.normal_btn}>Je suis sûr</Button>
        <Button onClick={props.handleClose}className={styles.outlined_btn}> Annuler </Button>
      </Grid>
    </Grid>
    )}
    {step === 1 && (<Grid container direction="column" alignItems={'center'} justifyContent="center">
      <Grid item style={{marginBottom: 2}}>
        <h2 className={styles.header_title}>Un QR code est déja envoyé à votre email.</h2>
        <p className={styles.header_title}>Vous devez montrer le QR code pour beneficier de l&apos;offre</p>
      </Grid>
      <Grid item style={{marginBottom: 10}}>
        <Image src="/svg-icons/done.svg" alt="done" height={200} width={300}/>
      </Grid>
      <Grid item>
        <Button onClick={() => {props.handleClose(); setStep(0)}} className={styles.normal_btn}>D&apos;accord</Button>
        <Button onClick={props.handleClose} className={styles.outlined_btn}> J&apos;ai pas reçu l&apos;email </Button>
      </Grid>
    </Grid>
    )}
    </div>
  );
}
