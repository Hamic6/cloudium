import React from "react";
import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Container, 
  Grid, 
  Typography, 
  CardActions,
  Chip,
  Divider,
  useTheme,
  useMediaQuery,
  Tooltip
} from "@mui/material";
import { styled } from "@mui/system";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarBorderIcon from '@mui/icons-material/StarBorder';

// Composant FeatureList optimisé avec icônes
const FeatureList = ({ features }) => (
  <Box component="ul" sx={{ 
    textAlign: 'left', 
    pl: 0,
    listStyle: 'none',
    '& li': {
      display: 'flex',
      alignItems: 'flex-start',
      mb: 1.5,
      fontSize: '0.95rem',
      lineHeight: 1.5
    }
  }}>
    {features.map((feature, index) => (
      <li key={index}>
        <CheckCircleIcon color="primary" sx={{ fontSize: '1rem', mr: 1, mt: '2px' }} />
        {feature}
      </li>
    ))}
  </Box>
);

// StyledCard avec meilleures transitions et ombres
const StyledCard = styled(Card)(({ theme, highlighted }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
  border: highlighted ? `2px solid ${theme.palette.primary.main}` : '1px solid rgba(0, 0, 0, 0.12)',
  borderRadius: theme.shape.borderRadius * 2,
  '&:hover': {
    transform: highlighted ? 'translateY(-12px)' : 'translateY(-8px)',
    boxShadow: highlighted ? theme.shadows[12] : theme.shadows[6]
  }
}));

// Données des plans dans un fichier séparé en production
const pricingPlans = [
  {
    title: "Cloudium Standard",
    price: "$10",
    period: "mois",
    description: "Idéal pour les particuliers et les petites équipes.",
    annualPrice: "$120 par an (économisez 20%)",
    features: [
      "10GB de stockage cloud",
      "Jusqu'à 5 utilisateurs",
      "Support par email (réponse sous 24h)",
      "Mises à jour mensuelles",
      "Accès aux fonctionnalités de base",
      "2 intégrations tierces"
    ],
    cta: "Commencer l'essai",
    variant: "outlined",
    bestFor: "Freelancers & startups"
  },
  {
    title: "Cloudium Premium",
    price: "$20",
    period: "mois",
    description: "Parfait pour les équipes en croissance.",
    annualPrice: "$216 par an (économisez 10%)",
    features: [
      "50GB de stockage cloud + sauvegardes",
      "Jusqu'à 20 utilisateurs",
      "Support prioritaire (réponse sous 4h)",
      "Mises à jour hebdomadaires",
      "Toutes les fonctionnalités standard",
      "Analyses et rapports avancés",
      "10 intégrations tierces",
      "Accès aux webinaires mensuels"
    ],
    cta: "Essai gratuit",
    variant: "contained",
    highlighted: true,
    bestFor: "PME en croissance"
  },
  {
    title: "Cloudium Enterprise",
    price: "$50",
    period: "mois",
    description: "Solution complète pour les grandes entreprises.",
    annualPrice: "$540 par an (économisez 10%)",
    features: [
      "Stockage illimité + sauvegardes automatiques",
      "Utilisateurs illimités",
      "Support 24/7 avec manager dédié",
      "Mises à jour en continu",
      "Toutes les fonctionnalités Premium",
      "Tableaux de bord personnalisés",
      "Intégrations illimitées",
      "Formation et onboarding personnalisé",
      "SLA 99.9% de disponibilité"
    ],
    cta: "Contacter les ventes",
    variant: "outlined",
    bestFor: "Grandes entreprises"
  }
];

