import * as React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { colors } from "@shared/theme";
import { PolygonButton } from "@shared/components/Buttons";
import { NavbarActionsEnum } from "@core/enums";
import { isConnected } from "@core/utils/auth-verification";
import { RouterPaths } from "@core/constant";
import styles from "./navbar.module.scss";
import { redirectTo } from "@core/utils";
import Link from "next/link";


const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const Navbar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElAuth, setAnchorElAuth] = React.useState<null | HTMLElement>(
    null
  );
  const open = Boolean(anchorElAuth);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLinkClick = (link: string) => {
    setAnchorElAuth(null);
    setAnchorElUser(null);
    setAnchorElNav(null);
    redirectTo([link]);
  };

  return (
    <AppBar position="static" className={styles.topbar_container}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, my: 2 }}
            className={styles.logo}
          >
            <Image
              src="/elcarhba.svg"
              alt="logo"
              width="173"
              height="94"
              onClick={() => handleLinkClick(RouterPaths.RootPaths.rootPath)}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              color: colors.ELCARHBA_YELLOW
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon
                sx={{
                  height: "50px",
                  width: "auto"
                }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {NavbarActionsEnum.selectedItems.map(page => (
                <MenuItem key={page.value} onClick={handleCloseNavMenu}>
                  <Link href={page.link  || '/'}>
                  <Typography
                    sx={{ color: colors.DARK_navy_BLUE }}
                    textAlign="center"
                    >
                    {page.name}
                  </Typography>
                    </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "flex", md: "none" },
              mr: 1,
              my: 1
            }}
          >
            <Image src="/elcarhba.svg" alt="logo" width="132" height="72" />
          </Box>
          <Box
            className={styles.nav_btns_container}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {NavbarActionsEnum.selectedItems.map(page => (
              <Button
                key={page.value}
                onClick={() => handleLinkClick(page.link || '/')}
                sx={{
                  ml: 2,
                  mr: page.value === NavbarActionsEnum.Home ? 3 : 0,
                  my: 2,
                  color: colors.DARK_navy_BLUE,
                  display: "block"
                }}
                className={styles.nav_btns}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {isConnected() ? (
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(setting => (
                  <MenuItem key={setting} /* onClick={handleCloseUserMenu} */ onClick={()=>handleLinkClick(RouterPaths.RootPaths.userProfilePath)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box>
              <PolygonButton
                content="Mon compte"
                onClick={event => setAnchorElAuth(event.currentTarget)}
              />
              <Menu
                className={styles.account_menu}
                id="account-menu"
                anchorEl={anchorElAuth}
                open={open}
                onClose={() => setAnchorElAuth(null)}
                classes={{ paper: styles.account_dropdown }}
              >
                <MenuItem
                  onClick={() =>
                    handleLinkClick(RouterPaths.EntryPaths.partnerLoginPath)
                  }
                >
                  Se Connecter En Tant Que Prestataire
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    handleLinkClick(RouterPaths.EntryPaths.userLoginPath)
                  }
                >
                  Se Connecter En Tant Qu&apos; Abonné
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    handleLinkClick(RouterPaths.EntryPaths.chooseUserPath)
                  }
                >
                  S&apos;inscrire
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
