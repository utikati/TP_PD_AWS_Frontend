import { IMapItems } from "../../store/ducks/map/types";

//#region category bar
export interface CategoryBarProps {
  filter: [filtersNr: number, setFiltersNr: any];
  //category: [categoryID: string, setCategoryID: any];
  mapData: IMapItems;
}
//#endregion

//#region map filter bar
export interface MapFilterBarProps {
  onEnter: any;
  setSearch: any;
  searchPlaceholder: string;
}
//#endregion

//#region popup marker page
export interface PopupMarkerPageProps {
  marker: [markerData: IMapItems | undefined, markerState: any];
}
//#endregion

//#region search input
export interface SearchInputProps {
  onEnter: any;
  setSearch: any;
  searchPlaceholder: string;
}
//#endregion
