import { INoResults } from "./types";
import  NoResultsImg  from "./../../assets/images/svg/no-results.svg";
import { useTranslation } from "react-i18next";

export const NoResults = (props: INoResults) => {
  const { msg } = props;
  const { t } = useTranslation();

  return (
    <div className="no-results">
      <NoResultsImg />
      <span className="no-results__title">{t("general:noResults")}</span>
      <span className="no-results__subTitle">{msg || t("general:noResultsLabel")}</span>
    </div>
  );
};
