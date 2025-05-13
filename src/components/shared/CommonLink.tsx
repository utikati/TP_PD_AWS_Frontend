import { Link } from "react-router-dom";
import { CommonLinkProps } from "./types";
import { useTranslation } from "react-i18next";

export const CommonLink = (props: CommonLinkProps) => {
  const { t } = useTranslation();
  const { link, title, children, linkClass, onClick, onMouseOver, onMouseLeave, openNewWindow } = props;

  const getLink = (url: string) => {
    return url.indexOf("?") !== -1 ? url : { pathname: url };
  };

  return (
    <>
      {link.external ? (
        <a
          href={link.url}
          className={linkClass}
          title={t("general:goTo", { title: title })}
          target="_blank"
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          rel="noreferrer"
        >
          {children}
        </a>
      ) : (
        <Link
          to={getLink(link?.url || "")}
          className={linkClass}
          title={t("general:goTo", { title: title })}
          target={openNewWindow ? "_blank" : "_self"}
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          {children}
        </Link>
      )}
    </>
  );
};