function Offres() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 },
      backgroundColor: theme.palette.mode === 'dark' ? 'background.default' : 'grey.50',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '150px',
        background: `linear-gradient(to bottom, ${theme.palette.primary.light} 0%, transparent 100%)`,
        opacity: 0.1,
        zIndex: 0
      }
    }} id="offres">
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <Chip 
            label="Tarification transparente" 
            color="primary" 
            variant="outlined"
            size="small"
            icon={<StarBorderIcon />}
            sx={{ mb: 2 }}
          />
          <Typography 
            variant="h3" 
            gutterBottom
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Des plans adaptés à chaque besoin
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary" 
            sx={{
              maxWidth: 700,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' }
            }}
          >
            Essayez gratuitement pendant 14 jours. Aucune carte de crédit requise.
            <br />Annulation à tout moment.
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={isMobile ? 2 : 4} 
          justifyContent="center"
          alignItems="stretch"
        >
          {pricingPlans.map((plan, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={index}
              sx={{
                display: 'flex',
                mt: plan.highlighted && !isMobile ? -2 : 0
              }}
            >
              <StyledCard 
                highlighted={plan.highlighted}
                sx={{
                  ...(plan.highlighted && {
                    borderTop: `4px solid ${theme.palette.primary.main}`,
                    position: 'relative',
                    backgroundColor: theme.palette.mode === 'dark' ? 'grey.900' : 'background.paper'
                  })
                }}
              >
                {plan.highlighted && (
                  <Chip 
                    label="Le plus populaire"
                    color="primary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      fontWeight: 600
                    }}
                  />
                )}
                
                <CardContent sx={{ flexGrow: 1, px: { xs: 2, md: 3 }, py: 3 }}>
                  {plan.bestFor && (
                    <Typography 
                      variant="caption" 
                      color="text.secondary"
                      display="block"
                      gutterBottom
                    >
                      Idéal pour: {plan.bestFor}
                    </Typography>
                  )}
                  
                  <Typography 
                    variant="h5" 
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                      fontSize: '1.5rem'
                    }}
                  >
                    {plan.title}
                  </Typography>
                  
                  <Box sx={{ my: 3 }}>
                    <Box display="flex" alignItems="flex-end">
                      <Typography variant="h3" sx={{ fontWeight: 800 }}>
                        {plan.price}
                      </Typography>
                      {plan.period && (
                        <Typography 
                          variant="h6" 
                          color="text.secondary"
                          sx={{ 
                            ml: 1,
                            mb: 0.5,
                            fontWeight: 400
                          }}
                        >
                          /{plan.period}
                        </Typography>
                      )}
                    </Box>
                    <Typography 
                      variant="body2" 
                      color={plan.highlighted ? 'primary.main' : 'text.secondary'}
                      sx={{ 
                        mt: 0.5,
                        fontWeight: plan.highlighted ? 600 : 400
                      }}
                    >
                      {plan.annualPrice}
                    </Typography>
                  </Box>
                  
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    paragraph
                    sx={{ mb: 3, minHeight: { xs: 0, md: '72px' } }}
                  >
                    {plan.description}
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <FeatureList features={plan.features} />
                </CardContent>
                
                <CardActions sx={{ p: { xs: 2, md: 3 }, pt: 0 }}>
                  <Button
                    fullWidth
                    variant={plan.variant}
                    color="primary"
                    size="large"
                    sx={{
                      py: 1.5,
                      fontWeight: 600,
                      fontSize: '1rem',
                      borderRadius: 2,
                      boxShadow: plan.highlighted ? theme.shadows[4] : 'none',
                      '&:hover': {
                        boxShadow: plan.highlighted ? theme.shadows[8] : theme.shadows[2]
                      }
                    }}
                  >
                    {plan.cta}
                  </Button>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ 
          textAlign: 'center', 
          mt: 6,
          px: 2
        }}>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ 
              maxWidth: 800,
              mx: 'auto',
              a: {
                color: 'primary.main',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }
            }}
          >
            Besoin d'une solution personnalisée ?{' '}
            <Tooltip title="Contactez-nous pour un devis sur mesure">
              <a href="#contact">Contactez notre équipe commerciale</a>
            </Tooltip>.
            <br />
            Remises disponibles pour les organisations à but non lucratif et les établissements d'enseignement.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Offres;