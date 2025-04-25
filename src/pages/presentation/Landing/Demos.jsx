import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { spacing } from "@mui/system";

import statImage from "../../illustrations/stat.png";
import settingsImage from "../../illustrations/settings.jpg";
import realTimeImage from "../../illustrations/real-time.jpg";
import securePaymentImage from "../../illustrations/secure_payment.jpg";

// Assurez-vous que les chemins des fichiers d'images correspondent à votre structure de projet.

// Wrapper pour le conteneur principal
const Wrapper = styled.div`
  ${spacing};
  background: linear-gradient(135deg, #f3f4f6, #ffffff);
  text-align: center;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

// Section pour structurer les différentes parties
const Section = styled.div`
  ${spacing};
  text-align: center;
  margin-bottom: 64px;
`;

// Style des images dans le carousel
const CarouselImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  max-height: 200px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  display: block;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #f8f9fa;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

// Conteneur du slide pour mieux contrôler l'espace
const SlideContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: ${props => props.mobile ? '450px' : '500px'};
`;

// Style pour les titres en survol
const TypographyOverline = styled(Typography)`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const SectionTitle = styled(Typography)`
  font-size: 2rem; /* Taille par défaut */
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  margin-bottom: ${(props) => props.theme.spacing(2)};

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 1.5rem; /* Réduction de la taille sur mobile */
  }
`;

const SubtitleText = styled(Typography)`
  font-size: 1.25rem; /* Taille par défaut */
  color: ${(props) => props.theme.palette.text.secondary};
  line-height: 1.6;
  margin: ${(props) => props.theme.spacing(2)} auto;

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 1rem; /* Réduction de la taille sur mobile */
    line-height: 1.4; /* Réduction de l'espacement entre les lignes */
  }
`;

function Demos() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const handleDemoRequest = () => {
    navigate("/demo-request");
  };

  const advantages = [
    {
      title: "Statistiques avancées",
      description: "Obtenez des analyses détaillées sur les performances de votre entreprise.",
      image: statImage,
    },
    {
      title: "Personnalisation avancée",
      description: "Modules ajustables selon les besoins spécifiques de chaque entreprise.",
      image: settingsImage,
    },
    {
      title: "Accès en temps réel aux données",
      description: "Suivi précis des performances et des finances.",
      image: realTimeImage,
    },
    {
      title: "Paiements sécurisés",
      description: "Intégration fluide avec Stripe pour des paiements sécurisés et simplifiés.",
      image: securePaymentImage,
    },
  ];

  // Ajustement dynamique de la largeur des slides
  const getCenterSlidePercentage = () => {
    if (isMobile) return 90;  // Pleine largeur sur mobile
    if (isTablet) return 60;  // Plus large sur tablette
    return 40;               // Plus étroit sur desktop
  };

  return (
    <Wrapper pt={16} pb={20} id="demos">
      <Container>
        <Section>
          <TypographyOverline variant="body2" gutterBottom>
            Présentation
          </TypographyOverline>
          <SectionTitle variant="h2" component="h3" gutterBottom>
            Cloudium : L'ERP pour une gestion simplifiée
          </SectionTitle>
          <SubtitleText variant="subtitle1" gutterBottom>
            Cloudium est un ERP spécialisé dans la gestion de la facturation, conçu pour répondre aux besoins des entreprises de toutes tailles. Sa version Enterprise est entièrement customisable, permettant aux organisations d'adapter les fonctionnalités à leurs processus internes.
          </SubtitleText>
        </Section>

        <Section>
          <TypographyOverline variant="body2" gutterBottom>
            Avantages clés
          </TypographyOverline>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={5000}
            centerMode={!isMobile} // Désactive le mode centré sur mobile
            centerSlidePercentage={getCenterSlidePercentage()}
            renderIndicator={(onClickHandler, isSelected, index, label) => (
              <li
                style={{
                  background: isSelected ? "#0d6efd" : "#ccc",
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  display: "inline-block",
                  margin: "0 5px",
                  cursor: "pointer",
                }}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              />
            )}
          >
            {advantages.map((advantage, index) => (
              <SlideContainer key={index} mobile={isMobile}>
                <CarouselImage src={advantage.image} alt={advantage.title} />
                <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
                  {advantage.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="textSecondary" 
                  style={{ 
                    maxWidth: isMobile ? '100%' : '500px',
                    padding: isMobile ? '0 10px' : '0'
                  }}
                >
                  {advantage.description}
                </Typography>
              </SlideContainer>
            ))}
          </Carousel>
        </Section>

        <Section>
          <TypographyOverline variant="body2" gutterBottom>
            Demandez une démo
          </TypographyOverline>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Testez Cloudium avant de souscrire. Explorez ses fonctionnalités grâce à une version d'essai limitée ou demandez une démonstration personnalisée.
          </Typography>
          <Box mt={4}>
            <Button variant="contained" color="primary" onClick={handleDemoRequest} size={isMobile ? "medium" : "large"}>
              Demander une démo
            </Button>
          </Box>
        </Section>
      </Container>
    </Wrapper>
  );
}

export default Demos;