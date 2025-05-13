import { MouseEventHandler, ReactNode } from "react";
import { IDocument, IGallery, ILink, INavigation, IThumbnail } from "../../types";

//#region breadcrumbs
export interface BreadcrumbsProps {
  breadcrumbs: INavigation[];
}
//#endregion

//#region calendar
export interface CalendarProps {
  startDate: Date | string;
  setStartDate: Function;
  endDate: Date | string;
  setEndDate: Function;
  dateFormat?: string;
  setOpen?: Function;
  open?: boolean;
}
//#endregion

//#region common image
export interface CommonImageProps {
  src?: any;
  title?: string;
  imageClass?: string;
  lazyLoad?: boolean;
  defaultSize?: number;
  bootSizes?: any;
  sizes?: number[];
}
//#endregion

//#region common link
export interface CommonLinkProps {
  link: ILink;
  title?: string;
  children: ReactNode;
  linkClass?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  onMouseOver?: MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement>;
  openNewWindow?: boolean;
}
//#endregion

//#region common select
export interface ICommonSelectProps {
  set: Function;
  refInput: any;
  categories: any[];
  classList?: string;
  selectName: string;
  placeholder: string;
}
//#endregion

//#region cookies popup
export interface CookiesPopupProps {
  open: boolean;
  handleClose: any;
  handleSave: any;
  title: string;
  description: string;
  mandatoryDesc: string;
  optionalDesc: string;
  allowedOptional: string;
  className: string;
}

export interface CookiesPopupCompProps extends CookiesPopupProps {}
//#endregion

//#region document
export interface DocumentProps {
  dateCol?: boolean;
  document: IDocument;
}
//#endregion

//#region map
export interface MapProps {
  data: string;
  title: string;
  address: string;
  btnClass: string;
  markerIcon: string;
}

export interface MapCompProps extends MapProps {}
//#endregion

//#region pagination
export interface PaginationProps {
  currentPage?: number;
  onPageChange: Function;
  pageSize?: number;
  totalCount?: number;
  onlyNextPrev?: boolean;
  nextLink?: ILink;
  prevLink?: ILink;
  nextLabel?: string;
  prevLabel?: string;
}

export interface PaginationCompProps extends PaginationProps {
  scrollTop?: boolean;
  setParams?: boolean;
}
//#endregion

//#region search bar
export interface SearchBarProps {
  categoriesList: OptionProps[];
  searchPlaceholder: string;
  selectClassName: string;
  categoryPlaceholder: string;
  datePlaceholder: string;
  searchButton: string;
  setCurrentPage: Function;
  largeOnly?: boolean;
}

export interface OptionProps {
  id?: number;
  title?: string;
}
//#endregion

//#region share
export interface ShareProps {
  class?: string;
}
//#endregion

//#region TopVideoImage
export interface ITopVideoImage {
  topVideo?: IGallery;
  topImage?: IThumbnail[];
  title: string;
  topImageTitle?: string;
}
//#endregion

//#region Description
export interface IDescription {
  sideImage?: IThumbnail[];
  sideImageTitle?: string;
  sideDescription?: string;
  descriptionVariant?: string;
  lastUpdate?: Date;
  dateFormat?: string;
}

//#endregion

//#region ListDocuments
export interface IListDocuments {
  documents?: IDocument[];
  variant?: string;
}

//#endregion

//#region TopDescription
export interface ITopDescription {
  topDescription?: string;
  subtitle?: string;
}
//#end region

//#region NoResults
export interface INoResults {
  msg?: string;
}
//#end region
