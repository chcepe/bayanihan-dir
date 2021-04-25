// @ts-nocheck
import React, { FC, useContext } from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { AppContext } from "lib/AppContext";

import * as S from "./styles";

const icon = new Leaflet.Icon({
  iconUrl: "/images/pin.svg",
  iconSize: new L.Point(30, 30),
});

const MapPage: FC = () => {
  const { pantries } = useContext(AppContext);
  const position = [12.8797, 121.774];

  return (
    <S.Wrapper>
      <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pantries.map((pantry) => {
          return (
            <Marker
              icon={icon}
              key={pantry.id}
              position={[pantry.coords.lat, pantry.coords.long]}
            >
              <Popup>{pantry.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </S.Wrapper>
  );
};

export default MapPage;
