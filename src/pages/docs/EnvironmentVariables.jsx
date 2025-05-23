import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Grid2 as Grid,
  Link,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";

import Code from "@/components/Code";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Typography = styled(MuiTypography)(spacing);

function Introduction() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Introduction
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Your project can consume variables declared in your environment as if
        they were declared locally in your JS files. By default you will have{" "}
        <code>NODE_ENV</code> defined for you, and any other environment
        variables starting with <code>VITE_</code>.
      </Typography>
    </Box>
  );
}

function AddingEnvironmentVariables() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Adding environment variables
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        To define permanent environment variables, create a file called{" "}
        <code>.env</code> in the root of your project:
        <Code>VITE_NOT_SECRET_CODE=abcdef</Code>
        Note: You need to restart the development server after changing{" "}
        <code>.env</code> files.
      </Typography>
    </Box>
  );
}

function AccessingEnvironmentVariables() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Accessing environment variables
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Environment variables will be defined for you on{" "}
        <code>import.meta.env</code>. For example, having an environment
        variable named <code>VITE_NOT_SECRET_CODE</code> will be exposed in your
        JS as <code>import.meta.env.VITE_NOT_SECRET_CODE</code>.
        <Code>{`if (import.meta.env.DEV) {
  // do something in development mode only
}`}</Code>
        <Code>{`if (import.meta.env.PROD) {
  // do something in production mode only
}`}</Code>
        <Code>{`<title>{import.meta.env.VITE_WEBSITE_NAME}</title>`}</Code>
      </Typography>
    </Box>
  );
}

function LearnMore() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Learn more
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        To learn more about environment variables,{" "}
        <Link
          href="https://vitejs.dev/guide/env-and-mode"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          click here
        </Link>
        .
      </Typography>
    </Box>
  );
}

function EnvironmentVariables() {
  return (
    <React.Fragment>
      <Helmet title="Environment Variables" />
      <Grid container spacing={6} justifyContent="center">
        <Grid
          size={{
            xs: 12,
            lg: 9,
            xl: 7,
          }}
        >
          <Typography variant="h2" gutterBottom display="inline">
            Environment Variables
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/">
              Dashboard
            </Link>
            <Link component={NavLink} to="/documentation/welcome">
              Documentation
            </Link>
            <Typography>Environment Variables</Typography>
          </Breadcrumbs>

          <Divider my={6} />

          <Introduction />
          <AddingEnvironmentVariables />
          <AccessingEnvironmentVariables />
          <LearnMore />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default EnvironmentVariables;
