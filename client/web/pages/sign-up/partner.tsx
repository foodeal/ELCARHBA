import * as React from "react";
import type { NextPageWithLayout } from "../_app";
import { Layout } from "@modules/layouts/layout.component";
import { PartnerSignUp } from "@modules/auth/signup/sign-up-partner.component";

const PartnerSignupPage: NextPageWithLayout = () => {
  return <PartnerSignUp />;
};

PartnerSignupPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PartnerSignupPage;
