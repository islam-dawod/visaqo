// Prefix static assets with the basePath so they resolve on GitHub Pages
// (served under /visaqo) and locally (served at /).
export const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/visaqo" : "";

export const asset = (path: string) => `${BASE_PATH}${path}`;

// The user's own Spline 3D globe scene used in the hero.
export const SPLINE_GLOBE =
  "https://my.spline.design/globe3d-Yfca9HTN3YPixJgwipyNPdpQ/";
