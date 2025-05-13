export const enum numberId {
  beach = 2101,
  museum = 2102,
  geo = 2158,
  viewpoint = 2163,
  culture = 2164,
  park = 2165,
  farm = 2166,
  walk = 2167,
  center = 2168,
  default = 2169,
}

export const enum classPoints {
  beachPoint = "beachClass",
  museumPoint = "museumClass",
  geoPoint = "geoClass",
  viewpointPoint = "viewpointClass",
  culturePoint = "cultureClass",
  parkPoint = "parkClass",
  farmPoint = "farmClass",
  walkPoint = "walkClass",
  termalPoint = "centerClass",
  defaultPoint = "defaultClass",
}

export const pointsEnumMap: any = {
  [numberId.beach]: classPoints.beachPoint,
  [numberId.museum]: classPoints.museumPoint,
  [numberId.geo]: classPoints.geoPoint,
  [numberId.viewpoint]: classPoints.viewpointPoint,
  [numberId.culture]: classPoints.culturePoint,
  [numberId.park]: classPoints.parkPoint,
  [numberId.farm]: classPoints.farmPoint,
  [numberId.walk]: classPoints.walkPoint,
  [numberId.center]: classPoints.termalPoint,
  [numberId.default]: classPoints.defaultPoint,
};
