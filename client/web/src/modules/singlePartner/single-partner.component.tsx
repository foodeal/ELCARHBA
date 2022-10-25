import { Avatar, Grid, useMediaQuery, useTheme } from '@mui/material';
import { CustomCard, MiniPagination, Pagination } from '@shared/components';
import { SocialMediABlock } from '@shared/components/SocialMediaBlock/social-media-block.component';
import { colors } from '@shared/theme';
import React, { useState } from 'react';

import styles from './single-partner.module.scss';

export const SinglePartner: React.FC = () => {
  const [page, setPage] = useState(1);

  const handleChangePage = (value: number) => {
    setPage(value);
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid container direction='column' className={styles.singleParnerContainer}>
      <Grid item className={styles.banner}>
        <Avatar
          alt='Remy Sharp'
          src='/examples/profile.png'
          sx={{ width: matches ? 100 : 160, height: matches ? 100 : 160 }}
        />
      </Grid>
      <Grid item className={styles.garage_name_container}>
        <div>
          <h2>Garage Foulen</h2>
          <a> www.garage_foulen.tn</a>
        </div>

        <h3 style={{ color: colors.ELCARHBA_YELLOW }}>100 offres</h3>
      </Grid>
      <Grid item className={styles.garage_social_media}>
        <SocialMediABlock />
      </Grid>
      <Grid item className={styles.garage_offers}>
        <Grid
          container
          justifyContent='space-between'
          alignItems='center'
          style={{ paddingBottom: '2rem' }}
        >
          <Grid item>
            <div className={styles.offers_titles}>Offres du prestaires</div>
          </Grid>
          <Grid item>
            <MiniPagination
              count={10}
              page={page}
              handleChange={handleChangePage}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction={'row'}
            rowSpacing={2}
            columnSpacing={2}
            justifyContent='space-between'
          >
            {[
              '/examples/piston.jpg',
              '/examples/brembo.jpg',
              '/examples/brembo2.jpg',
              '/examples/injector.jpg',
              '/examples/filter.jpg',
              '/examples/bougie.jpg'
            ].map(index => (
              <Grid item xs={12} sm={6} md={4} key={`card2-${index}`}>
                <CustomCard src={index} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item style={{ marginBottom: '2rem' }}>
          <Pagination count={10} page={page} handleChange={handleChangePage} />
        </Grid>
      </Grid>
    </Grid>
  );
};
