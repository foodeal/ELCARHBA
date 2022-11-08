import React, { MouseEvent } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useRouter } from 'next/router';

import styles from './card.module.scss';

interface CustomCardProps {
  url: string;
}

export const CustomHorizontalCard = ({ url }: CustomCardProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: !matches ? 'row' : 'column',
        position: 'relative'
      }}
    >
      <CardMedia
        component='img'
        alt='green iguana'
        image={url}
        sx={{
          filter: 'brightness(0.5)',
          width: 'unset',
          minWidth: '200px',
          maxWidth: !matches ? '300px' : 'unset'
        }}
      />
      <div className={styles.card_rating}>
        <Rating
          value={4.2 / 5}
          precision={0.1}
          max={1}
          readOnly
          sx={{ color: 'white' }}
        />
        <span>4.2</span>
      </div>
      <CardContent>
        <Typography
          gutterBottom
          variant='h6'
          component='div'
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          Vidange
          <FavoriteBorderIcon sx={{ color: '#A70508' }} />
        </Typography>
        <Grid container direction='column'>
          <Grid item className={styles.card_details}>
            <LocationOnIcon /> <p>Tunis, Montplaisir</p>
          </Grid>
          <Grid
            item
            style={{ color: '#095D00' }}
            className={styles.card_details}
          >
            <CheckCircleIcon /> <p>Disponible (3 articles restants)</p>
          </Grid>
          <Grid item className={styles.card_details}>
            <TimeToLeaveIcon />
            <p>Nabeul, rue Alia 2000</p>
          </Grid>
          <Grid item>
            <CardActions
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', md: 'row' }
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography gutterBottom variant='h6' component='div'>
                  220.000 TND
                </Typography>
                <Typography
                  gutterBottom
                  variant='body1'
                  component='div'
                  sx={{ color: '#A70508', textDecoration: 'line-through' }}
                >
                  300.000 TND
                </Typography>
              </div>
              <Button
                className={styles.btn_learn_more}
                size='small'
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  router.push('/offers/464');
                }}
              >
                Plus de details
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
