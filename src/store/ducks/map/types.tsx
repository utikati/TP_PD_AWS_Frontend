import { ILink } from "../../../types";

export interface IMapState {
  mapData: IMapItems[];
  mapDataLoaded: boolean;
}

export interface IMapItems {
  id: string;
  uv: string;
  location: string;
  condition_text: string;
  temp_c: string;
  temp_f: string;
  timestamp: string;
  timezone_id: string;
  wind_kph: string;
  country: string;
  cloud: string;
  condition_icon: string;
  localtime: string;
  longitude: string;
  humidity: string;
  region: string;
  feelslike_c: string;
  description: string;
  latitude: string;
  vis_km: string;
  precip_mm: string;
  pressure_mb: string;
  wind_dir: string;
}
