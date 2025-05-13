export const langs = process.env.REACT_APP_LANGUAGES?.split(";") || ["pt"];
export const langDefault = process.env.REACT_APP_DEFAULT_LANGUAGE || "pt";
export const langDefaultRedirect = process.env.REACT_APP_DEFAULT_LANGUAGE_FORCED_REDIRECT === "true";
