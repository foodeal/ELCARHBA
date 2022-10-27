import React, { useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import smoothscroll from "smoothscroll-polyfill";
import {
  Button,
  Divider,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery
} from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import {
  FooterFirstSectionActionsEnum,
  FooterSecondSectionActionsEnum
} from "@core/enums";
import { PolygonButton } from "@shared/components/Buttons";
import { ContactBlock } from "@shared/components/ContactBlock/contact-block.component";
import { SocialMediABlock } from "@shared/components/SocialMediaBlock/social-media-block.component";
import styles from "./footer.module.scss";

export const Footer: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const scrollup = () => {
    document.querySelector("body")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    smoothscroll.polyfill();
  });

  return (
    <footer
      className={`${styles.footer_container} ${
        matches ? styles.footer_container_mobile : ""
      }`}
    >
      <Grid
        container
        justifyContent="space-between"
        className={styles.footer_content}
      >
        <Grid
          md={3}
          lg={3}
          xl={3}
          sm={6}
          xs={6}
          item
          className={styles.footer_logo_container}
        >
          <Grid
            container
            alignItems="flex-start"
            className={styles.footer_logo}
          >
            <Image
              src="/blackAndWhiteLogo.svg"
              alt="black and white logo"
              layout="fill"
            />
          </Grid>
        </Grid>
        <Hidden mdUp>
          <Grid md={6} item sm={6} xs={6}>
            <Grid
              container
              justifyContent="flex-end"
              className={styles.social_media_mobile}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton className={styles.list_item}>
                    <ListItemText primary={"Suivez Nous"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <SocialMediABlock disablePadding />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Grid container className={styles.divider}>
            <Divider />
          </Grid>
        </Hidden>
        <Grid md={2} lg={2} sm={6} xs={6} item>
          <List>
            {FooterFirstSectionActionsEnum.selectedItems.map(item => (
              <ListItem disablePadding key={`footer-item-${item.value}`}>
                <ListItemButton className={styles.list_item}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid md={2} lg={2} sm={6} xs={6} item>
          <List>
            {FooterSecondSectionActionsEnum.selectedItems.map(item => (
              <ListItem disablePadding key={`footer-item-${item.value}`}>
                <ListItemButton className={styles.list_item}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Hidden mdUp>
          <Grid
            container
            className={`${styles.divider} ${styles.divider_shadow}`}
          >
            <Divider />
          </Grid>
        </Hidden>
        <Grid md={2} lg={2} sm={12} xs={12} item>
          <List disablePadding>
            <ListItem disablePadding>
              <ContactBlock isResponsive={false} />
            </ListItem>
            <ListItem disablePadding className={styles.contact_button}>
              <PolygonButton
                isMobile={matches}
                content={
                  <>
                    Contact <ChevronRightIcon className={styles.contact_svg} />
                  </>
                }
                onClick={() => console.log("clicked")}
              />
              <Hidden mdUp>
                <Button className={styles.up_button} onClick={() => scrollup()}>
                  <KeyboardArrowUpIcon />
                </Button>
              </Hidden>
            </ListItem>
          </List>
        </Grid>
        <Hidden mdDown>
          <Grid md={2} lg={2} item>
            <Grid container justifyContent="flex-end">
              <List>
                <ListItem disablePadding>
                  <ListItemButton className={styles.list_item}>
                    <ListItemText primary={"Suivez Nous"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <SocialMediABlock disablePadding />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    className={styles.up_button}
                    onClick={() => scrollup()}
                  >
                    <ListItemIcon>
                      <KeyboardArrowUpIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        container
        className={styles.footer_copyright}
        justifyContent="center"
        alignItems="center"
      >
        © Copyright elcarhba.tn
      </Grid>
    </footer>
  );
};
