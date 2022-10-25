import React from 'react';
import Image from 'next/image';
import { Button, Grid } from '@mui/material';

import styles from './diagnosis.module.scss';

export const Diagnosis: React.FC = () => {
  return (
    <Grid container direction='row' className={styles.diagnosis_container}>
      <Grid item xs={12} md={5} className={styles.diagnosis_body}>
        <Grid
          container
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Grid item xs={12} className={styles.title_container}>
            <h2 className={styles.title}> Contacter nos experts</h2>
          </Grid>
          {[1, 2, 3, 4, 5].map(item => (
            <>
              <Grid item xs={3} className={styles.expertise}>
                Expertise
              </Grid>
              <Grid item xs={3} className={styles.expert_desc}>
                Nom
              </Grid>
              <Grid item xs={3} className={styles.expert_desc}>
                Numéro
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
