import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

import { users } from "../reducers/users";
// import { updateUserFetch } from "../reducers/userFetch";

import {
  CardContainer,
  LocalLink,
  ThumbImage,
  ThumbText,
  Container,
  // ThumbIcon,
  FavouriteHeart,
} from "../library/ThumbStyles";

export const LocalsListThumb = ({ _id, tagline, img_url }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(useSelector((store) => store.users.user));
  const [favourites, setFavourites] = useState(
    useSelector((store) => store.users.favourites)
  );
  const [isFavourite, setIsFavourite] = useState(false);

  const favouritesArray = JSON.parse(favourites);

  useEffect(() => {
    //   setIsFavourite(true)
  }, []);

  

  const handleOnClick = () => {
    dispatch(users.actions.updateFavourites(_id))
    if (favouritesArray.includes(_id)) {
      setIsFavourite()    
      
    } else {
     
    }
  };

  return (
    <CardContainer>
      <LocalLink to={`/local/${_id}`}>
        <ThumbImage url={img_url} />
        {/* <ThumbIcon className="fas fa-chevron-circle-left"></ThumbIcon> */}
      </LocalLink>
      <Container>
        <ThumbText>{tagline}</ThumbText>
        <FavouriteHeart
        value={isFavourite}
          src={
            // favourites.includes(_id)
            isFavourite
              ? "../img/heart.png"
              : "../img/heart-empty.png"
          }
          onClick={handleOnClick}
        ></FavouriteHeart>
      </Container>
    </CardContainer>
  );
};
