/// <reference types="vite-plugin-svgr/client" />

export interface IDocument {
  title: string;
  file: string;
  extension: string;
  date: string;
}

export interface ILink {
  external: boolean;
  url?: string;
  component?: string;
}

export interface IImage {
  link?: string;
  width?: number;
  height?: number;
}

export interface INavigation {
  id?: number;
  title?: string;
  link?: ILink;
}

export interface IGallery {
  content?: string;
  title?: string;
  isVideo?: boolean;
  thumbnail?: string;
  contentType?: string;
  contentID?: string;
}

export interface IThumbnail {
  link: string;
  width?: number;
}
