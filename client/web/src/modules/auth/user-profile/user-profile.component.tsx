import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import { Avatar, Button, Grid, useMediaQuery, useTheme } from '@mui/material';
import { Pagination } from '@shared/components';
import { EditCard } from '@shared/components/edit-card/edit-card.component';
import React, { useState } from 'react';

import styles from './user-profile.module.scss';

export const UserProfile: React.FC = () => {
  const [page, setPage] = useState(1);
  const [offersPage, setOffersPage] = useState(false);

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
          <a style={{ display: 'flex', alignItems: 'center' }}>
            {' '}
            <span>ID525</span>{' '}
          </a>
        </div>

        <div className={styles.tab_container}>
          <a onClick={()=> setOffersPage(false)} className={ styles.active }>
            15 offres utilisées
          </a>{' '}
          <a onClick={()=> setOffersPage(true)} className={ styles.inactive}>
            gain 200dt
          </a>{' '}
        </div>
      </Grid>

      <Grid
        container
        direction='row'
        className={styles.profile_containers}
        justifyContent='space-between'
        gap={3}
      >
        <Grid xs={11} md={3} className={styles.profile_left_container}>
          
          <EditCard title={'Informations'}>
            <Grid container direction='column'>
              <Grid item className={styles.card_details}>
                <PersonIcon style={{ color: '#d99b39' }} /> <p>foulen ben x</p>
              </Grid>
              <Grid item className={styles.card_details}>
                <EmailIcon style={{ color: '#d99b39' }} />{' '}
                <p>foulen@gmail.com</p>
              </Grid>
              <Grid item className={styles.card_details}>
                <TimeToLeaveIcon style={{ color: '#d99b39' }} />
                <p>{'Nabeul, rue Alia 2000'}</p>
              </Grid>
            </Grid>
          </EditCard>
          <EditCard title={'Sécurité'}>
            <Grid container direction='column'>
              <Grid item className={styles.card_details}>
                <LockIcon style={{ color: '#d99b39' }} /> <p>Mot de passe</p>
              </Grid>
            </Grid>
          </EditCard>
        </Grid>
        <Grid xs={11} md={8} className={styles.profile_right_container}>
          <Grid item className={styles.garage_offers}>
            <Grid
              container
              justifyContent='space-between'
              alignItems='center'
              style={{ paddingBottom: '2rem' }}
            >
              <Grid item>
                <div className={styles.offers_titles}> historiques des offres</div>
              </Grid>
              <Grid item>
                {/* <MiniPagination
                  count={10}
                  page={page}
                  handleChange={handleChangePage}
                /> */}
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
                ].map((index, key) => (
                  <Grid item xs={12} /* sm={6} md={4} */ key={`card2-${index}`} style={{display:"flex", justifyContent:"space-between", alignItems:'center'}}>
                    <h4 style={{color:"#324a54"}}> Offre {key+1}</h4>
                    <Button style={{color:"#324a54", border :'2px solid #324a54'}}> Voir Détails</Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item style={{ marginBottom: '2rem' }}>
              <Pagination
                count={10}
                page={page}
                handleChange={handleChangePage}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid item className={styles.garage_social_media}>
        <SocialMediABlock />
      </Grid> */}
    </Grid>
  );
};
