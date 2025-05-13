export const checkLang = (newLng: string, actualLng: string) => {
  const allLangs = process.env.REACT_APP_LANGUAGES?.split(";").filter((lng: string) => {
    return lng !== actualLng;
  });
  return allLangs && newLng !== actualLng && allLangs.includes(newLng);
};
