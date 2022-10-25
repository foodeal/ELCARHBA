import React from 'react';
import { Grid } from '@mui/material';
import { BestOffers } from './best-offers/best-offers.component';
import { OfferOfTheDay } from './offer-of-the-day/offer-of-the-day.component';
import { Partners } from './partners/partners.component';
import { Statistics } from './statistics/statistics.component';



export const Home: React.FC = () => {
  return <Grid container direction="column">

    <Grid item> <OfferOfTheDay /> </Grid>
    <Grid item> <BestOffers/> </Grid>
    <Grid item> <Statistics/> </Grid>
    <Grid item> <Partners/> </Grid>

  </Grid>
};