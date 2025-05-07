import React from "react";
import styled from "@emotion/styled";

import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { spacing } from "@mui/system";

const Spacer = styled.div(spacing);

const Wrapper = styled.div`
  ${spacing};
  text-align: center;
`;

const TypographyOverline = styled(Typography)`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const Accordion = styled(MuiAccordion)`
  border-radius: 6px;
  text-align: left;
  margin: 20px 0 !important;
  box-shadow: 0 2px 6px 0 rgba(18, 38, 63, 0.05);

  &:before {
    display: none;
  }
`;

const AccordionSummary = styled(MuiAccordionSummary)`
  padding: 0 16px;
  box-shadow: 0;
  min-height: 48px !important;

  .MuiAccordionSummary-content {
    margin: 12px 0 !important;
  }
`;

const AccordionDetails = styled(MuiAccordionDetails)`
  padding-left: 16px;
  padding-right: 16px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;

  .MuiOutlinedInput-root {
    background-color: ${(props) => props.theme.palette.common.white};
    border-radius: 4px;
  }
`;

function FAQ() {
  return (
    <Wrapper pt={20} pb={16}>
      <Container>
        <TypographyOverline variant="body2" gutterBottom>
          Cloudium
        </TypographyOverline>
        <Typography variant="h2" component="h3" gutterBottom>
          Questions fréquentes
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Retrouvez ici les réponses aux questions les plus courantes.
        </Typography>
        <Spacer mb={8} />

        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} md={8}>
            <Accordion defaultExpanded={true}>
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
                  Vous pouvez vous inscrire en cliquant sur le bouton
                  "Inscription" en haut de la page et en remplissant le
                  formulaire d'inscription.
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
                  Quels moyens de paiement acceptez-vous ?
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
                  Vous pouvez nous contacter par email à{" "}
                  <a href="mailto:support@cloudium.com">support@cloudium.com</a>{" "}
                  ou via le chat en ligne disponible 24/7.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq4-content"
                id="faq4-header"
              >
                <Typography variant="subtitle1">
                  Puis-je modifier mon abonnement ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle1" color="textSecondary">
                  Oui, vous pouvez modifier votre abonnement à tout moment via
                  votre espace client.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="faq5-content"
                id="faq5-header"
              >
                <Typography variant="subtitle1">
                  Où puis-je trouver vos conditions générales ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle1" color="textSecondary">
                  Vous pouvez consulter nos conditions générales en bas de
                  chaque page ou en cliquant{" "}
                  <a href="/terms" target="_blank" rel="noopener noreferrer">
                    ici
                  </a>
                  .
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>

        {/* Formulaire de contact */}
        <Grid container alignItems="center" justifyContent="center">
          <Grid
            item
            xs={12}
            md={6}
            lg={5}
            sx={{
              padding: { xs: 2, sm: 4 }, // Réduction des marges sur mobile
            }}
          >
            <ContactForm
              style={{
                maxWidth: "100%",
                padding: "24px", // Augmentation de l'espacement interne
                borderRadius: "8px", // Coins arrondis pour un design moderne
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Ajout d'une ombre pour un effet de profondeur
                backgroundColor: "#fff", // Fond blanc pour contraster avec l'arrière-plan
              }}
            >
              <Typography
                variant="h6"
                align="center"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: "text.primary",
                  mb: 2,
                }}
              >
                Contactez-nous
              </Typography>
              <TextField
                label="Nom"
                variant="outlined"
                fullWidth
                required
                sx={{
                  fontSize: { xs: "14px", sm: "16px" },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px", // Coins arrondis pour les champs
                  },
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                required
                sx={{
                  fontSize: { xs: "14px", sm: "16px" },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
                sx={{
                  fontSize: { xs: "14px", sm: "16px" },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  width: "100%",
                  fontSize: { xs: "14px", sm: "16px" },
                  fontWeight: 600,
                  py: 1.5, // Augmentation de la hauteur du bouton
                  borderRadius: "8px", // Coins arrondis pour le bouton
                  mt: 2, // Espacement supérieur
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Ombre pour le bouton
                  "&:hover": {
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)", // Ombre plus prononcée au survol
                  },
                }}
              >
                Envoyer
              </Button>
            </ContactForm>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default FAQ;
