// @ts-nocheck
import React, { FC, useContext } from "react";
import { useHistory } from "react-router";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import Button from "components/shared/Button";
import { AppContext } from "lib/AppContext";
import { LEAFLET_ICON, PHILIPPINES_LL } from "utils/constants";

import * as S from "./styles";

const MapPage: FC = () => {
  const { pantries } = useContext(AppContext);
  const { push } = useHistory();

  const zoomPos = PHILIPPINES_LL;

  return (
    <S.Wrapper>
      <div style={{ height: "100vh" }}>
        <MapContainer
          zoomControl={false}
          zoomAnimation
          style={{ height: "100%" }}
          center={zoomPos}
          zoom={6}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {pantries.map((pantry) => {
            const pos = [pantry.coords.lat, pantry.coords.long];
            return (
              <Marker icon={LEAFLET_ICON} key={pantry.id} position={pos}>
                <Popup>
                  {pantry.name}
                  <Button
                    marginT="md"
                    block
                    onClick={() => push(`/map/${pantry.id}`)}
                    text="View Details"
                  />
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </S.Wrapper>
  );
};

export default MapPage;
