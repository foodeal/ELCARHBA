import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import styles from "./contact-block.module.scss";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

interface ContactBlockProporties {
  horizontal?: boolean;
  isResponsive?: boolean;
}

export const ContactBlock: React.FC<ContactBlockProporties> = ({
  horizontal = false,
  isResponsive = true
}) => {
  return (
    <List
      className={horizontal ? styles.horizontal_list : styles.vertical_list}
    >
      <ListItem disablePadding>
        <Typography
          variant="body2"
          component="a"
          href="mailto:info@elcarhba.tn"
          className={styles.typography_1}
          sx={{
            ml: { xs: 2, md: 3 },
            color: "inherit",
            textDecoration: "none"
          }}
        >
          <MailOutlineIcon />
          <Box
            sx={{
              ml: { xs: 2, md: 2 },
              display: { xs: isResponsive ? "none" : "flex", md: "flex" }
            }}
          >
            info@elcarhba.tn
          </Box>
        </Typography>
      </ListItem>
      <ListItem disablePadding>
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
          <AccessTimeIcon />
          <Box
            sx={{
              ml: { xs: 2, md: 2 },
              display: { xs: isResponsive ? "none" : "flex", md: "flex" }
            }}
          >
            Lun-Sam 8.00 - 17.00.Dim fermé
          </Box>
        </Typography>
      </ListItem>
      <ListItem disablePadding>
        <Typography
          variant="body2"
          component="a"
          href="tel:+213 29 258 369"
          className={styles.typography_1}
          sx={{
            ml: { xs: 2, md: 3 },
            color: "inherit",
            textDecoration: "none"
          }}
        >
          <PhoneInTalkIcon />
          <Box
            sx={{
              ml: { xs: 2, md: 2 },
              display: { xs: isResponsive ? "none" : "flex", md: "flex" }
            }}
          >
            +213 29 258 369
          </Box>
        </Typography>
      </ListItem>
    </List>
  );
};
