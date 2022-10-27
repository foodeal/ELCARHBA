import * as React from "react";
import type { NextPageWithLayout } from "../_app";
import { Layout } from "@modules/layouts/layout.component";
import { ChooseUser } from "@modules/auth/choose-user/choose-user.component";

const ChooseUserPage: NextPageWithLayout = () => {
  return <ChooseUser />;
};

ChooseUserPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ChooseUserPage;
