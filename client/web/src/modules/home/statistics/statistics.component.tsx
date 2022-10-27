import { Grid, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useTheme } from '@mui/material/styles';

import styles from './statistics.module.scss';

const style = {
  display:'flex',
  height: {
    xs: '8rem',
    md: '7rem'
  },
  flexDirection : {
    xs: 'column',
    md: 'row'
  }
}

export const Statistics: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div className={styles.statistics_container}>
      <Grid container direction='column' className={styles.statistics_container_grid}>
        <Grid item className={styles.statistics_title}>
          <div className={styles.title}> Nos chiffres </div>
        </Grid>
        <Grid item>
          <Grid
            container
            direction='row'
            justifyContent={matches ? 'space-between' : 'space-around'}
            alignItems='center'
          >
            <Grid item xs={5} md={3} className={styles.stat_cards} sx={style}>
              <Image
                src='/svg-icons/car-icon.svg'
                height='63'
                width='84'
                alt='icons'
              />
              <div className={styles.card_description}>
                <div className={styles.number}> 400</div>{' '}
                <div className={styles.text}>Véhicule stock</div>
              </div>
            </Grid>
            <Grid item xs={5} md={3} className={styles.stat_cards} sx={style}>
              <Image
                src='/svg-icons/gift-icon.svg'
                height='63'
                width='84'
                alt='icons'
              />
              <div className={styles.card_description}>
                <div className={styles.number}> 2000</div>{' '}
                <div className={styles.text}>nos offres</div>
              </div>
            </Grid>
            <Grid item xs={5} md={3} className={styles.stat_cards} sx={style}>
              <Image
                src='/svg-icons/users-icon.svg'
                height='63'
                width='84'
                alt='icons'
              />
              <div className={styles.card_description}>
                <div className={styles.number}> 50</div>{' '}
                <div className={styles.text}>Prestataires</div>
              </div>
            </Grid>
            <Grid item xs={5} md={3} className={styles.stat_cards} sx={style}>
              <Image
                src='/svg-icons/happy-icon.svg'
                height='63'
                width='84'
                alt='icons'
              />
              <div className={styles.card_description}>
                <div className={styles.number}> 1000</div>{' '}
                <div className={styles.text}>Client statisfait</div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
