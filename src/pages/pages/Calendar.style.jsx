import { css } from "@emotion/react";

const styles = (props) => css`
  --fc-small-font-size: 1em;
  --fc-page-bg-color: #fff;
  --fc-neutral-bg-color: rgba(208, 208, 208, 0.3);
  --fc-neutral-text-color: #808080;
  --fc-border-color: ${props.theme.palette.divider};

  --fc-button-text-color: ${props.theme.palette.primary.contrastText};
  --fc-button-bg-color: ${props.theme.palette.primary.main};
  --fc-button-border-color: ${props.theme.palette.primary.main};
  --fc-button-hover-bg-color: ${props.theme.palette.primary.dark};
  --fc-button-hover-border-color: ${props.theme.palette.primary.dark};
  --fc-button-active-bg-color: ${props.theme.palette.primary.dark};
  --fc-button-active-border-color: ${props.theme.palette.primary.dark};

  --fc-event-bg-color: ${props.theme.palette.primary.main};
  --fc-event-border-color: ${props.theme.palette.primary.main};
  --fc-event-text-color: ${props.theme.palette.primary.contrastText};
  --fc-event-selected-overlay-color: rgba(0, 0, 0, 0.25);

  --fc-more-link-bg-color: #d0d0d0;
  --fc-more-link-text-color: inherit;

  --fc-event-resizer-thickness: 8px;
  --fc-event-resizer-dot-total-width: 8px;
  --fc-event-resizer-dot-border-width: 1px;

  --fc-non-business-color: rgba(215, 215, 215, 0.3);
  --fc-bg-event-color: rgb(143, 223, 130);
  --fc-bg-event-opacity: 0.2;
  --fc-highlight-color: rgba(188, 232, 241, 0.3);
  --fc-today-bg-color: rgba(255, 220, 40, 0.15);
  --fc-now-indicator-color: red;

  --fc-daygrid-event-dot-width: 8px;
`;

export default styles;
