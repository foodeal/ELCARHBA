import * as React from 'react';
import type { NextPageWithLayout } from '../_app';
import { Layout } from '@modules/layouts/layout.component';
import { SinglePartner } from '@modules/singlePartner/single-partner.component';

const SinglePartnerPage: NextPageWithLayout = () => {
  return <SinglePartner />;
};

SinglePartnerPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SinglePartnerPage;