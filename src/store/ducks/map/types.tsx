import { ILink } from "../../../types";

export interface IMapState {
  mapData: IMapItems[];
  mapDataLoaded: boolean;
}

export interface IMapItems {
  country?: string;
  current_weather?: IMapDataItemsCurrentWeather;
  id?: number;
  latitude?: number;
  localtime?: string;
  localtime_epoch?: number;
  longitude?: number;
  name?: string;
  region?: string;
  timezone_id?: string;
  description?: string;
}

export interface IMapDataItemsCurrentWeather {
  cloud: number;
  condition_code: number;
  condition_icon: string;
  condition_text: string;
  created_at: string;
  dewpoint_c: number;
  dewpoint_f: number;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  heatindex_c: number;
  heatindex_f: number;
  humidity: number;
  id: number;
  is_day: boolean;
  last_updated: string;
  last_updated_epoch: number;
  location_id: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  updated_at?: any;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
  windchill_c: number;
  windchill_f: number;
}
