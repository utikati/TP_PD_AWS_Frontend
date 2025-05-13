import { useTranslation } from "react-i18next";
import { CommonImage } from "./CommonImage";

import { IDescription } from "./types";

export const Description = (props: IDescription) => {


  const { sideImage, sideImageTitle, sideDescription, descriptionVariant, lastUpdate, dateFormat } = props;
  const { t } = useTranslation();

  return (
    <section id="description" className="margin-bottom__description">
      <div>
        <div className="clearfix"></div>
        {sideImage && sideImage.length > 0 && (
          <div className="side-image--generic">
            <figure>
              <CommonImage imageClass="img--generic" src={sideImage} title={sideImageTitle || "image"} />
              {sideImageTitle && <figcaption>{sideImageTitle}</figcaption>}
            </figure>
          </div>
        )}
        <div className="description--generic text-indent">
          {sideDescription && (
            <div
              dangerouslySetInnerHTML={{
                __html: sideDescription,
              }}
              className={descriptionVariant ? `description--${descriptionVariant}` : `description--`}
            ></div>
          )}
          {lastUpdate && (
            <span className="last-update">
              <>
                {t("general:lastUpdate")}
                {new Date(lastUpdate)}
              </>
            </span>
          )}
        </div>
        <div className="clearfix"></div>
      </div>
    </section>
  );
};
