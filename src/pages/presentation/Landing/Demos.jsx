import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import des styles du carousel
import { spacing } from "@mui/system";

// Import des images
import statImage from "../../illustrations/stat.png";
import settingsImage from "../../illustrations/settings.jpg";
import realTimeImage from "../../illustrations/real-time.jpg";
import securePaymentImage from "../../illustrations/secure_payment.jpg";

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
  width: 350px; /* Largeur augmentée */
  height: 200px; /* Hauteur augmentée */
  object-fit: contain; /* Changé de 'cover' à 'contain' pour voir l'image entière */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  display: block;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #f8f9fa; /* Fond pour les images avec transparence */

  &:hover {
    transform: scale(1.03); /* Zoom réduit sur survol */
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

// Conteneur du slide pour mieux contrôler l'espace
const SlideContainer = styled.div`
  padding: 20px 40px; /* Plus d'espace sur les côtés */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 600px; /* Hauteur minimale fixe pour tous les slides */
`;

// Style pour les titres en survol
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

  return (
    <Wrapper pt={16} pb={20} id="demos">
      <Container>
        <Section>
          <TypographyOverline variant="body2" gutterBottom>
            Présentation
          </TypographyOverline>
          <Typography variant="h2" component="h3" gutterBottom>
            Cloudium : L'ERP pour une gestion simplifiée
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Cloudium est un ERP spécialisé dans la gestion de la facturation, conçu pour répondre aux besoins des entreprises de toutes tailles. Sa version Enterprise est entièrement customisable, permettant aux organisations d'adapter les fonctionnalités à leurs processus internes.
          </Typography>
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
            centerMode={true} // Active le mode centré
            centerSlidePercentage={40} // Ajuste la largeur du slide visible
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
              <SlideContainer key={index}>
                <CarouselImage src={advantage.image} alt={advantage.title} />
                <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
                  {advantage.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{ maxWidth: '500px' }}>
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
            <Button variant="contained" color="primary" onClick={handleDemoRequest}>
              Demander une démo
            </Button>
          </Box>
        </Section>
      </Container>
    </Wrapper>
  );
}

export default Demos;