import React from "react";
import styled from "@emotion/styled";
import { Box, Button, Container, Grid2 as Grid, Typography } from "@mui/material";
import { spacing } from "@mui/system";

const Wrapper = styled.div`
  ${spacing};
  background: ${(props) => props.theme.palette.background.paper};
  text-align: center;
`;

const PlanCard = styled.div`
  border: 1px solid ${(props) => props.theme.palette.divider};
  border-radius: 8px;
  padding: ${(props) => props.theme.spacing(4)};
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`;

const PlanTitle = styled(Typography)`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;

const PlanPrice = styled(Typography)`
  font-size: ${(props) => props.theme.typography.h4.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  color: ${(props) => props.theme.palette.primary.main};
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;

const PlanFeature = styled(Typography)`
  font-size: ${(props) => props.theme.typography.body1.fontSize};
  color: ${(props) => props.theme.palette.text.secondary};
  margin-bottom: ${(props) => props.theme.spacing(1)};
`;

const ActionButton = styled(Button)`
  margin-top: ${(props) => props.theme.spacing(3)};
`;

function Features() {
  const plans = [
    {
      title: "Basic",
      price: "$30/mois",
      features: [
        "Gestion de la facturation",
        "Suivi des stocks",
        "Support par email",
      ],
    },
    {
      title: "Pro",
      price: "$70/mois",
      features: [
        "Toutes les fonctionnalités Basic",
        "Rapports avancés",
        "Intégration avec Stripe",
        "Support prioritaire",
      ],
    },
    {
      title: "Enterprise",
      price: "Sur demande",
      features: [
        "Toutes les fonctionnalités Pro",
        "Personnalisation complète",
        "Accès API dédié",
        "Support 24/7",
      ],
    },
  ];

  return (
    <Wrapper py={20}>
      <Container>
        <Typography variant="h2" component="h3" gutterBottom>
          Offres d’abonnement
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Choisissez le plan qui correspond le mieux aux besoins de votre entreprise.
        </Typography>
        <Box mt={8}>
          <Grid container spacing={6}>
            {plans.map((plan, index) => (
              <Grid
                key={index}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                }}
              >
                <PlanCard>
                  <PlanTitle>{plan.title}</PlanTitle>
                  <PlanPrice>{plan.price}</PlanPrice>
                  {plan.features.map((feature, idx) => (
                    <PlanFeature key={idx}>{feature}</PlanFeature>
                  ))}
                  <ActionButton
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    S’abonner maintenant
                  </ActionButton>
                </PlanCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Features;
