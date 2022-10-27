import React from 'react';
import { Button, Grid } from '@mui/material';

import styles from './tracking.module.scss';

export const Tracking: React.FC = () => {
  return (
    <Grid container direction='row' className={styles.tracking_container}>
      <Grid item xs={12} md={8} className={styles.tracking_body}>
        <Grid
          container
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Grid item xs={12} md={8} className={styles.title_container}>
            <h2 className={styles.title}> Suivi de ma voiture</h2>
          </Grid>
          <Grid
            item xs={12} md={3}
          >
            <Button className={styles.expert_button}> Modifier </Button>
          </Grid>

          <Grid item xs={12} md={7} className={styles.expertise}>
            Dernière date de vidange
          </Grid>

          <Grid item xs={12} md={3} className={styles.expert_desc}>
            15/08/2022
          </Grid>
          <Grid item xs={12} md={7} className={styles.expertise}>
            Kilométrage marquée pour le dernier vidange
          </Grid>

          <Grid item xs={12} md={3} className={styles.expert_desc}>
            100.000 Km
          </Grid>
          <Grid item xs={12} md={7} className={styles.expertise}>
            Kilométrage marquée pour le dernier changement des plaques des
            freins
          </Grid>

          <Grid item xs={12} md={3} className={styles.expert_desc}>
            100.000 Km
          </Grid>
          <Grid item xs={12} md={7} className={styles.expertise}>
            Date de dernier changement de batterie
          </Grid>

          <Grid item xs={12} md={3} className={styles.expert_desc}>
            05/08/2020
          </Grid>
          <Grid item xs={12} md={7} className={styles.expertise}>
            Date d&apos;écheance d&apos;assurance
          </Grid>

          <Grid item xs={12} md={3} className={styles.expert_desc}>
            05/08/2020
          </Grid>

          <Grid item xs={12} md={7} className={styles.expertise}>
            Date d&apos;écheance de la visite technique
          </Grid>

          <Grid item xs={12} md={3} className={styles.expert_desc}>
            05/08/2020
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
};
