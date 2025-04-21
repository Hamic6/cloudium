import React from "react";
import styled from "@emotion/styled";
import { Container, Grid, Typography, Link } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

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

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Cloudium ERP
            </Typography>
            <Typography variant="body2">
              Une plateforme de gestion de la facturation et des stocks pour les entreprises modernes.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Liens utiles
            </Typography>
            <FooterLink href="/about">À propos</FooterLink>
            <FooterLink href="/pricing">Tarifs</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/privacy">Politique de confidentialité</FooterLink>
          </Grid>
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
        </Grid>
        <Typography variant="body2" style={{ marginTop: "16px" }}>
          © {new Date().getFullYear()} Cloudium. Tous droits réservés.
        </Typography>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
