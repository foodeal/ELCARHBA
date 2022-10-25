import * as React from 'react';
import type { NextPageWithLayout } from '../_app';
import { Layout } from '@modules/layouts/layout.component';
import { SingleOffer } from '@modules/singleOffer/single-offer.component';

const SingleOfferPage: NextPageWithLayout = () => {
  return <SingleOffer />;
};

SingleOfferPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SingleOfferPage;