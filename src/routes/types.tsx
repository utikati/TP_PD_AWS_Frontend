import { ReactElement } from "react";

export type IRoute = {
  [property: string]: IRoutePath;
};

export interface IRoutePath {
  path: string;
  element: ReactElement;
  langs: IRoutePathLang | null;
}

export type IRoutePathLang = {
  [property: string]: string;
};
