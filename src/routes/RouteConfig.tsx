import { langDefault, langDefaultRedirect, langs } from "./../utils";
export const mapLang: any = {
  pt: "mapa",
  en: "map",
};

export const notFoundPath = "404";
export const loading = "loading";

export const mainPaths = [...langs, "/"];

// Return the root path (ex: / or /en)
export const Root = (lang: string = langDefault) => {
  return langDefaultRedirect && lang === langDefault ? "/" : `/${lang}/`;
};
