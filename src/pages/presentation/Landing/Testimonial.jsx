import React from "react";
import styled from "@emotion/styled";

import { spacing } from "@mui/system";
import {
  Avatar as MuiAvatar,
  Container as MuiContainer,
  Grid2 as Grid,
  Typography,
} from "@mui/material";

const Wrapper = styled.div`
  ${spacing};
  background: ${(props) => props.theme.palette.background.paper};
  text-align: center;
  padding-top: ${(props) => props.theme.spacing(10)};
  padding-bottom: ${(props) => props.theme.spacing(20)};

  ${(props) => props.theme.breakpoints.down("sm")} {
    padding-top: ${(props) => props.theme.spacing(6)}; // Reduced padding for mobile
    padding-bottom: ${(props) => props.theme.spacing(12)}; // Reduced padding for mobile
  }
`;

const Container = styled(MuiContainer)`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Avatar = styled(MuiAvatar)`
  ${spacing};
  width: 48px;
  height: 48px;
`;

const TypographyTitle = styled(Typography)`
  font-size: 2rem; /* Taille par défaut */
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  margin-bottom: ${(props) => props.theme.spacing(3)};

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 1rem; /* Réduction de moitié pour mobile */
    margin-bottom: ${(props) => props.theme.spacing(2)};
  }
`;

const AvatarWrapper = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing(3)};

  ${(props) => props.theme.breakpoints.down("sm")} {
    margin-top: ${(props) => props.theme.spacing(2)}; // Reduced margin for mobile
  }
`;

const TypographyBody = styled(Typography)`
  font-size: 1rem; /* Default size */
  color: ${(props) => props.theme.palette.text.secondary};

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 0.875rem; /* Reduced size for mobile */
  }
`;

function Testimonial() {
  return (
    <Wrapper>
      <Container>
        <Grid container alignItems="center" justifyContent="center">
          <Grid
            size={{
              xs: 12,
              md: 8,
            }}
          >
            <TypographyTitle variant="h3" component="h3" gutterBottom>
              &quot;Cloudium est une application qui a su gérer et moderniser la facturation dans notre 
              Entreprise &quot;
            </TypographyTitle>
            <AvatarWrapper>
              <TypographyBody color="textSecondary" variant="body2">
                Cyrille Navarre
                <br />
                Directeur chez {"Rayonvert "}
              </TypographyBody>
            </AvatarWrapper>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default Testimonial;
