import * as React from 'react';
import type { NextPageWithLayout } from '../_app';
import { Layout } from '@modules/layouts/layout.component';
import { Partners } from '@modules/partners/partners.component';

const PartnersPage: NextPageWithLayout = () => {
  return <Partners />;
};

PartnersPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PartnersPage;