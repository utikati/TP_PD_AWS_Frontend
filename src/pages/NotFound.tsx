import { useEffect, useState } from "react";
import { CommonLink } from "../components/shared";


export const NotFound = () => {
  const [collection, setCollection] = useState(document.getElementsByTagName("nav"));

  useEffect(() => {
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.display = "none";
    }
    setTimeout(() => {
      for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = "none";
      }
    }, 800);
  }, [collection]);

  useEffect(() => {
    const nav = document.querySelector("nav");

    if (nav != null) {
      nav.style.display = "none";
    }
    const footer = document.querySelector("footer");
    if (footer != null) {
      footer.style.display = "none";
    }
    if (document.querySelector<HTMLElement>(".App")) {
      document.querySelector<HTMLElement>(".App")!.style.minHeight = "100%";
    }

    return () => {
      if (nav != null) {
        nav.style.display = "inherit";
      }
      if (footer != null) {
        footer!.style.display = "block";
      }
      document.querySelector<HTMLElement>(".App")!.style.minHeight = "100vh";
    };
  });



  return (
    <section className="not-found">
      <div className="not-found__container">
        <div className="not-found--title">
          <h1>Erro página</h1>
        </div>
        <div className="not-found--text">
          <p>A página não foi encontrada</p>
        </div>
        <div className="not-found--way-back-home">
          <CommonLink link={{ external: false, url: "/" }} >
           Go to Map Smart Guy
          </CommonLink>
        </div>
      </div>
    </section>
  );
};
