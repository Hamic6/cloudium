import React from "react";
import styled from "@emotion/styled";
import { Container, Grid, Typography, Link, TextField, Button, Accordion, AccordionSummary, AccordionDetails, useTheme, useMediaQuery } from "@mui/material";
import { Facebook, Twitter, LinkedIn, ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

const FooterWrapper = styled.div`
  background: #181d2d;
  color: ${(props) => props.theme.palette.common.white};
  padding: 32px 0;
  width: 100%;

  ${(props) => props.theme.breakpoints.up("sm")} {
    padding: 48px 0;
  }
`;

const FooterLink = styled(Link)`
  color: ${(props) => props.theme.palette.common.white};
  text-decoration: none;
  display: block;
  margin: 8px 0;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.palette.primary.main};
    text-decoration: none;
  }

  ${(props) => props.theme.breakpoints.up("sm")} {
    display: inline-block;
    margin: 0 12px;
  }
`;

const SocialIcon = styled.a`
  color: ${(props) => props.theme.palette.common.white};
  margin: 0 12px;
  font-size: 24px;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.palette.primary.main};
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    margin: 0 8px;
    font-size: 20px;
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

  ${(props) => props.theme.breakpoints.down("sm")} {
    padding: 0 16px;
  }
`;

const SectionTitle = styled(Typography)`
  font-weight: 600;
  margin-bottom: 24px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 2px;
    background: ${(props) => props.theme.palette.primary.main};
  }
`;

const ContactInfo = styled(Typography)`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 8px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

function JoinUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Section Suivez-nous */}
          <Grid item xs={12} sm={6} md={4}>
            <SectionTitle variant="h6">Suivez-nous</SectionTitle>
            <div style={{ 
              display: "flex", 
              justifyContent: isMobile ? "center" : "flex-start",
              marginBottom: isMobile ? "24px" : "0"
            }}>
              <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedIn />
              </SocialIcon>
            </div>
          </Grid>

          {/* Section Support & Contact */}
          <Grid item xs={12} sm={6} md={4}>
            <SectionTitle variant="h6">Support & Contact</SectionTitle>
            <ContactInfo variant="body2">
              Email: <FooterLink href="mailto:support@cloudium.com">support@cloudium.com</FooterLink>
            </ContactInfo>
            <ContactInfo variant="body2">
              Téléphone: <FooterLink href="tel:+123456789">+1 234 567 89</FooterLink>
            </ContactInfo>
            <ContactInfo variant="body2">
              Chat en ligne: Disponible 24/7
            </ContactInfo>

            {!isMobile && (
              <ContactForm>
                <TextField 
                  label="Nom" 
                  variant="outlined" 
                  fullWidth 
                  required 
                  size={isTablet ? "small" : "medium"}
                />
                <TextField 
                  label="Email" 
                  variant="outlined" 
                  fullWidth 
                  required 
                  size={isTablet ? "small" : "medium"}
                />
                <TextField 
                  label="Message" 
                  variant="outlined" 
                  fullWidth 
                  multiline 
                  rows={isTablet ? 3 : 4} 
                  required 
                  size={isTablet ? "small" : "medium"}
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  type="submit"
                  size={isTablet ? "medium" : "large"}
                >
                  Envoyer
                </Button>
              </ContactForm>
            )}
          </Grid>

          {/* Section FAQ */}
          <Grid item xs={12} md={4}>
            <SectionTitle variant="h6">FAQ</SectionTitle>
            <Accordion sx={{ mb: 1, bgcolor: 'transparent', color: 'white', boxShadow: 'none' }}>
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                sx={{ '& .MuiAccordionSummary-content': { margin: '8px 0' } }}
              >
                <Typography>Comment puis-je m'inscrire ?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0 }}>
                <Typography>
                  Vous pouvez vous inscrire en cliquant sur le bouton "Inscription" en haut de la page et en remplissant le formulaire.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ mb: 1, bgcolor: 'transparent', color: 'white', boxShadow: 'none' }}>
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                sx={{ '& .MuiAccordionSummary-content': { margin: '8px 0' } }}
              >
                <Typography>Quels sont les moyens de paiement acceptés ?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0 }}>
                <Typography>
                  Nous acceptons les paiements par carte bancaire et via Stripe.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: 'transparent', color: 'white', boxShadow: 'none' }}>
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                sx={{ '& .MuiAccordionSummary-content': { margin: '8px 0' } }}
              >
                <Typography>Comment contacter le support technique ?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0 }}>
                <Typography>
                  Vous pouvez nous contacter par email, téléphone ou via le chat en ligne disponible 24/7.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>

        {/* Footer bottom */}
        <Grid container sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Grid item xs={12} sm={6} sx={{ mb: { xs: 2, sm: 0 } }}>
            <Typography variant="body2" align={isMobile ? "center" : "left"}>
              © {new Date().getFullYear()} <strong>Cloudium</strong>. Tous droits réservés.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <nav style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              justifyContent: isMobile ? "center" : "flex-end",
              gap: "8px 16px"
            }}>
              <FooterLink href="/about">À propos</FooterLink>
              <FooterLink href="/pricing">Tarifs</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/privacy">Politique de confidentialité</FooterLink>
            </nav>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
}

export default JoinUs;