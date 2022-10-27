import * as React from 'react';
import type { NextPageWithLayout } from './_app';
import { Layout } from '@modules/layouts/layout.component';
import { Diagnosis } from '@modules/diagnosis/diagnosis.component';

const DiagnosisPage: NextPageWithLayout = () => {
  return <Diagnosis />;
};

DiagnosisPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default DiagnosisPage;