import React from 'react';
import { Button, Grid } from '@mui/material';
import { Partners } from '@modules/home/partners/partners.component';

import styles from './about.module.scss';

export const About: React.FC = () => {
  return (
    <Grid container direction='column' className={styles.about_container}>
      <Grid item className={styles.header}>
        <div className={styles.header_description}>
          Créer votre compte gratuitement
        </div>
        <Button className={styles.header_button}>Mon Compte</Button>
      </Grid>
      <Grid item className={styles.about_body}>
        <h1 className={styles.body_title}> A Propos De Nous</h1>
        <p className={styles.body_description}>
          Elcarhba.tn est une plateforme dédiée aux propriétaires de voitures
          pour trouver les meilleures offres adapté à leurs besoins automobiles.
          Nous Sommes un espace de confiance qui propose desservoces de haut
          niveau et oriente les propriétaires de voitures vers les meilleures
          prestataires de services en Tunisie.
          <br />
          <br />
          Nous proposons également un service d&apos;expédition de produits
          automobiles avec la possibilité de paiment en ligne ou à la livraison.
          Les propriétaires de voitures peuvent enregistrer l&apos;historique de
          leurs voitures et avoir un carnet de suivi.
        </p>
      </Grid>
      <Grid item>
        <Partners />
      </Grid>
    </Grid>
  );
};
