import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { rgba } from "polished";

import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Tooltip,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";
import { Visibility as VisibilityIcon } from "@mui/icons-material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";

const Typography = styled(MuiTypography)(spacing);

const Wrapper = styled.div`
  padding-top: 3.5rem;
  position: relative;
  text-align: center;
  overflow: hidden;

  @keyframes perspectiveAnimation {
    from {
      opacity: 0;
      transform: perspective(1500px) rotateX(0deg);
    }

    to {
      opacity: 1;
      transform: perspective(2000px) rotateX(25deg);
    }
  }

  .animate__perspective {
    animation-name: perspectiveAnimation;
  }
`;

const Content = styled.div`
  padding: ${(props) => props.theme.spacing(6)} 0;
  line-height: 150%;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  min-height: 33vh;
  display: block;
  box-shadow: 0 6px 18px 0 rgba(18, 38, 63, 0.075);
  border-radius: 5px;
  z-index: 0;
  position: relative;
  image-rendering: optimizequality;
  image-rendering: -webkit-optimize-contrast;
  margin-bottom: -100px;
  margin-top: -35px;
  ${(props) => props.theme.breakpoints.up("md")} {
    margin-top: -40px;
  }
`;

const ImageWrapper = styled.div`
  &:before {
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.02));
    bottom: 0;
    left: 0;
    position: absolute;
    content: " ";
    z-index: 1;
    display: block;
    width: 100%;
    height: 75px;
    pointer-events: none;
  }
`;

const Title = styled(Typography)`
  opacity: 0.9;
  line-height: 1.4;
  font-size: 1.75rem;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};

  ${(props) => props.theme.breakpoints.up("sm")} {
    font-size: 2rem;
  }

  ${(props) => props.theme.breakpoints.up("md")} {
    font-size: 2.5rem;
  }

  span {
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

const Subtitle = styled(Typography)`
  font-size: ${(props) => props.theme.typography.h6.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  font-family: ${(props) => props.theme.typography.fontFamily};
  margin: ${(props) => props.theme.spacing(2)} 0;
`;

const BrandIcon = styled.img`
  vertical-align: middle;
  margin-right: ${(props) => props.theme.spacing(3)};
  height: auto;
`;

const Visibility = styled(VisibilityIcon)`
  margin-right: ${(props) => props.theme.spacing(2)};
`;

const ArrowForward = styled(ArrowForwardIcon)`
  margin-left: ${(props) => props.theme.spacing(2)};
`;

const Version = styled(MuiTypography)`
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  background: ${(props) => rgba(props.theme.palette.primary.main, 0.1)};
  box-shadow: 0 1px 1px
    ${(props) => rgba(props.theme.palette.primary.main, 0.25)};
  padding: 3px 8px;
  border-radius: 4px;
  margin-bottom: ${(props) => props.theme.spacing(3)};
  display: inline-block;
`;

function Introduction() {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTriggerAnimation(true);
    }, 300);
  }, []);

  return (
    <Wrapper>
      <Container>
        <Grid container alignItems="center" justifyContent="center" spacing={4}>
          <Grid
            size={{
              xs: 12,
              sm: 9,
              md: 8,
              lg: 8,
            }}
          >
            <Content>
              <Version variant="body2">v1.0.0</Version>
              <Title variant="h1" gutterBottom>
               Le moyen le plus simple de gérer votre facturation {" "}
                <span>Cloudium</span> ERP.
              </Title>
              <Grid container justifyContent="center" spacing={4}>
                <Grid
                  size={{
                    xs: 12,
                    lg: 10,
                  }}
                >
                  <Subtitle color="textSecondary">
                   Cloudium est un ERP moderne et entièrement personnalisable, conçu pour
                   répondre aux besoins des entreprises de toutes tailles. 
                  </Subtitle>
                </Grid>
              </Grid>
              <Box my={6}>
                <Button
                  href="#demos"
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  <Visibility />
                  Essayez la démo
                  <ArrowForward />
                </Button>
              </Box>

              <Typography variant="body2" color="textSecondary">
              Entièrement responsive sur les navigateurs, y compris les mobiles et les tablettes.
              </Typography>
              <div
                className={`animate__animated ${
                  triggerAnimation ? "animate__fadeIn" : ""
                }`}
                style={{ opacity: triggerAnimation ? 1 : 0 }}
              >
                <Box my={3}>
                  <Tooltip title="Microsoft">
                    <BrandIcon
                      alt="Microsoft"
                      src="/src/pages/img/microsoft.svg" // Nouveau chemin
                      style={{ width: "83px" }} // Augmenté de moitié
                    />
                  </Tooltip>

                  <Tooltip title="iOS">
                    <BrandIcon
                      alt="iOS"
                      src="/src/pages/img/ios.svg" // Nouveau chemin
                      style={{ width: "73px" }} // Augmenté de moitié
                    />
                  </Tooltip>

                  <Tooltip title="Android">
                    <BrandIcon
                      alt="Android"
                      src="/src/pages/img/android.svg" // Nouveau chemin
                      style={{ width: "73px" }} // Augmenté de moitié
                    />
                  </Tooltip>

                  <Tooltip title="Safari">
                    <BrandIcon
                      alt="Safari"
                      src="/src/pages/img/safari.svg" // Nouveau chemin
                      style={{ width: "43px" }} // Augmenté de moitié
                    />
                  </Tooltip>

                  <Tooltip title="Edge">
                    <BrandIcon
                      alt="Edge"
                      src="/src/pages/img/edge.svg" // Nouveau chemin
                      style={{ width: "43px" }} // Augmenté de moitié
                    />
                  </Tooltip>
                </Box>
              </div>
            </Content>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center" spacing={4}>
          <Grid
            size={{
              xs: 12,
              sm: 10,
              md: 9,
              lg: 9,
            }}
          >
            <div
              className={`animate__animated ${
                triggerAnimation ? "animate__perspective" : ""
              }`}
              style={{ opacity: triggerAnimation ? 1 : 0 }}
            >
              <ImageWrapper>
                <NavLink to="/dashboard/analytics" target="_blank">
                  <Image
                    alt="Tableau de bord Cloudium"
                    src={`/src/pages/img/1.png`} // Nouveau chemin
                  />
                </NavLink>
              </ImageWrapper>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default Introduction;
