import { icon } from "leaflet";
import { MapContainer, TileLayer, Marker, AttributionControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapCompProps } from "./types";
import { useTranslation } from "react-i18next";

export const Map = (props: MapCompProps) => {
  const { data, title, address, btnClass, markerIcon } = props;
  const { t } = useTranslation();

  const regex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?), ?([-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?))$/gm;
  const result = regex.exec(data); //test regex and get values at the same time

  if (!result) {
    //return empty result is coordinates are not valid
    return <div className="d-none"></div>;
  } else {
    //@ts-ignore
    const position: LatLngExpression = {
      lat: result[1],
      lng: result[4],
    }; //ts-ignore because we are verifying before if result is null

    const mIcon = icon({
      iconUrl: markerIcon,
      iconRetinaUrl: markerIcon,
      iconAnchor: [23, 23],
      iconSize: [46, 46],
      className: "marker-blur",
    });

    const toggleAttrClass = () => {
      const toggleAttribution = document.querySelector(".leaflet-container")?.querySelector(".leaflet-control-container");
      if (toggleAttribution) {
        toggleAttribution.addEventListener("click", () => {
          //@ts-ignore
          document.querySelector(".leaflet-control-attribution").classList.toggle("show-attribution");
        });
      }
    };

    return (
      <section id="map" className="generic-map template-section">
        <MapContainer
          className="map-container"
          center={position}
          zoom={14}
          zoomControl={false}
          dragging={false}
          touchZoom={false}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          boxZoom={false}
          attributionControl={false}
          whenReady={() => {
            toggleAttrClass();
          }}
        >
          <TileLayer
            attribution='<span class="js-toggle-attribution fas fa-info-circle pe-2"></span> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <AttributionControl position="topright" />
          <Marker
            position={position}
            icon={mIcon}
            eventHandlers={{
              click: () => {
                window.open(
                  "https://www.google.com/maps/place/" + position.lat + "," + position.lng + "/" + position.lat + "," + position.lng + ", 18z",
                  "_blank"
                );
              },
            }}
          ></Marker>
        </MapContainer>
        <div className="map-details">
          <div className="map-details-wrapper">
            <h2 className="map-title">{t("map:localization")}</h2>
            <div className="marker-details">
              {title && <div>{title}</div>}
              {address && <div>{t("map:address") + ": " + address}</div>}
              {data && <div className="coordinates-text">{data}</div>}
            </div>
            <a
              type="button"
              href={"https://www.google.com/maps/place/" + position.lat + "," + position.lng + "/" + position.lat + "," + position.lng + ", 18z"}
              className={btnClass}
              title={t("map:button")}
              target="_blank"
              rel="noreferrer"
            >
              {t("map:button")}
            </a>
          </div>
        </div>
      </section>
    );
  }
};
