import * as React from "react";
import type { NextPageWithLayout } from "./_app";
import { Layout } from "@modules/layouts/layout.component";
import { Tracking } from '@modules/tracking/tracking.component';

const TrackingPage: NextPageWithLayout = () => {
  return <Tracking />;
};

TrackingPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default TrackingPage;
