import React, { MouseEvent } from 'react';
import { Button, Grid, Rating } from '@mui/material';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import { Spec } from './spec.component';

import styles from './single-offer.module.scss';
import { useDispatch } from 'react-redux';
import { openModal } from '@shared/components';
import { ModalIdEnum } from '@core/enums';

export const SingleOffer: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Grid container className={styles.single_offer_container}>
      <Grid item xs={12} md={3} className={styles.single_offer_left_container}>
        <Image
          alt='cover'
          src='/examples/entretien1.jpg'
          width={300}
          height={300}
        />
      </Grid>
      <Grid item xs={12} md={8} className={styles.single_offer_right_container}>
        <div className={styles.title_container}>
          <h1 className={styles.title}> Nom de l&apos;offre</h1>

          <span className={styles.likes_container}>
            <FavoriteBorderIcon />
            <span className={styles.number_of_likes}>03</span>
          </span>
        </div>
        <p className={styles.ref}>
          Réference: <span>az522dfd9</span>
        </p>
        <span className={styles.rating}>
          <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
          <span className={styles.rating_details}> (5) revue</span>
        </span>
        <div className={styles.disponibility}>
          <div className={styles.availability}>
            <CheckCircleIcon /> <p>10/50 disponibles</p>
          </div>
          <div className={styles.availability2}>
            <TimeToLeaveIcon /> <p>VW Golf</p>
          </div>
          <div className={styles.availability2}>
            <AccessTimeFilledIcon /> <p>Jusqu`à 21/02/2022</p>
          </div>
        </div>
        <p className={styles.rating_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsa
          quod dolores aperiam id impedit quaerat est sint eos, asperiores omnis
          nobis fugiat at minima dolorum voluptates amet velit dolorem. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Odit ipsa quod
          dolores aperiam id impedit quaerat est sint eos, asperiores omnis
          nobis fugiat at minima dolorum voluptates amet velit dolorem.
        </p>
        <div className={styles.btn_container}>
          <div className={styles.first_btns_set}>
            <Button className={styles.offer_btn}>
              <span>220.000 TND</span>
              <span
                style={{
                  marginLeft: '1rem',
                  color: 'black',
                  textDecoration: 'line-through'
                }}
              >
                300.000 TND
              </span>
            </Button>
            <Button className={styles.discount_btn}>30%</Button>
          </div>
          <Button
            className={styles.buy_btn}
            size='small'
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              dispatch(openModal({ modalId: ModalIdEnum.Login }));
              // dispatch(openModal({ modalId: ModalIdEnum.Purchase }));
            }}
          >
            J`en profite
          </Button>
        </div>

        <div className={styles.prestataire_container}>
          <div className={styles.prestataire}>
            <PersonOutlineIcon /> <p>Contact de Prestataire</p>
          </div>
          <div className={styles.prestataire}>
            <CallIcon /> <p>+216 55 555 555</p>
          </div>
          <div className={styles.prestataire}>
            <LocationOnIcon /> <p>Cité khzema Sousse</p>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} className={styles.spec}>
        <h3> Fiche technique</h3>
        <Spec />
      </Grid>
    </Grid>
  );
};
