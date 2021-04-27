// @ts-nocheck
import React, { FC, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { FacebookProvider, Comments } from "react-facebook";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  MapConsumer,
} from "react-leaflet";
import { FaLocationArrow, FaStickyNote } from "react-icons/fa";
import { AiFillCalendar, AiFillPhone } from "react-icons/ai";
import { MdLocalGroceryStore } from "react-icons/md";

import {
  APP_URL,
  FB_APP_ID,
  LEAFLET_ICON,
  PHILIPPINES_LL,
} from "utils/constants";
import Container from "components/shared/Container";
import { AppContext } from "lib/AppContext";
import Button from "components/shared/Button";
import Footer from "components/shared/Footer";
import FavoriteBtn from "components/shared/FavoriteBtn";

import * as S from "./styles";

const SinglePantry: FC = () => {
  const { pantries } = useContext(AppContext);
  const { id } = useParams<{ id: string }>();
  const { push } = useHistory();

  let map = null;
  const activePantry = pantries.find((pantry) => pantry.id === id);
  let zoomPos = activePantry
    ? [activePantry?.coords.lat, activePantry?.coords.long]
    : PHILIPPINES_LL;

  useEffect(() => {
    if (id && map) {
      if (activePantry) {
        map?.setView([activePantry?.coords.lat, activePantry?.coords.long], 20);
      }
    }
  }, [id, pantries, map]);

  if (!activePantry) return <></>;

  const { loc, sched, supplies, contact, desc, coords } = activePantry;

  let details = [];

  if (loc)
    details = [
      ...details,
      {
        id: "loc",
        icon: <FaLocationArrow />,
        value: (
          <a
            target="_blank"
            href={`http://maps.google.com/maps?q=${coords.lat},${coords.long}`}
          >
            {loc}
          </a>
        ),
      },
    ];

  if (sched)
    details = [
      ...details,

      {
        id: "sched",
        icon: <AiFillCalendar />,
        value: sched,
      },
    ];

  if (supplies)
    details = [
      ...details,
      {
        id: "supplies",
        icon: <MdLocalGroceryStore />,
        value: supplies,
      },
    ];

  if (contact.name || contact.phone)
    details = [
      ...details,
      {
        id: "contact",
        icon: <AiFillPhone />,
        value: `${contact.name} ${contact.phone && contact.phone ? "/" : ""} ${
          contact.phone
        }`,
      },
    ];

  if (desc.length)
    details = [
      ...details,
      {
        id: "details",
        icon: <FaStickyNote />,
        value: desc,
      },
    ];

  return (
    <>
      <div style={{ height: "50vh" }}>
        <MapContainer
          zoomControl={false}
          zoomAnimation
          style={{ height: "100%" }}
          center={zoomPos}
          zoom={activePantry ? 20 : 6}
          scrollWheelZoom={true}
        >
          <MapConsumer>
            {(m) => {
              map = m;
              return (
                <>
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {pantries.map((pantry) => {
                    const pos = [pantry.coords.lat, pantry.coords.long];
                    return (
                      <Marker
                        icon={LEAFLET_ICON}
                        key={pantry.id}
                        position={pos}
                        eventHandlers={{
                          click: (e) => {
                            push(`/map/${pantry.id}`);
                          },
                        }}
                      >
                        <Popup>{pantry.name}</Popup>
                      </Marker>
                    );
                  })}
                </>
              );
            }}
          </MapConsumer>
        </MapContainer>
      </div>
      <S.PantryContainer>
        <Container>
          <S.Action>
            <FavoriteBtn id={id} />
          </S.Action>
          <S.Info>
            <h1>{activePantry.name}</h1>
            {details.map((detail) => (
              <S.Details key={detail.id}>
                {detail.icon}
                <span>{detail.value}</span>
              </S.Details>
            ))}
            <br />
            <p>Want to update/edit this pantry?</p>
            <Button
              onClick={() => push("/edit-pantry")}
              text="Request a change"
            />
            <S.Comments>
              <FacebookProvider appId={FB_APP_ID}>
                <Comments width="100%" href={`${APP_URL}/#/map/${id}`} />
              </FacebookProvider>
            </S.Comments>
          </S.Info>
          <Footer />
        </Container>
      </S.PantryContainer>
    </>
  );
};

export default SinglePantry;
