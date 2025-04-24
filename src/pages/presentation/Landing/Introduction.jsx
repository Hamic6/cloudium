import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { rgba } from "polished";
import {
  Box,
  Button,
  Container,
  Grid,
  Tooltip,
  Typography as MuiTypography,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { spacing } from "@mui/system";
import { Visibility as VisibilityIcon } from "@mui/icons-material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";

// Import de l'image home.png
import homeImage from "../../illustrations/home.png";

const Typography = styled(MuiTypography)(spacing);

const Wrapper = styled.div`
  padding-top: 3.5rem;
  position: relative;
  text-align: center;
  overflow: hidden;
  min-height: calc(100vh - 56px); /* Hauteur minimale de l'écran moins la hauteur de l'en-tête */
  display: flex;
  flex-direction: column;
  justify-content: center;

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
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  ${props => props.theme.breakpoints.down("sm")} {
    padding-top: 2rem;
    min-height: calc(100vh - 64px);
  }
`;

const Content = styled.div`
  padding: ${props => props.theme.spacing(6)} 0;
  line-height: 150%;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${props => props.theme.breakpoints.down("md")} {
    padding: ${props => props.theme.spacing(4)} 0;
  }

  ${props => props.theme.breakpoints.down("sm")} {
    padding: ${props => props.theme.spacing(3)} 0;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  min-height: 30vh;
  display: block;
  box-shadow: 0 6px 18px 0 ${props => rgba(props.theme.palette.common.black, 0.075)};
  border-radius: 8px;
  z-index: 0;
  position: relative;
  image-rendering: optimizequality;
  margin: 0 auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  ${props => props.theme.breakpoints.up("xl")} {
    max-width: 90%;
  }

  ${props => props.theme.breakpoints.down("md")} {
    margin-top: ${props => props.theme.spacing(2)};
    margin-bottom: ${props => props.theme.spacing(2)};
  }

  ${props => props.theme.breakpoints.down("sm")} {
    min-height: 25vh;
    border-radius: 6px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  margin: ${props => props.theme.spacing(4)} auto;
  max-width: 1200px;

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

  ${props => props.theme.breakpoints.down("md")} {
    margin: ${props => props.theme.spacing(3)} auto;
  }

  ${props => props.theme.breakpoints.down("sm")} {
    margin: ${props => props.theme.spacing(2)} auto;
    &:before {
      height: 50px;
    }
  }
`;

const Title = styled(Typography)`
  opacity: 0.9;
  line-height: 1.3;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  margin-bottom: ${(props) => props.theme.spacing(3)};
  color: ${(props) => props.theme.palette.text.primary};

  ${(props) => props.theme.breakpoints.up("xl")} {
    font-size: 3rem;
  }

  ${(props) => props.theme.breakpoints.up("lg")} {
    font-size: 2.75rem;
  }

  ${(props) => props.theme.breakpoints.up("md")} {
    font-size: 2.5rem;
  }

  ${(props) => props.theme.breakpoints.up("sm")} {
    font-size: 2.25rem;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 1.5rem; /* Réduction de la taille sur mobile */
    margin-bottom: ${(props) => props.theme.spacing(2)};
  }

  span {
    color: ${(props) => props.theme.palette.secondary.main};
    font-weight: ${(props) => props.theme.typography.fontWeightBold};
  }
`;

const Subtitle = styled(Typography)`
  font-size: 1.25rem;
  font-weight: ${props => props.theme.typography.fontWeightRegular};
  margin: ${props => props.theme.spacing(2)} auto;
  max-width: 800px;
  color: ${props => props.theme.palette.text.secondary};
  line-height: 1.6;

  ${props => props.theme.breakpoints.up("xl")} {
    font-size: 1.5rem;
  }

  ${props => props.theme.breakpoints.down("md")} {
    font-size: 1.1rem;
    max-width: 90%;
  }

  ${props => props.theme.breakpoints.down("sm")} {
    font-size: 1rem;
    margin: ${props => props.theme.spacing(1.5)} auto;
    line-height: 1.5;
  }
`;

const StyledButton = styled(Button)`
  padding: ${props => props.theme.spacing(1.5)} ${props => props.theme.spacing(4)};
  font-weight: ${props => props.theme.typography.fontWeightMedium};
  margin: ${props => props.theme.spacing(3)} 0;

  ${props => props.theme.breakpoints.down("sm")} {
    padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(3)};
    margin: ${props => props.theme.spacing(2)} 0;
  }
`;

const Visibility = styled(VisibilityIcon)`
  margin-right: ${props => props.theme.spacing(1)};
`;

const ArrowForward = styled(ArrowForwardIcon)`
  margin-left: ${props => props.theme.spacing(1)};
`;

function Introduction() {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTriggerAnimation(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={10} lg={8}>
            <Content>
              <Title variant="h1" gutterBottom>
                Simplifiez votre gestion avec <span>Cloudium</span>
              </Title>
              
              <Subtitle color="textSecondary">
                Cloudium est un ERP spécialisé dans la gestion de la facturation et des stocks. Conçu pour les entreprises de toutes tailles, il offre des outils puissants et une interface intuitive pour optimiser vos processus.
              </Subtitle>

              <Box>
                <StyledButton
                  href="#demos"
                  variant="contained"
                  color="secondary"
                  size={isMobile ? "medium" : "large"}
                >
                  <Visibility fontSize={isMobile ? "small" : "medium"} />
                  Voir la démo
                  <ArrowForward fontSize={isMobile ? "small" : "medium"} />
                </StyledButton>
              </Box>
            </Content>
          </Grid>

          <Grid item xs={12} md={10} lg={9}>
            <div
              className={`animate__animated ${
                triggerAnimation ? "animate__perspective" : ""
              }`}
              style={{ opacity: triggerAnimation ? 1 : 0 }}
            >
              <ImageWrapper>
                <NavLink to="/dashboard/analytics" target="_blank">
                  <Image
                    alt="Cloudium ERP Dashboard"
                    src={homeImage}
                    style={{
                      maxHeight: isMobile ? "250px" : isTablet ? "350px" : "450px"
                    }}
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