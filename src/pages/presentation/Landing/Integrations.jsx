import React from "react";
import styled from "@emotion/styled";
import { Tooltip, Box, Container, Typography } from "@mui/material";
import { spacing } from "@mui/system";

// Import des images SVG depuis le dossier illustrations
import lrvLogo from "../../illustrations/Lrv.svg";
import sodeicoLogo from "../../illustrations/Sodeico.svg";

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

function Integrations() {
  return (
    <Wrapper py={20}>
      <Container>
        <TypographyOverline variant="body2" gutterBottom>
          Nos Partenaires
        </TypographyOverline>
        <Typography variant="h2" component="h3" gutterBottom>
          Nos partenaires stratégiques
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Cloudium s'intègre parfaitement avec des partenaires de confiance pour offrir une expérience optimale.
        </Typography>

        <Box my={7}>
          {/* Logo Lrv */}
          <Tooltip title="Le rayon vert">
            <Brand>
              <BrandIcon
                alt="Lrv"
                src={lrvLogo} // Mise à jour du chemin
                style={{ height: "80px" }}
              />
            </Brand>
          </Tooltip>

          {/* Logo Sodeico */}
          <Tooltip title="Sodeico">
            <Brand>
              <BrandIcon
                alt="Sodeico"
                src={sodeicoLogo} // Mise à jour du chemin
                style={{ height: "60px" }}
              />
            </Brand>
          </Tooltip>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Integrations;
