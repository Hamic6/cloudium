import React from "react";
import styled from "@emotion/styled";
import { Container, Grid, Typography, Link, Box, useTheme, useMediaQuery } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Email, Phone, Chat } from "@mui/icons-material";

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #181d2d 0%, #0f121f 100%);
  color: ${(props) => props.theme.palette.common.white};
  padding: 64px 0 32px;
  position: relative;
  overflow: hidden;
`;

const FooterLink = styled(Link)`
  color: ${(props) => props.theme.palette.grey[300]};
  text-decoration: none;
  margin: 0 8px;
  transition: all 0.3s ease;
  display: inline-block;
  padding: 4px 0;

  &:hover {
    color: ${(props) => props.theme.palette.primary.main};
    transform: translateX(4px);
  }
`;

const SocialIcon = styled.a`
  color: ${(props) => props.theme.palette.common.white};
  margin: 0 12px;
  font-size: 28px;
  transition: all 0.3s ease;
  display: inline-flex;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${(props) => props.theme.palette.primary.main};
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  color: ${(props) => props.theme.palette.grey[300]};

  & > svg {
    margin-right: 12px;
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Section Suivez-nous */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                color: "white",
                position: "relative",
                display: "inline-block",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: "40px",
                  height: "3px",
                  background: theme.palette.primary.main,
                  borderRadius: "3px"
                }
              }}
            >
              Suivez-nous
            </Typography>
            <Box sx={{ 
              display: "flex", 
              justifyContent: isMobile ? "center" : "flex-start",
              mt: 3
            }}>
              <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedIn />
              </SocialIcon>
            </Box>
          </Grid>

          {/* Section Support & Contact */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                color: "white",
                position: "relative",
                display: "inline-block",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: "40px",
                  height: "3px",
                  background: theme.palette.primary.main,
                  borderRadius: "3px"
                }
              }}
            >
              Support & Contact
            </Typography>
            <Box sx={{ mt: 3 }}>
              <ContactItem>
                <Email fontSize="small" />
                <FooterLink href="mailto:support@cloudium.com">support@cloudium.com</FooterLink>
              </ContactItem>
              <ContactItem>
                <Phone fontSize="small" />
                <FooterLink href="tel:+123456789">+1 234 567 89</FooterLink>
              </ContactItem>
              <ContactItem>
                <Chat fontSize="small" />
                <Typography variant="body2">Chat en ligne : Disponible 24/7</Typography>
              </ContactItem>
            </Box>
          </Grid>

          {/* Section Navigation */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                color: "white",
                position: "relative",
                display: "inline-block",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: "40px",
                  height: "3px",
                  background: theme.palette.primary.main,
                  borderRadius: "3px"
                }
              }}
            >
              Navigation
            </Typography>
            <Box 
              component="nav"
              sx={{ 
                display: "flex", 
                flexDirection: "column", 
                alignItems: isMobile ? "center" : "flex-start",
                mt: 3,
                gap: 1
              }}
            >
              <FooterLink href="/about">À propos</FooterLink>
              <FooterLink href="/features">Fonctionnalités</FooterLink>
              <FooterLink href="/pricing">Tarifs</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/privacy">Confidentialité</FooterLink>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ 
          mt: 6, 
          pt: 3, 
          borderTop: `1px solid ${theme.palette.grey[700]}`,
          textAlign: "center"
        }}>
          <Typography variant="body2" sx={{ color: theme.palette.grey[500] }}>
            © {new Date().getFullYear()} <Box component="span" sx={{ color: "white" }}>Cloudium ERP</Box>. Tous droits réservés.
          </Typography>
          <Typography variant="caption" sx={{ 
            display: "block", 
            mt: 1,
            color: theme.palette.grey[600]
          }}>
            Version {process.env.REACT_APP_VERSION || '1.0.0'}
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;