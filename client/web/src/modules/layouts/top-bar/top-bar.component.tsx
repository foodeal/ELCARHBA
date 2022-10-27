import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import styles from "./top-bar.module.scss";
import { SocialMediABlock } from "@shared/components/SocialMediaBlock/social-media-block.component";
import { ContactBlock } from "@shared/components/ContactBlock/contact-block.component";
import { Button } from "@mui/material";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const TopBar: React.FC = () => {
  return (
    <AppBar position="static" className={styles.topbar_container}>
      <Toolbar disableGutters className={styles.toolbar}>
        <Box sx={{ flexGrow: 1 }} className={styles.left_toolbar}>
          <ContactBlock horizontal />
        </Box>

        <Box sx={{ flexGrow: 0 }} className={styles.right_toolbar}>
          <Button
            className={styles.typography_2}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              mr: 2,
              ml: { xs: 2, md: 3 },
              pr: 1,
              color: "inherit",
              textDecoration: "none"
            }}
          >
            Vous êtes prestataires?
          </Button>
          <SocialMediABlock />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
