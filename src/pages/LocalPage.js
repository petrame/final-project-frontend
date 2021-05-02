import React from "react";
import { useParams } from "react-router-dom";
import { useLocal } from "../hooks/locals/localsFetch";
import { LocalCard } from "../components/single_local/LocalCard";
import { Map } from "../components/single_local/Map";
import { LottieLoader as Loader } from "../library/global_ui/LottieLoader";
import {
  SectionContainer,
  SectionHeader,
  SectionTagline,
} from "../library/single_local_ui/LocalPageStyles";

export const LocalPage = () => {
  const { id } = useParams();

  const { data, status, error } = useLocal(id);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "error") {
    return <div>{error.message}</div>;
  }

  return (
    <SectionContainer>
      {status === "success" ? (
        <>
          <SectionHeader></SectionHeader>
          <SectionTagline>Din lokala företagare i Torslanda</SectionTagline>
          <Map {...data} />
          <LocalCard {...data} />
        </>
      ) : null}
    </SectionContainer>
  );
};
