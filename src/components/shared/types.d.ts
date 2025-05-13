import { MouseEventHandler, ReactNode } from "react";
import { IDocument, IGallery, ILink, INavigation, IThumbnail } from "../../types";
export interface BreadcrumbsProps {
    breadcrumbs: INavigation[];
}
export interface CalendarProps {
    startDate: Date | string;
    setStartDate: Function;
    endDate: Date | string;
    setEndDate: Function;
    dateFormat?: string;
    setOpen?: Function;
    open?: boolean;
}
export interface CommonImageProps {
    src?: any;
    title?: string;
    imageClass?: string;
    lazyLoad?: boolean;
    defaultSize?: number;
    bootSizes?: any;
    sizes?: number[];
}
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
export interface ICommonSelectProps {
    set: Function;
    refInput: any;
    categories: any[];
    classList?: string;
    selectName: string;
    placeholder: string;
}
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
export interface CookiesPopupCompProps extends CookiesPopupProps {
}
export interface DocumentProps {
    dateCol?: boolean;
    document: IDocument;
}
export interface MapProps {
    data: string;
    title: string;
    address: string;
    btnClass: string;
    markerIcon: string;
}
export interface MapCompProps extends MapProps {
}
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
export interface ShareProps {
    class?: string;
}
export interface ITopVideoImage {
    topVideo?: IGallery;
    topImage?: IThumbnail[];
    title: string;
    topImageTitle?: string;
}
export interface IDescription {
    sideImage?: IThumbnail[];
    sideImageTitle?: string;
    sideDescription?: string;
    descriptionVariant?: string;
    lastUpdate?: Date;
    dateFormat?: string;
}
export interface IListDocuments {
    documents?: IDocument[];
    variant?: string;
}
export interface ITopDescription {
    topDescription?: string;
    subtitle?: string;
}
export interface INoResults {
    msg?: string;
}
