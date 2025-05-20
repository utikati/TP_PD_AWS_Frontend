import { useDispatch } from "react-redux";
import { decode } from "../../utils";
import { CommonImage } from "../shared";
import { PopupMarkerPageProps } from "./types";
import { format, parse } from "date-fns";
import {
  deleteData,
  getLocation,
  getMapData,
  patchLocationDescription,
} from "../../store/ducks/map/thunks";
import { clearMapData } from "../../store/ducks/map";
import { useEffect, useState } from "react";

import faPen from "../../assets/images/svg/pen-solid.svg";
import faPlus from "../../assets/images/svg/plus-solid.svg";
import { IMapItems } from "../../store/ducks/map/types";

export const PopupMarkerPage = (props: PopupMarkerPageProps) => {
  const { marker } = props;
  const [markerData, markerState] = marker;
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(markerData?.description ?? "");

  const dispatch = useDispatch<any>();

  useEffect(() => {
    setDescription(markerData?.description ?? "");
  }, [markerData?.description]);

  useEffect(() => {
    setIsEditing(false);
  }, [false]);

  const goBackFilters = () => {
    markerState(undefined);
  };

  const deletePoint = () => {
    dispatch(clearMapData());
    goBackFilters();
    dispatch(deleteData(markerData?.id || "")).then(() => {
      dispatch(getMapData());
    });
  };

  const patchDescription = () => {
    const original = markerData?.description ?? "";
    const updated = description.trim();

    if (original.trim() === updated) {
      setIsEditing(false);
      return;
    }

    dispatch(
      patchLocationDescription({
        locationId: markerData?.id,
        description: description,
      })
    ).then(() => {
      dispatch(getLocation(markerData?.id)).then(
        (response: { payload: IMapItems }) => {
          if (response.payload) {
            markerState(response.payload);
          }
        }
      );
    });
    dispatch(clearMapData());
    setIsEditing(false);
  };

  const closeModal = () => {
    setDescription(markerData?.description || "");
    setIsEditing(false);
  };

  const isButtonDisabled = () =>
    description.trim() === (markerData?.description ?? "").trim();

  useEffect(() => {
    const handleKeyDown = (e: { key: string }) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return markerData ? (
    <div className="popup-page">
      <div className="popup-page__popup-container">
        <div className="popup-page__popup-container--popup-topImage-container">
          <CommonImage
            src={markerData.condition_icon}
            title={markerData.region}
          />
        </div>

        <button
          onClick={() => goBackFilters()}
          className="popup-page__popup-container--popup-back-btn"
        >
          <span className="fal fa-arrow-left-long popup-icon-go-back"></span>
          <span className="popup-text-go-back">
            {window.innerWidth < 992 ? "Back" : "Go Back"}
          </span>
        </button>

        <div className="popup-page__popup-container--popup-details">
          <div className="popup-details-title">{markerData.region}</div>
          <div className="popup-details-separator"></div>

          {markerData.location && (
            <div className="popup-details-info">
              <span className="popup-details-info__info-icon fal fa-map-marker-alt"></span>
              <div className="popup-details-info__info-text">
                {decode(markerData.location)}
              </div>
            </div>
          )}

          {markerData.country && (
            <div className="popup-details-info">
              <span className="popup-details-info__info-icon fal fa-flag"></span>
              <div className="popup-details-info__info-text">
                {markerData.country}
              </div>
            </div>
          )}

          {markerData.localtime && (
            <div className="popup-details-info">
              <span className="popup-details-info__info-icon fal fa-clock"></span>
              <div className="popup-details-info__info-text">
                {(() => {
                  try {
                    const date = new Date(markerData.localtime);
                    return `${format(date, "dd MMM yyyy, HH:mm")} (${
                      markerData.timezone_id
                    })`;
                  } catch (err) {
                    return markerData.localtime;
                  }
                })()}
              </div>
            </div>
          )}

          {markerData.description && markerData.description.trim() !== "" ? (
            <div className="popup-details-info">
              <span className="popup-details-info__info-icon fal fa-flag"></span>
              <div className="popup-details-info__info-text">
                {markerData.description}
              </div>
              <span
                title="Edit description"
                className="icon-container"
                onClick={() => setIsEditing(true)}
              >
                <img src={faPen} alt="" />
              </span>
            </div>
          ) : (
            <div className="popup-details-info">
              <span className="popup-details-info__info-icon fal fa-flag"></span>
              <div className="popup-details-info__info-text">
                {markerData.description}
              </div>
              <span
                title="Add description"
                className="icon-container-add"
                onClick={() => setIsEditing(true)}
              >
                <img src={faPlus} alt="" />
              </span>
            </div>
          )}

          {markerData && (
            <>
              <div className="popup-details-separator"></div>

              <div className="popup-details-info">
                <span className="popup-details-info__info-icon fal fa-thermometer-half"></span>
                <div className="popup-details-info__info-text">
                  Temperature: {markerData.temp_c}°C,{" "}
                  {markerData.condition_text}
                </div>
              </div>

              <div className="popup-details-info">
                <span className="popup-details-info__info-icon fal fa-temperature-low"></span>
                <div className="popup-details-info__info-text">
                  Feels like: {markerData.feelslike_c}°C
                </div>
              </div>

              <div className="popup-details-info">
                <span className="popup-details-info__info-icon fal fa-wind"></span>
                <div className="popup-details-info__info-text">
                  Wind: {markerData.wind_kph} km/h {markerData.wind_dir}
                </div>
              </div>

              <div className="popup-details-info">
                <span className="popup-details-info__info-icon fal fa-tint"></span>
                <div className="popup-details-info__info-text">
                  Humidity: {markerData.humidity}%
                </div>
              </div>

              <div className="popup-details-info">
                <span className="popup-details-info__info-icon fal fa-sun"></span>
                <div className="popup-details-info__info-text">
                  UV index: {markerData.uv}
                </div>
              </div>

              <div className="popup-details-info">
                <span className="popup-details-info__info-icon fal fa-eye"></span>
                <div className="popup-details-info__info-text">
                  Visibility: {markerData.vis_km} km
                </div>
              </div>

              <div className="popup-details-info">
                <span className="popup-details-info__info-icon fal fa-cloud-rain"></span>
                <div className="popup-details-info__info-text">
                  Precipitation: {markerData.precip_mm} mm
                </div>
              </div>

              <div className="popup-details-info">
                <span className="popup-details-info__info-icon fal fa-tachometer-alt"></span>
                <div className="popup-details-info__info-text">
                  Pressure: {markerData.pressure_mb} hPa
                </div>
              </div>
            </>
          )}

          <a
            href={`https://www.google.com/maps/place/${markerData.latitude},${markerData.longitude}`}
            title={markerData.location}
            className="popup-details-how-to-btn"
            target="_blank"
            rel="noreferrer"
          >
            <span className="popup-details-how-to-btn__text-how-to-btn">
              Open in Google Maps
            </span>
            <span className="fal fa-arrow-right-long popup-details-how-to-btn__icon-how-to-btn"></span>
          </a>

          <button
            className="popup-details-how-to-btn"
            onClick={() => {
              deletePoint();
            }}
          >
            Delete Local
          </button>
        </div>
      </div>

      {isEditing && (
        <div className="modal-overlay">
          <div className="edit-description-modal">
            <h3>Update Description</h3>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Place your description here..."
            />
            <div className="modal-actions">
              <button
                className="save-btn"
                disabled={isButtonDisabled()}
                onClick={() => {
                  patchDescription();
                }}
              >
                Save
              </button>
              <button className="cancel-btn" onClick={() => closeModal()}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : null;
};
