import React from 'react';
import Grid from '@mui/material/Grid';

import styles from './partners.module.scss'

export const Partners: React.FC = () => {
  return (
    <div className={styles.partners_container}>
      <Grid
        container
        direction='column'
        className={styles.partners_container_grid}
      >
        <Grid item className={styles.partners_title}>
          <div className={styles.title}> Nos partenaires </div>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
};
