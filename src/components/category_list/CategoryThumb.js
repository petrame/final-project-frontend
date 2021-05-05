import React from "react";
import {
  CategoryLink,
  CategoryText,
  ThumbImage,
  ThumbIcon,
  ThumbTextBox,
} from "../../library/category_list_ui/ThumbStyles";

export const CategoryThumb = ({ name, display_name, img_url }) => {
  return (
    <CategoryLink to={`/locals/${name}`}>
      <ThumbImage url={img_url} imgSize={"cover"} xsImageHeight={"250px"} imageWidth={"100%"}>
        <ThumbTextBox>
          <CategoryText>{display_name}</CategoryText>
          <ThumbIcon className="fas fa-chevron-circle-left"></ThumbIcon>
        </ThumbTextBox>
      </ThumbImage>
    </CategoryLink>
  );
};
