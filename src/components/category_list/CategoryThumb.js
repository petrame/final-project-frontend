import React from "react";
import {
  CategoryLink,
  ThumbImage,
  ThumbText,
  ThumbIcon,
  ThumbTextBox,
} from "../../library/category_list_ui/ThumbStyles";

export const CategoryThumb = ({ name, display_name, img_url, xsImageHeight }) => {
  return (
    <CategoryLink to={`/locals/${name}`}>
      <ThumbImage url={img_url} imgSize={"cover"} xsImageHeight={"250px"}>
        <ThumbTextBox>
          <ThumbText>{display_name}</ThumbText>
          <ThumbIcon className="fas fa-chevron-circle-left"></ThumbIcon>
        </ThumbTextBox>
      </ThumbImage>
    </CategoryLink>
  );
};
