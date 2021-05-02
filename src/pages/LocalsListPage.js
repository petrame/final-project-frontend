import React from "react";
import { useParams } from "react-router-dom";
import uniqid from "uniqid";

import { useLocalsCategoryList } from "../hooks/locals/localsFetch";
import { LocalsListThumb } from "../components/category_list/LocalsListThumb";
import { LocalsContainer } from "../library/category_list_ui/LocalListPageStyles";
import { LottieLoader as Loader } from "../library/global_ui/LottieLoader";

export const LocalsListPage = () => {
  const { category } = useParams();

  const { data, isLoading, isError, isSuccess } = useLocalsCategoryList(category)
   
  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div>{isError.message}</div>;
  }

  console.log(data)

  return (
    <>
      {isSuccess ? (
        data.map((local) => (
        
    <LocalsContainer>
          <LocalsListThumb key={uniqid()} {...local} />
    </LocalsContainer>
        ))
      ) : null}
      </>
    )
};
