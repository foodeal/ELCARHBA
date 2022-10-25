import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styles from "./social-media.module.scss";

interface SocialMediABlockPropertis {
  disablePadding?: boolean;
}
export const SocialMediABlock: React.FC<SocialMediABlockPropertis> = ({
  disablePadding = false
}) => {
  return (
    <List className={styles.social_media} disablePadding={disablePadding}>
      <ListItem disablePadding className={styles.social_media_item}>
        <Typography
          variant="body2"
          component="a"
          href="/"
          className={styles.typography_1}
          sx={{
            ml: { xs: 2, md: 3 },
            color: "inherit",
            textDecoration: "none"
          }}
        >
          <YouTubeIcon />
        </Typography>
        <Typography
          variant="body2"
          component="a"
          href="/"
          className={styles.typography_1}
          sx={{
            ml: { xs: 2, md: 3 },
            color: "inherit",
            textDecoration: "none"
          }}
        >
          <WhatsAppIcon />
        </Typography>
        <Typography
          variant="body2"
          component="a"
          href="/"
          className={styles.typography_1}
          sx={{
            ml: { xs: 2, md: 3 },
            color: "inherit",
            textDecoration: "none"
          }}
        >
          <InstagramIcon />
        </Typography>
        <Typography
          variant="body2"
          component="a"
          href="/"
          className={styles.typography_1}
          sx={{
            ml: { xs: 2, md: 3 },
            color: "inherit",
            textDecoration: "none"
          }}
        >
          <FacebookIcon />
        </Typography>
      </ListItem>
    </List>
  );
};
