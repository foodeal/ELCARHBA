import * as React from 'react';
import type { NextPageWithLayout } from '../_app';
import { Layout } from '@modules/layouts/layout.component';
import { Offers } from '@modules/offers/offers.component';

const OffersPage: NextPageWithLayout = () => {
  return <Offers />;
};

OffersPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default OffersPage;