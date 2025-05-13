import { Fragment } from "react";
import {  Route, Routes } from "react-router-dom";
import { MapPage, NotFound } from "../pages";
import { langDefault, } from "../utils";
import {  mainPaths} from "./RouteConfig";
import { App } from "../App";



export const Routing = () => {
  return  (
    <Routes>
      {mainPaths.map((rootPath: string, index: number) => {
        const langSelected = rootPath === "/" ? langDefault : rootPath;
        const rootGroupPath = rootPath === "/" ? "/" : `/${langSelected}/`;
        return (
          <Fragment key={`${rootGroupPath}_${langSelected}_${index}`}>
            <Route path={rootGroupPath} element={<App />}>
              <Route index element={<MapPage />} />
            </Route>
          </Fragment>
        );
      })}

      <Route path="*" element={<NotFound />} />
    </Routes>
  ) 
};
