import * as React from 'react';
import type { NextPageWithLayout } from '../_app';
import { Layout } from '@modules/layouts/layout.component';
import { PartnerProfile } from '@modules/auth/partner-profile/partner-profile.component';

const PartnerProfilePage: NextPageWithLayout = () => {
  return <PartnerProfile />;
};

PartnerProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PartnerProfilePage;
