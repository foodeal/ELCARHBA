import * as React from 'react';
import type { NextPageWithLayout } from './_app';
import { Layout } from '@modules/layouts/layout.component';
import { UserProfile } from '@modules/auth/user-profile/user-profile.component';

const ProfilePage: NextPageWithLayout = () => {
  return <UserProfile />;
};

ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ProfilePage;
