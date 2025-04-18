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

function Contents() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Contents
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Inside the zip-file you'll find the following directories and files.
        Both compiled and minified distrubution files, as well as the source
        files are included in the package.
      </Typography>

      <Code>{`theme/
  ├── .env
  ├── .eslintrc
  ├── .gitignore
  ├── .prettierrc
  ├── package.json
  ├── package-lock.json
  ├── vite.config.js
  ├── README.md
  ├── index.html
  ├── dist/
  ├── public/
  │   ├── index.html
  │   └── manifest.json
  └── src/
      ├── components/
      ├── contexts/
      ├── hooks/
      ├── layouts/
      ├── mocks/
      ├── pages/
      ├── redux/
      ├── theme/
      ├── utils/
      ├── vendor/
      ├── App.jsx
      ├── config.js
      ├── constants.js
      ├── i18n.js
      ├── index.jsx
      └── routes.jsx`}</Code>
    </Box>
  );
}

function QuickStart() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Quick start
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        This project uses{" "}
        <Link
          href="https://vitejs.dev/"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          Vite
        </Link>{" "}
        for a blazing fast development experience. You'll need to install{" "}
        <Link
          href="https://nodejs.org/en/"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          Node.js
        </Link>{" "}
        before using Mira. The required Node.js version can be found in the{" "}
        <code>.nvmrc</code> file in the project root.
      </Typography>

      <Typography variant="subtitle1" gutterBottom my={4}>
        Once{" "}
        <Link
          href="https://nodejs.org/en/"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          Node.js
        </Link>{" "}
        is installed, run <code>npm install</code> to install the rest of Mira's
        dependencies. All dependencies will be downloaded to the{" "}
        <code>node_modules</code> directory.
        <br />
        <Code>npm install</Code>
      </Typography>

      <Typography variant="subtitle1" gutterBottom my={4}>
        Now you're ready to modify the source files and generate new{" "}
        <code>dist/</code> files. Mira is using Vite to automatically detect
        file changes and start a local webserver at{" "}
        <code>http://localhost:5173</code>.
        <br />
        <Code>npm start</Code>
      </Typography>
    </Box>
  );
}

function BuildTools() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Build tools
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Start a local webserver at <code>http://localhost:5173</code> and detect
        file changes:
        <br />
        <Code>npm start</Code>
      </Typography>

      <Typography variant="subtitle1" gutterBottom my={4}>
        Compile, optimize, minify and uglify all source files to dist/:
        <br />
        <Code>npm run build</Code>
      </Typography>
    </Box>
  );
}

function GettingStarted() {
  return (
    <React.Fragment>
      <Helmet title="Getting Started" />
      <Grid container spacing={6} justifyContent="center">
        <Grid
          size={{
            xs: 12,
            lg: 9,
            xl: 7,
          }}
        >
          <Typography variant="h2" gutterBottom display="inline">
            Getting Started
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/">
              Dashboard
            </Link>
            <Link component={NavLink} to="/documentation/welcome">
              Documentation
            </Link>
            <Typography>Getting Started</Typography>
          </Breadcrumbs>

          <Divider my={6} />

          <QuickStart />
          <BuildTools />
          <Contents />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default GettingStarted;
