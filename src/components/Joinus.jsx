import React from "react";
import styled from "@emotion/styled";
import { Container, Grid, Typography, Link } from "@mui/material";

const FooterWrapper = styled.div`
  background: #121826;
  color: ${(props) => props.theme.palette.common.white};
  padding: 32px 0;
  text-align: center;
`;

const FooterLink = styled(Link)`
  color: ${(props) => props.theme.palette.primary.main};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We build modern, scalable, and customizable solutions for your
              business needs.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <br />
            <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: <FooterLink href="mailto:support@cloudium.com">support@cloudium.com</FooterLink>
            </Typography>
            <Typography variant="body2">
              Phone: +1 (123) 456-7890
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ marginTop: 4 }}>
          © {new Date().getFullYear()} Cloudium. All rights reserved.
        </Typography>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
