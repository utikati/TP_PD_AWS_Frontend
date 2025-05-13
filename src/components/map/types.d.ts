import { IMapData, IMapMarkersItems } from "../../store/ducks/map/types";
export interface CategoryBarProps {
    filter: [filtersNr: number, setFiltersNr: any];
    category: [categoryID: string, setCategoryID: any];
    mapData: IMapData;
    arrRoutes?: IRouterPlannerMapPoints[];
}
export interface MapFilterBarProps {
    onEnter: any;
    setSearch: any;
    searchPlaceholder: string;
}
export interface PopupMarkerPageProps {
    marker: [markerData: IMapMarkersItems | undefined, markerState: any];
    setArrRoutes: React.Dispatch<React.SetStateAction<IRouterPlannerMapPoints[]>>;
    menuId: [menuID: number, menuIDState: any];
    arrRoutes: IRouterPlannerMapPoints[];
}
export interface IRouterPlannerMap {
    arrRoutes: IRouterPlannerMapPoints[];
    setArrRoutes: React.Dispatch<React.SetStateAction<IRouterPlannerMapPoints[]>>;
    mapData: IMapData;
}
export interface SearchInputProps {
    onEnter: any;
    setSearch: any;
    searchPlaceholder: string;
}
export interface IRouterPlannerMapPoints {
    items: IMapMarkersItems;
    menuId: number;
}
export interface IDocumentPdf {
    arrRoutes: IRouterPlannerMapPoints[];
    mapData: IMapData;
    setArrRoutes?: React.Dispatch<React.SetStateAction<IRouterPlannerMapPoints[]>>;
}
export interface IDocumentPdfCard {
    point: IRouterPlannerMapPoints;
    mapData: IMapData;
}
