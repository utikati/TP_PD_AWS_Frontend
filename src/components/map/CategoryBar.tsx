import { useTranslation } from "react-i18next";
import { IMapItems } from "../../store/ducks/map/types";
import { isMobile } from "../../utils";
import { CategoryBarProps } from "./types";
import { CommonImage } from "../shared";
import { pointsEnumMap } from "../../utils/enumColorsCategory";

export const CategoryBar = (props: CategoryBarProps) => {
  const { t } = useTranslation();
  const { filter, mapData } = props;
  //const [categoryID, setCategoryID] = category;
  const [filtersNr, setFiltersNr] = filter;

  //animations
  const openCategoryBar = (e: any) => {
    const element = e.target as HTMLElement;
    element.classList.add("active");
  };

  const closeCategoryBar = () => {
    const element = document.getElementById("category-bar");
    element?.classList.remove("active");
  };

  // //actions
  // const ToggleSubcategory = (index: number, menuId: number) => {
  //   const element = document.getElementById(`category-${index}`);
  //   let strId: string | null = "";

  //   if (!element?.classList.contains("category-selected")) {
  //     if (categoryID === "0") {
  //       strId = menuId.toString();
  //     } else {
  //       strId = categoryID + "," + menuId.toString();
  //     }
  //     setCategoryID(strId);
  //     setFiltersNr(filtersNr + 1);
  //   } else {
  //     const selected = categoryID.split(",").filter((cat) => {
  //       return cat !== menuId.toString();
  //     });
  //     if (selected.length === 0) {
  //       strId = "0";
  //     } else {
  //       strId = selected.join(",");
  //     }
  //     setCategoryID(strId);
  //     setFiltersNr(filtersNr - 1);
  //   }
  //   element?.classList.toggle("category-selected");
  // };

  // const CleanFilters = () => {
  //   const subList: Element[] = Array.from(
  //     document.getElementsByClassName("category-selected")
  //   );
  //   setCategoryID("0");
  //   subList.forEach((el: Element) => {
  //     el.classList.remove("category-selected");
  //   });
  //   setFiltersNr(0);
  // };

  const AddPoint = () => {};
  return (
    <div
      id="category-bar"
      className="category-bar"
      onClick={(e) => {
        if (isMobile()) {
          openCategoryBar(e);
        }
      }}
    >
      <div className="category-bar__side-bar-header">
        <div className="category-title">{t("map:category")}</div>
        {window.innerWidth < 992 && (
          <div className="filters-title">
            {t("map:filters")}{" "}
            <span className="filtersNr">
              {filtersNr === 0 ? "" : "(" + filtersNr.toString() + ")"}
            </span>
          </div>
        )}
        {window.innerWidth > 992 && (
          <button
            onClick={() => {
              AddPoint();
            }}
          >
            Adicionar Ponto
          </button>
        )}
        <button onClick={() => {}} className="clean-btn">
          <span className="text-clean-btn">Limpar</span>
          <span className="fal fa-trash icon-clean-btn"></span>
        </button>
      </div>
      {/* <div className="category-bar__side-bar-container">
        {mapData &&
          mapData.items &&
          Array.isArray(mapData?.items) &&
          mapData.items.map((category: IMapItems, index: number) => {
            return (
              <div
                key={index}
                id={"category-" + index}
                className={
                  "category-bar__side-bar-container--category-container " +
                  pointsEnumMap[category.menuId]
                }
                data-value={category.menuId}
                onClick={() => {
                  ToggleSubcategory(index, category.menuId);
                }}
              >
                <div className="title-img-container">
                  <div className="category-icon__container">
                    <CommonImage
                      imageClass="category-icon"
                      src={category?.icon}
                    />
                  </div>
                  <span className="category-title">{category.title}</span>
                </div>

                <span className="circle-without-icon"></span>
              </div>
            );
          })}
      </div>
      <div className="category-bar__side-bar-mobile-btns">
        <button
          onClick={() => closeCategoryBar()}
          className="side-bar-mobile-btn close"
        >
          {t("map:closeBtn")}
        </button>
        <button
          onClick={() => CleanFilters()}
          className="side-bar-mobile-btn clean"
        >
          {t("map:clean")}
        </button>
      </div> */}
    </div>
  );
};
