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
  padding: 20px; // Default padding

  ${(props) => props.theme.breakpoints.down("sm")} {
    padding: 10px; // Reduced padding for mobile
  }
`;

const TypographyOverline = styled(Typography)`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const Brand = styled.div`
  background: white;
  display: inline-block;
  padding: 12px 16px;
  border-radius: 10px;
  margin: 10px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    padding: 8px 12px; // Reduced padding for mobile
    margin: 6px; // Reduced margin for mobile
  }
`;

const BrandIcon = styled.img`
  vertical-align: middle;
  height: auto;

  ${(props) => props.theme.breakpoints.down("sm")} {
    height: 50px; // Reduced logo size for mobile
  }
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

        <Box my={7} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
          {/* Logo Lrv */}
          <Tooltip title="Le rayon vert">
            <Brand>
              <BrandIcon
                alt="Lrv"
                src={lrvLogo}
                style={{ height: "80px" }} // Default size
              />
            </Brand>
          </Tooltip>

          {/* Logo Sodeico */}
          <Tooltip title="Sodeico">
            <Brand>
              <BrandIcon
                alt="Sodeico"
                src={sodeicoLogo}
                style={{ height: "60px" }} // Default size
              />
            </Brand>
          </Tooltip>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Integrations;
