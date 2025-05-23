import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../store";
import { getMapData, postData } from "../store/ducks/map/thunks";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";
import { divIcon, LatLngExpression } from "leaflet";
import { PopupMarkerPage } from "../components/map";
import { clearMapData } from "../store/ducks/map";
import L from "leaflet";

export const MapPage = () => {
  const dispatch = useDispatch<any>();
  const { mapData, mapDataLoaded } = useSelector(
    (state: ApplicationState) => state.MAP
  );

  const position: LatLngExpression = [39.2535369, -9.3283796];
  const [filtersNr, setFiltersNr] = useState(0);
  const [popupData, setPopup] = useState(undefined);
  const [inputSearch, setInputSearch] = useState("");
  const defaultMarker = "/assets/images/svg/defaultMarker.svg";
  const mapRef = useRef<L.Map | null>(null);
  const [selectedId, setSelectedId] = useState("");
  const [addingPoint, setAddingPoint] = useState(false);

  useEffect(() => {
    return () => {
      dispatch(clearMapData());
    };
  }, []);

  useEffect(() => {
    if (!mapDataLoaded) dispatch(getMapData());
  }, [mapDataLoaded]);

  useEffect(() => {
    const el = document.getElementById(selectedId);
    el?.classList.add("selected");
  }, [selectedId]);

  const onMarkerClick = (marker: any) => {
    setPopup(marker);
    document.querySelectorAll(".markerContainer").forEach((e) => {
      e.classList.remove("selected");
    });
    setSelectedId(marker.id);
  };

  useEffect(() => {
    if (!mapRef.current || !Array.isArray(mapData) || mapData.length === 0)
      return;

    const bounds = L.latLngBounds([]);

    mapData.forEach((marker) => {
      if (marker.latitude !== undefined && marker.longitude !== undefined) {
        bounds.extend([Number(marker.latitude), Number(marker.longitude)]);
      }
    });

    if (bounds.isValid()) {
      mapRef.current.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [mapData]);

  const toggleAttrClass = () => {
    const toggleAttribution = document.getElementById("toggle");

    if (toggleAttribution) {
      toggleAttribution.addEventListener("click", () => {
        document
          .querySelector(".leaflet-control-attribution")
          ?.classList.toggle("show-attribution");
      });
    }
  };

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const handleClick = (e: L.LeafletMouseEvent) => {
      if (!addingPoint) return;

      const { lat, lng } = e.latlng;
      console.log("Coordenadas do clique:", lat, lng);

      dispatch(clearMapData());
      dispatch(
        postData({ latitude: lat.toString(), longitude: lng.toString() })
      ).then(() => {
        dispatch(getMapData());
      });

      //L.marker([lat, lng]).addTo(map);

      setAddingPoint(false);
      map.getContainer().style.cursor = "";
    };

    map.on("click", handleClick);

    return () => {
      map.off("click", handleClick);
    };
  }, [addingPoint]);

  return (
    <div className="mapPage">
      <button
        onClick={() => {
          setAddingPoint(true);
          const container = mapRef.current?.getContainer();
          if (container) {
            container.style.cursor = "crosshair";
          }
        }}
        className="add-point"
      >
        Insert Local
      </button>

      <MapContainer
        ref={mapRef}
        center={position}
        zoom={13}
        zoomControl={false}
        scrollWheelZoom={false}
        whenReady={() => {
          let intervalId = setInterval(() => {
            toggleAttrClass();
            clearInterval(intervalId);
          }, 100);
          return () => clearInterval(intervalId);
        }}
      >
        <TileLayer
          attribution='<span id="toggle" class="js-toggle-attribution fas fa-info-circle pe-2"></span> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ZoomControl position="bottomleft" />

        {mapData &&
          mapData.length > 0 &&
          mapData.map((marker, index) => {
            if (
              marker.latitude !== undefined &&
              marker.longitude !== undefined
            ) {
              const markerPosition: LatLngExpression = [
                Number(marker.latitude),
                Number(marker.longitude),
              ];

              const icon = divIcon({
                html: `<div class='markerContainer' id='${marker.id}'>
                         <img class='markerIcon' src='${
                           marker.condition_icon || defaultMarker
                         }' alt='${marker.region}' />
                       </div>`,
              });

              return (
                <Marker
                  key={index}
                  position={markerPosition}
                  icon={icon}
                  eventHandlers={{
                    click: () => onMarkerClick(marker),
                  }}
                />
              );
            }
            return null;
          })}
      </MapContainer>

      <PopupMarkerPage marker={[popupData, setPopup]} />
    </div>
  );
};
