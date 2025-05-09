import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import { Button, Box, Container, Typography, Tooltip } from "@mui/material";
import { spacing } from "@mui/system";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";

const Wrapper = styled.div`
  ${spacing};
  text-align: center;
`;

const TypographyOverline = styled(Typography)`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const BrandIcon = styled.img`
  vertical-align: middle;
  height: auto;
`;

const Brand = styled.div`
  background: white;
  display: inline-block;
  padding: 12px 16px;
  border-radius: 10px;
  margin: 10px;
`;

const ArrowForward = styled(ArrowForwardIcon)`
  margin-left: ${(props) => props.theme.spacing(2)};
`;

function Integrations() {
  return (
    <Wrapper py={20}>
      <Container>
        <TypographyOverline variant="body2" gutterBottom>
          Nos Partenaires
        </TypographyOverline>
        <Typography variant="h2" component="h3" gutterBottom>
         Plusieurs partenaires nous font confiance 
        </Typography>

        <Box my={7}>
          <Tooltip title="Firebase Authentication">
            <Brand>
              <BrandIcon
                alt="Firebase Authentication"
                src="/static/img/brands/firebase.svg"
                style={{ height: "40px" }}
              />
            </Brand>
          </Tooltip>
          <Tooltip title="Le Rayon vert">
            <Brand>
              <BrandIcon
                alt="Le Rayon vert"
                src="/src/pages/img/Lrv (2).svg" // Nouveau chemin
                style={{ height: "40px" }}
              />
            </Brand>
          </Tooltip>
          <Tooltip title="Google Cloud Platform">
            <Brand>
              <BrandIcon
                alt="Google Cloud Platform" 
                src="/src/pages/img/google_cloud.svg" // Nouveau chemin
                style={{ height: "40px" }}
              />
            </Brand>
          </Tooltip>

          <Tooltip title="Sodeico">
            <Brand>
              <BrandIcon
                alt="Sodeico"
                src="/src/pages/img/Sodeico_logo.svg" // Nouveau chemin
                style={{ height: "40px" }}
              />
            </Brand>
          </Tooltip>        
        </Box>
        <Box>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Integrations;
