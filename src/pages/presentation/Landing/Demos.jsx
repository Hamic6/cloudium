import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import des styles du carousel
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

const CarouselImage = styled.img`
  max-width: 35%; /* Réduction de la largeur à 25% */
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 0 auto; /* Centrer l'image */
  display: block;
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

  const advantages = [
    {
      title: "Statistiques avancées",
      description: "Obtenez des analyses détaillées sur les performances de votre entreprise.",
      image: "/src/pages/illustrations/stat.png",
    },
    {
      title: "Personnalisation avancée",
      description: "Modules ajustables selon les besoins spécifiques de chaque entreprise.",
      image: "/src/pages/illustrations/settings.jpg",
    },
    {
      title: "Accès en temps réel aux données",
      description: "Suivi précis des performances et des finances.",
      image: "/src/pages/illustrations/real-time.jpg",
    },
    {
      title: "Paiements sécurisés",
      description: "Intégration fluide avec Stripe pour des paiements sécurisés et simplifiés.",
      image: "/src/pages/illustrations/secure_payment.jpg",
    },
  ];

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

        {/* Avantages clés avec carousel */}
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
          >
            {advantages.map((advantage, index) => (
              <div key={index}>
                <CarouselImage src={advantage.image} alt={advantage.title} />
                <Typography variant="h6" gutterBottom>
                  {advantage.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {advantage.description}
                </Typography>
              </div>
            ))}
          </Carousel>
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
      </Container>
    </Wrapper>
  );
}

export default Demos;
