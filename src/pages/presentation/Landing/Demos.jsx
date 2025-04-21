import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Grid2 as Grid, Typography } from "@mui/material";
import { spacing } from "@mui/system";

const Wrapper = styled.div`
  ${spacing};
  background: ${(props) => props.theme.palette.background.paper};
  text-align: center;
`;

const Section = styled.div`
  ${spacing};
  text-align: center;
  margin-bottom: 64px;
`;

const DemoImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  box-shadow: 0 4px 12px 0 rgba(18, 38, 63, 0.125);
  transition: 0.15s ease-in-out;
  border-radius: 4px;

  &:hover {
    transform: scale(1.0325);
  }
`;

const TypographyOverline = styled(Typography)`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

function Demos() {
  const navigate = useNavigate();

  const handleDemoRequest = () => {
    navigate("/demo-request");
  };

  return (
    <Wrapper pt={16} pb={20} id="demos">
      <Container>
        {/* Section de présentation de Cloudium */}
        <Section>
          <TypographyOverline variant="body2" gutterBottom>
            Présentation
          </TypographyOverline>
          <Typography variant="h2" component="h3" gutterBottom>
            Cloudium : L'ERP pour une gestion simplifiée
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Cloudium est un ERP spécialisé dans la gestion de la facturation, conçu pour répondre aux besoins des entreprises de toutes tailles. Sa version Enterprise est entièrement customisable, permettant aux organisations d’adapter les fonctionnalités à leurs processus internes.
          </Typography>
        </Section>

        {/* Avantages clés */}
        <Section>
          <TypographyOverline variant="body2" gutterBottom>
            Avantages clés
          </TypographyOverline>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Automatisation de la facturation</Typography>
              <Typography variant="body2" color="textSecondary">
                Réduction des erreurs et gain de temps.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Personnalisation avancée</Typography>
              <Typography variant="body2" color="textSecondary">
                Modules ajustables selon les besoins spécifiques de chaque entreprise.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Accès en temps réel aux données</Typography>
              <Typography variant="body2" color="textSecondary">
                Suivi précis des performances et des finances.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Intégration fluide avec Stripe</Typography>
              <Typography variant="body2" color="textSecondary">
                Paiements sécurisés et simplifiés.
              </Typography>
            </Grid>
          </Grid>
        </Section>

        {/* Possibilité de demander une démo */}
        <Section>
          <TypographyOverline variant="body2" gutterBottom>
            Demandez une démo
          </TypographyOverline>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Testez Cloudium avant de souscrire. Explorez ses fonctionnalités grâce à une version d’essai limitée ou demandez une démonstration personnalisée.
          </Typography>
          <Box mt={4}>
            <Button variant="contained" color="primary" onClick={handleDemoRequest}>
              Demander une démo
            </Button>
          </Box>
        </Section>

        {/* Présentation inspirée des leaders du marché */}
        <Section>
          <TypographyOverline variant="body2" gutterBottom>
            Pourquoi choisir Cloudium ?
          </TypographyOverline>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Comme les solutions ERP de Sage, Cloudium met en avant :
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Modules clés</Typography>
              <Typography variant="body2" color="textSecondary">
                Finances, RH, logistique, et bien plus.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Flexibilité</Typography>
              <Typography variant="body2" color="textSecondary">
                Adaptation aux besoins spécifiques des entreprises.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Analyse des données</Typography>
              <Typography variant="body2" color="textSecondary">
                Prise de décision rapide et efficace grâce à des outils d’analyse avancés.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Interface intuitive</Typography>
              <Typography variant="body2" color="textSecondary">
                Une interface moderne et facile à utiliser.
              </Typography>
            </Grid>
          </Grid>
        </Section>
      </Container>
    </Wrapper>
  );
}

export default Demos;
