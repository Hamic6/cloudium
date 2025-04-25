import React from "react";
import styled from "@emotion/styled";
import { Container, Grid, Typography, Link, TextField, Button, useTheme, useMediaQuery } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

const FooterWrapper = styled.div`
  background: #181d2d;
  color: ${(props) => props.theme.palette.common.white};
  padding: 20px 0; // Default padding

  ${(props) => props.theme.breakpoints.down("sm")} {
    padding: 12px 0; // Reduced padding for mobile
  }

  ${(props) => props.theme.breakpoints.up("sm")} {
    padding: 36px 0;
  }

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: 48px 0;
  }
`;

const FooterLink = styled(Link)`
  color: ${(props) => props.theme.palette.common.white};
  text-decoration: none;
  display: block;
  margin: 4px 0; // Default margin
  font-size: 0.8rem; // Default font size

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 0.7rem; // Reduced font size for mobile
    margin: 2px 0; // Reduced margin for mobile
  }

  ${(props) => props.theme.breakpoints.up("sm")} {
    display: inline-block;
    margin: 0 10px;
    font-size: 0.9rem;
  }

  ${(props) => props.theme.breakpoints.up("md")} {
    margin: 0 12px;
    font-size: 1rem;
  }
`;

const ContactInfo = styled(Typography)`
  display: flex;
  align-items: center;
  margin-bottom: 8px; // Default margin
  gap: 4px; // Default gap
  font-size: 0.8rem; // Default font size

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 0.7rem; // Reduced font size for mobile
    margin-bottom: 6px; // Reduced margin for mobile
    gap: 2px; // Reduced gap for mobile
    text-align: center;
    justify-content: center;
  }

  ${(props) => props.theme.breakpoints.up("sm")} {
    font-size: 0.9rem;
  }

  ${(props) => props.theme.breakpoints.up("md")} {
    font-size: 1rem;
  }
`;

const SectionTitle = styled(Typography)`
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 1rem;

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 0.9rem; // Slightly smaller font size for mobile
    margin-bottom: 12px; // Reduced margin for mobile
  }

  ${(props) => props.theme.breakpoints.up("sm")} {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }

  ${(props) => props.theme.breakpoints.up("md")} {
    font-size: 1.2rem;
    margin-bottom: 24px;
  }
`;

const SocialIcon = styled.a`
  color: ${(props) => props.theme.palette.common.white};
  margin: 0 8px;
  font-size: 20px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 18px; // Slightly smaller icon size for mobile
    margin: 0 6px; // Reduced margin for mobile
  }

  ${(props) => props.theme.breakpoints.up("sm")} {
    margin: 0 12px;
    font-size: 24px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;

  .MuiOutlinedInput-root {
    background-color: ${(props) => props.theme.palette.common.white};
    border-radius: 4px;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    padding: 0 8px;
    max-width: 90%; // Réduction de la largeur pour mobile
    margin: 0 auto; // Centrage sur mobile
  }

  ${(props) => props.theme.breakpoints.up("sm")} {
    max-width: 70%; // Largeur réduite pour tablettes
    margin: 0 auto;
  }

  ${(props) => props.theme.breakpoints.up("md")} {
    max-width: 50%; // Largeur normale pour desktop
  }
`;

const ContainerWrapper = styled(Container)`
  ${(props) => props.theme.breakpoints.down("sm")} {
    max-width: 95%; // Réduction de la largeur pour mobile
    padding: 0 8px; // Réduction du padding pour mobile
  }

  ${(props) => props.theme.breakpoints.up("sm")} {
    max-width: 85%; // Largeur réduite pour tablettes
  }

  ${(props) => props.theme.breakpoints.up("md")} {
    max-width: 75%; // Largeur normale pour desktop
  }
`;

function JoinUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <FooterWrapper>
      <ContainerWrapper maxWidth="lg">
        <Grid container spacing={isMobile ? 2 : 4}>
          {/* Section Suivez-nous */}
          <Grid item xs={12} sm={6} md={4}>
            <SectionTitle variant="h6">Suivez-nous</SectionTitle>
            <div style={{ 
              display: "flex", 
              justifyContent: isMobile ? "center" : "flex-start",
              marginBottom: isMobile ? "16px" : "0"
            }}>
              <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook fontSize={isMobile ? "small" : "medium"} />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter fontSize={isMobile ? "small" : "medium"} />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedIn fontSize={isMobile ? "small" : "medium"} />
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
                  rows={isTablet ? 2 : 3} 
                  required 
                  size={isTablet ? "small" : "medium"}
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  type="submit"
                  size={isTablet ? "small" : "medium"}
                  sx={{ mt: 1 }}
                >
                  Envoyer
                </Button>
              </ContactForm>
            )}
          </Grid>
        </Grid>

        {/* Footer bottom */}
        <Grid container sx={{ 
          mt: 3, 
          pt: 2, 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          alignItems: 'center'
        }}>
          <Grid item xs={12} sm={6} sx={{ mb: isMobile ? 1 : 0 }}>
            <Typography 
              variant="body2" 
              align={isMobile ? "center" : "left"}
              sx={{ fontSize: isMobile ? '0.65rem' : '0.875rem' }} // Reduced font size for mobile
            >
              © {new Date().getFullYear()} <strong>Cloudium</strong>. Tous droits réservés.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <nav style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              justifyContent: isMobile ? "center" : "flex-end",
              gap: isMobile ? "2px 4px" : "8px 16px" // Reduced gap for mobile
            }}>
              <FooterLink href="/about">À propos</FooterLink>
              <FooterLink href="/pricing">Tarifs</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/privacy">Politique de confidentialité</FooterLink>
            </nav>
          </Grid>
        </Grid>
      </ContainerWrapper>
    </FooterWrapper>
  );
}

export default JoinUs;