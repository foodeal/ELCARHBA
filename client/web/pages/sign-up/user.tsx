import * as React from "react";
import type { NextPageWithLayout } from "../_app";
import { Layout } from "@modules/layouts/layout.component";
import { SignUp } from "@modules/auth/signup/sign-up.component";

const UserSignupPage: NextPageWithLayout = () => {
  return <SignUp />;
};

UserSignupPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default UserSignupPage;
