import React from "react";
import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

const Wrapper = styled.div`
  padding: 20px 0;
  text-align: center;

  ${(props) => props.theme.breakpoints.down("sm")} {
    padding: 12px 0; // Reduced padding for mobile
  }
`;

const ContainerWrapper = styled(Container)`
  ${(props) => props.theme.breakpoints.down("sm")} {
    max-width: 95%; // Reduced width for mobile
    padding: 0 8px; // Reduced padding for mobile
  }

  ${(props) => props.theme.breakpoints.up("sm")} {
    max-width: 85%; // Slightly reduced width for tablets
  }

  ${(props) => props.theme.breakpoints.up("md")} {
    max-width: 75%; // Normal width for desktop
  }
`;

const Title = styled(Typography)`
  font-size: 2rem; // Default size
  font-weight: bold;

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 1.5rem; // Reduced size for mobile
  }
`;

const Subtitle = styled(Typography)`
  font-size: 1.25rem; // Default size
  color: ${(props) => props.theme.palette.text.secondary};

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 1rem; // Reduced size for mobile
  }
`;

function FAQ() {
  return (
    <Wrapper>
      <ContainerWrapper>
        <Title variant="h2" component="h3" gutterBottom>
          FAQ
        </Title>
        <Subtitle variant="subtitle1" gutterBottom>
          Retrouvez ici les réponses aux questions les plus fréquentes.
        </Subtitle>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq1-content"
            id="faq1-header"
          >
            <Typography variant="subtitle1">
              Comment puis-je m'inscrire ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" color="textSecondary">
              Vous pouvez vous inscrire en cliquant sur le bouton "Inscription"
              en haut de la page et en remplissant le formulaire.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq2-content"
            id="faq2-header"
          >
            <Typography variant="subtitle1">
              Quels sont les moyens de paiement acceptés ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" color="textSecondary">
              Nous acceptons les paiements par carte bancaire et via Stripe.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq3-content"
            id="faq3-header"
          >
            <Typography variant="subtitle1">
              Comment contacter le support technique ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" color="textSecondary">
              Vous pouvez nous contacter par email, téléphone ou via le chat en
              ligne disponible 24/7.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </ContainerWrapper>
    </Wrapper>
  );
}

export default FAQ;