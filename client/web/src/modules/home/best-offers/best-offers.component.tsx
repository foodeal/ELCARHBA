import React from 'react';
import Grid from '@mui/material/Grid';

import styles from './best-offers.module.scss';
import { CustomCard } from '@shared/components';

export const BestOffers: React.FC = () => {
  return (
    <div className={styles.offers_container}>
      <Grid
        container
        direction='column'
        className={styles.offers_container_grid}
      >
        <Grid item className={styles.offers_title}>
          <div className={styles.title}> Nos best sellers </div>
        </Grid>
        <Grid item>
          <Grid
            container
            direction={'row'}
            rowSpacing={7}
            columnSpacing={6}
            justifyContent='space-evenly'
          >
            {[
              '/examples/piston.jpg',
              '/examples/brembo.jpg',
              '/examples/bougie.jpg',
              '/examples/brembo2.jpg',
              '/examples/injector.jpg',
              '/examples/filter.jpg',
              '/examples/brembo2.jpg',
              '/examples/bougie.jpg'
            ].map((item, index) => (
              <Grid
                item
                xs={11}
                sm={5}
                md={3}
                sx={{ minWidth: '345px' }}
                key={`card-${index}`}
              >
                <CustomCard src={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
