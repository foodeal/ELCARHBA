import * as React from 'react';
import type { NextPageWithLayout } from './_app';
import { Layout } from '@modules/layouts/layout.component';
import { About } from '@modules/about/about.component';

const AboutPage: NextPageWithLayout = () => {
  return <About />;
};

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AboutPage;