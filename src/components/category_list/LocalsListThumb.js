import React from "react";
import { useSelector } from "react-redux";

import { FavouriteButton } from "./FavouriteButton";
import {
  CardContainer,
  Container,
  LocalLink,
  MainContainer,
  ThumbImage,
  ThumbText,
} from "../../library/category_list_ui/ThumbStyles";

export const LocalsListThumb = ({ _id, tagline, img_url, xsImageHeight }) => {
  const accessToken = useSelector((store) => store.users.user.accessToken);

  return (
    <MainContainer>
      <CardContainer>
        <LocalLink to={`/local/${_id}`}>
          <ThumbImage url={img_url} imgSize={"98%"} xsImageHeight={"170px"}/>
        </LocalLink>
        <Container>
          <ThumbText>{tagline}</ThumbText>
          {accessToken ? <FavouriteButton localId={_id} /> : null}
        </Container>
      </CardContainer>
    </MainContainer>
  );
};
