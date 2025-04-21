import React from "react";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";
import { Link } from "react-router-dom";

import {
  AppBar,
  Button as MuiButton,
  Container,
  Grid2 as Grid,
  Box,
  Toolbar,
} from "@mui/material";

import { ReactComponent as Logo } from "@/vendor/logo.svg";

const Button = styled(MuiButton)(spacing);

const Brand = styled.div`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const BrandIcon = styled(Logo)`
  margin-right: ${(props) => props.theme.spacing(2)};
  margin-top: -2px;
  color: ${(props) => props.theme.sidebar.header.brand.color};
  fill: ${(props) => props.theme.sidebar.header.brand.color};
  width: 32px;
  height: 32px;

  vertical-align: middle;
  display: inline;
`;

const AppBarComponent = () => (
  <React.Fragment>
    <AppBar position="relative" color="transparent" elevation={0}>
      <Toolbar>
        <Container>
          <Grid container alignItems="center">
            {/* Logo et nom de la marque */}
            <Grid>
              <Brand>
                <BrandIcon /> Cloudium
              </Brand>
            </Grid>

            {/* Liens de navigation */}
            <Grid size="grow" />
            <Grid>
              <Box sx={{ display: { xs: "none", md: "inline-block" } }}>
                <Button
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="/"
                >
                  Accueil
                </Button>
                <Button
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="/pricing"
                >
                  Tarifs
                </Button>
                <Button
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="/support"
                >
                  Support
                </Button>
                <Button
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="/about"
                >
                  À propos
                </Button>
              </Box>
            </Grid>

            {/* Boutons Connexion et Inscription */}
            <Grid>
              <Button
                ml={2}
                color="inherit"
                component={Link}
                to="/login"
              >
                Connexion
              </Button>
              <Button
                ml={2}
                color="primary"
                variant="contained"
                component={Link}
                to="/signup"
              >
                Inscription
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  </React.Fragment>
);

export default AppBarComponent;
