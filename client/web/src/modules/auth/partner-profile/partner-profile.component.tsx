import ConstructionIcon from '@mui/icons-material/Construction';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Avatar, Grid, useMediaQuery, useTheme } from '@mui/material';
import { CustomCard, MiniPagination, Pagination } from '@shared/components';
import { EditCard } from '@shared/components/edit-card/edit-card.component';
import { colors } from '@shared/theme';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

import styles from './partner-profile.module.scss';

export const PartnerProfile: React.FC = () => {
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
            <span>www.garage_foulen.tn</span>{' '}
            <EditIcon style={{ marginLeft: '1rem', cursor: 'pointer' }} />
          </a>
        </div>

        <div className={styles.tab_container}>
          <a onClick={()=> setOffersPage(false)} className={!offersPage ? styles.active : styles.inactive}>
            50 Produits
          </a>{' '}
          <a onClick={()=> setOffersPage(true)} className={offersPage ? styles.active : styles.inactive}>
            100 offres
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
          <EditCard title={'Contact'}>
            <Grid container direction='column'>
              <Grid item className={styles.card_details}>
                <FacebookIcon style={{ color: '#3b5998' }} />{' '}
                <p>nom du garage</p>
              </Grid>
              <Grid item className={styles.card_details}>
                <InstagramIcon style={{ color: '#bc2a8d' }} />{' '}
                <p>{'garage foulen'}</p>
              </Grid>
              <Grid item className={styles.card_details}>
                <WhatsAppIcon style={{ color: '#075e54' }} />
                <p>{'garage foulen'}</p>
              </Grid>
            </Grid>
          </EditCard>
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
              <Grid item className={styles.card_details}>
                <ConstructionIcon style={{ color: '#d99b39' }} />{' '}
                <p>Service de réparations</p>
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
                <div className={styles.offers_titles}>Liste des { !offersPage ? 'produits': 'offres'}</div>
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
