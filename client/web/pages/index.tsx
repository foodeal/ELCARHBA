import * as React from 'react';
import type { NextPageWithLayout } from './_app';
import { Layout } from '@modules/layouts/layout.component';
import { Home } from '@modules/home/home.component';

const HomePage: NextPageWithLayout = () => {
  return <Home />;
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
