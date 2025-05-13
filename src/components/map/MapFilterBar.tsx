import { useNavigate } from "react-router-dom";
import { SearchInput } from "./SearchInput";
import { MapFilterBarProps } from "./types";
import { CommonImage } from "../shared";
import logoBlack from "../../assets/images/svg/logo_black.svg";
import { useTranslation } from "react-i18next";

export const MapFilterBar = (props: MapFilterBarProps) => {
  const { onEnter, setSearch, searchPlaceholder } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="map-filter-bar">
      <button className="map-filter-bar__home-section" onClick={() => goBack()} title={t("map:goBack")}>
        <span className="fal fa-long-arrow-left icon-arrow-left"></span>
        {window.innerWidth > 992 && <CommonImage imageClass="logo-map" src={logoBlack} title="logo" />}
      </button>
      <SearchInput onEnter={onEnter} setSearch={setSearch} searchPlaceholder={searchPlaceholder}></SearchInput>
    </div>
  );
};
