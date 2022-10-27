import { Grid, Button } from '@mui/material';
import React from 'react';
import { redirectTo } from "@core/utils";
import { RouterPaths } from '@core/constant';

import styles from './choose-user.module.scss';

export const ChooseUser = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-around'
      className={styles.layout_container}
    >
      <Grid item xs={11} md={5} className={styles.card_content}>
        <h3 className={styles.title}> Vous êtes utilisateur?</h3>
        <p className={styles.description}>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus beatae dolorum cum, cumque qui rerum. Pariatur, sunt
          facilis, quae beatae perspiciatis, sed incidunt accusamus laborum
          quasi illum nobis earum itaque.
        </p>
        <Button onClick={()=>redirectTo([RouterPaths.EntryPaths.userSignupPath])} className={styles.action_btn}>Continuer</Button>
      </Grid>
      <Grid item xs={11} md={5} className={styles.card_content}>
        <h3 className={styles.title}> Vous êtes prestataires?</h3>
        <p className={styles.description}>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea
          ducimus, corporis et assumenda eum voluptatem. Amet autem explicabo
          dignissimos eligendi? Iste, quaerat. Obcaecati illo velit odit, ad
          similique incidunt?
        </p>
        <Button onClick={()=>redirectTo([RouterPaths.EntryPaths.partnerSignupPath])} className={styles.action_btn}>Continuer</Button>
      </Grid>
    </Grid>
  );
};
