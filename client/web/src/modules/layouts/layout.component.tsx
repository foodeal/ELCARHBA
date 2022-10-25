import React, { ReactNode } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Navbar } from "./navbar/navbar.component";
import { Footer } from "./footer/footer.component";
import { TopBar } from "./top-bar/top-bar.component";

import styles from "./layout.module.scss";
import { Grid } from "@mui/material";
import Snackbar from "@modules/Snackbar/snackbar.component";
interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid container>
      <div className={styles.layout_container}>
        <div className={styles.app_header}>
          <TopBar />
          <Navbar />
        </div>
        {children}
        <div className={styles.layout_footer}></div>
        <Footer />
      </div>
      <Snackbar />
    </Grid>
  );
};
