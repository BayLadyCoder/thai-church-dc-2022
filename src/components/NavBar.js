import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { theme } from "../theme";
import useMediaQuery from "@mui/material/useMediaQuery";

const pages = [
  { name: "Home", link: "/", target: "_self" },
  { name: "Services", link: "#services", target: "_self" },
  { name: "About", link: "#about", target: "_self" },
  { name: "Missions", link: "#missions", target: "_self" },
  {
    name: "Events",
    link: "https://www.facebook.com/groups/thaichurchdc/events",
    target: "_blank",
  },
  { name: "Contact", link: "#footer", target: "_self" },
  {
    name: "Give",
    link: "https://www.facebook.com/donate/489870772734048/10151866592844990/",
    target: "_blank",
  },
];

const fullName = "Thai Christian Church DC";
const shortName = "TCCDC";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="static"
      sx={{ background: theme.palette.primary.black, padding: "0 20px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              color: theme.palette.primary.light,
              fontWeight: "bold",
              fontFamily: "Roboto Slab, serif",
              textShadow: `-1px 0 ${theme.palette.primary.logoShadow}, 0 1px ${theme.palette.primary.logoShadow}, 1px 0 ${theme.palette.primary.logoShadow}, 0 -1px ${theme.palette.primary.logoShadow}`,
            }}
          >
            {isMobile ? shortName : fullName}
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {pages.map(({ name, link, target }, index) =>
              index < pages.length - 1 ? (
                <Button
                  className="nav-link"
                  key={name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: theme.palette.primary.text,
                    fontWeight: "bold",
                  }}
                  target={target}
                  href={`${link}`}
                >
                  {name}
                </Button>
              ) : (
                <Button
                  key={name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: theme.palette.primary.white,
                    fontWeight: "bold",
                    border: `1px solid ${theme.palette.primary.white}`,
                    borderRadius: "10px",
                    marginLeft: "10px",
                    padding: "0 10px",
                    height: "30px",
                  }}
                  target={target}
                  href={`${link}`}
                  variant="contained"
                  color="secondary"
                >
                  {name}
                </Button>
              )
            )}
          </Box>

          {/* small device */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
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
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Button
                    target={page.target}
                    href={page.link}
                    sx={{
                      color: theme.palette.primary.black,
                    }}
                  >
                    {page.name}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
