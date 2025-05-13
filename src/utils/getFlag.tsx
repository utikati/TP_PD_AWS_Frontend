export const getFlag = (countryCode: string) => {
  const flagPT = "/assets/images/svg/flag-pt.svg";
  const flagEN = "/assets/images/svg/flag-en.svg";
  const flagES = "/assets/images/svg/flag-es.svg";
  switch (countryCode.toLowerCase()) {
    case "pt":
      return {
        name: "PT",
        flag: flagPT,
      };
    case "en":
      return {
        name: "EN",
        flag: flagEN,
      };
    case "es":
      return {
        name: "ES",
        flag: flagES,
      };
    default:
      return {
        name: "PT",
        flag: flagPT,
      };
  }
};
