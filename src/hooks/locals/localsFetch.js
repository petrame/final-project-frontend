import { useQuery } from "react-query";
import { LOCAL_URL, LOCALS_URL, CATEGORIES_URL } from "../../urls";

const getCategoriesList = async () => {
  try {
    const response = await fetch(CATEGORIES_URL);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const useCategoriesList = () => {
  return useQuery("categories", () => getCategoriesList());
};

const getLocalsCategoryList = async (category) => {
  try {
    const url = `${LOCALS_URL}/${category}`;
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const useLocalsCategoryList = (localCategory) => {
  return useQuery(
    ["localslist", localCategory],
    () => getLocalsCategoryList(localCategory),
    {
      enabled: !!localCategory,
    }
  );
};

const getLocal = async (slug) => {
  try {
    const url = `${LOCAL_URL}/${slug}`;
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const useLocal = (slug) => {
  return useQuery(["single_local", slug], () => getLocal(slug), {
    enabled: !!slug,
  });
};
