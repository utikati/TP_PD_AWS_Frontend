import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Outlet, useMatch } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ApplicationState } from "./store";
import { clearSearchList } from "./store/ducks/search";
import "./styles/App.scss";



export const App = () => {

  const dispatch = useDispatch();
  const location = useLocation();

  const { searchListLoaded } = useSelector((state: ApplicationState) => state.SEARCH);

  const mapMatch = useMatch("/mapa");
  const mapMatchEn = useMatch("/en/map");

  useEffect(() => {
   

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (searchListLoaded) dispatch(clearSearchList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Let the document know when the mouse is being used
  document.body.addEventListener("mousedown", function () {
    document.body.classList.add("using-mouse");
  });

  // Re-enable focus styling when Tab is pressed
  document.body.addEventListener("keydown", function () {
    document.body.classList.remove("using-mouse");
  });

  return (
    <div className="App">
      <main id="mainContent" className="page-content__container">
        <Outlet />
      </main>
    </div>
  );
};
