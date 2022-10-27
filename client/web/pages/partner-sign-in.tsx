import * as React from "react";
import type { NextPageWithLayout } from "./_app";
import { Layout } from "@modules/layouts/layout.component";
import { SignIn } from "@modules/auth/sign-in/sign-in.component";

const UserSignUpPage: NextPageWithLayout = () => {
  return <SignIn partner />;
};

UserSignUpPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default UserSignUpPage;
