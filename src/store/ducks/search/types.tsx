import { ILink, INavigation } from "../../../types";

export interface ISearchState {
  searchList: ISearchData;
  searchListLoaded: boolean;
}

export interface ISearchData {
  items?: ISearch[];
  metaTags?: string;
  count: number;
  totalPages: number;
}

export const InitialSearchData: ISearchData = {
  count: 0,
  totalPages: 0,
};

export interface ISearch {
  title?: string;
  summary?: string;
  link: ILink;
  breadcrumbs: INavigation[];
}
