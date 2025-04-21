import React from "react";
import styled from "@emotion/styled";
import { Container, Grid, Typography, Link, TextField, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Facebook, Twitter, LinkedIn, ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

const FooterWrapper = styled.div`
  background: #181d2d;
  color: ${(props) => props.theme.palette.common.white};
  padding: 32px 0;
  text-align: center;
`;

const FooterLink = styled(Link)`
  color: ${(props) => props.theme.palette.common.white};
  text-decoration: none;
  margin: 0 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcon = styled.a`
  color: ${(props) => props.theme.palette.common.white};
  margin: 0 8px;
  font-size: 24px;

  &:hover {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;

  .MuiOutlinedInput-root {
    background-color: ${(props) => props.theme.palette.common.white};
    border-radius: 4px;
  }
`;

function JoinUs() {
  return (
    <FooterWrapper>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {/* Section Suivez-nous */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Suivez-nous
            </Typography>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </SocialIcon>
          </Grid>

          {/* Section Support & Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Support & Contact
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email : <FooterLink href="mailto:support@cloudium.com">support@cloudium.com</FooterLink>
            </Typography>
            <Typography variant="body2" gutterBottom>
              Téléphone : <FooterLink href="tel:+123456789">+1 234 567 89</FooterLink>
            </Typography>
            <Typography variant="body2" gutterBottom>
              Chat en ligne : Disponible 24/7
            </Typography>

            {/* Formulaire de contact */}
            <ContactForm>
              <TextField label="Nom" variant="outlined" fullWidth required />
              <TextField label="Email" variant="outlined" fullWidth required />
              <TextField label="Message" variant="outlined" fullWidth multiline rows={4} required />
              <Button variant="contained" color="primary" type="submit">
                Envoyer
              </Button>
            </ContactForm>
          </Grid>

          {/* Section FAQ */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              FAQ
            </Typography>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Comment puis-je m'inscrire ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Vous pouvez vous inscrire en cliquant sur le bouton "Inscription" en haut de la page et en remplissant le formulaire.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Quels sont les moyens de paiement acceptés ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nous acceptons les paiements par carte bancaire et via Stripe.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Comment contacter le support technique ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Vous pouvez nous contacter par email, téléphone ou via le chat en ligne disponible 24/7.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>

        {/* Footer */}
        <Typography variant="body2" style={{ marginTop: "16px" }}>
          <nav style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "16px", marginBottom: "8px" }}>
            <FooterLink href="/about">À propos</FooterLink>
            <FooterLink href="/pricing">Tarifs</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/privacy">Politique de confidentialité</FooterLink>
          </nav>
          <div style={{ marginTop: "8px" }}>
            © {new Date().getFullYear()} <strong>Cloudium</strong>. Tous droits réservés.
          </div>
        </Typography>
      </Container>
    </FooterWrapper>
  );
}

export default JoinUs;
