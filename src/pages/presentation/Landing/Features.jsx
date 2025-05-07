import React from "react";
import styled from "@emotion/styled";
import { rgba } from "polished";
import { NavLink } from "react-router-dom";

import {
  Button,
  Box,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";

import {
  Mail as MailIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  AlertCircle as AlertCircleIcon,
  Users as UsersIcon,
  FileText as FileTextIcon,
} from "lucide-react";

const Wrapper = styled.div`
  ${spacing};
  background: ${(props) => props.theme.palette.background.paper};
  text-align: center;
`;

const TypographyOverline = styled(Typography)`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const FeatureWrapper = styled.div`
  display: flex;
  text-align: left;
  padding: 18px 20px;
`;

const FeatureIcon = styled.div`
  svg {
    flex-shrink: 0;
    width: auto;
    height: 48px;
    width: 48px;
    background: ${(props) => rgba(props.theme.palette.primary.main, 0.15)};
    color: ${(props) => props.theme.palette.primary.main};
    padding: 10px;
    border-radius: 50%;
  }
`;

const ArrowForward = styled(ArrowForwardIcon)`
  margin-left: ${(props) => props.theme.spacing(2)};
`;

const Feature = ({ Icon, title, description }) => {
  return (
    <Grid
      size={{
        xs: 12,
        sm: 6,
        md: 4,
        lg: 4,
      }}
    >
      <FeatureWrapper>
        <FeatureIcon>
          <Icon />
        </FeatureIcon>
        <Box ml={6}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
        </Box>
      </FeatureWrapper>
    </Grid>
  );
};

function Features() {
  return (
    <Wrapper py={20}>
      <Container>
        <TypographyOverline variant="body2" gutterBottom>
          Fonctionnalités
        </TypographyOverline>
        <Typography variant="h2" component="h3" gutterBottom>
          Cloudium Pro
        </Typography>
        <Box mb={8} />
        <Grid container spacing={6}>
          <Feature
            Icon={BarChartIcon}
            title="Statistiques de facturation"
            description="Suivez vos données clés : total des factures émises, montant total facturé et comparaison entre factures payées et en attente."
          />
          <Feature
            Icon={PieChartIcon}
            title="Graphiques et visualisations"
            description="Analysez vos performances avec des graphiques à barres ou à secteurs pour les ventes, des graphiques linéaires pour les tendances et des diagrammes pour la répartition des services."
          />
          <Feature
            Icon={UsersIcon}
            title="Gestion des clients"
            description="Ajoutez, modifiez et gérez vos clients facilement. Accédez à toutes les informations nécessaires pour chaque client. Obtenez des statistiques détaillées sur la facturation de chaque client, y compris les paiements reçus, les factures en attente et les performances globales."
          />
          
          <Feature
            Icon={AlertCircleIcon}
            title="Alertes et notifications"
            description="Recevez des rappels pour les factures en retard, les prochains paiements dus et les factures récurrentes à envoyer."
          />
          <Feature
            Icon={FileTextIcon}
            title="Personnalisation complète"
            description="Cloudium est entièrement personnalisable pour répondre à vos besoins spécifiques. Que ce soit pour des fonctionnalités uniques ou des ajustements spécifiques, notre solution s'adapte parfaitement à vos exigences."
          />
        </Grid>

        <Box mt={4}>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Features;
