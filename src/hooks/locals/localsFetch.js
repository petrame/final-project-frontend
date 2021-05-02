import { useQuery } from "react-query";
import { LOCAL_URL, LOCALS_URL, CATEGORIES_URL } from "../../urls";

const getCategoriesList = async () => {
  const result = await fetch(CATEGORIES_URL).then((res) => res.json());
  return result;
};

export const useCategoriesList = () => {
  return useQuery("categories", () => getCategoriesList());
};

const getLocalsCategoryList = async (category) => {
  const result = await fetch(`${LOCALS_URL}/${category}`).then((res) =>
    res.json()
  );
  return result;
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
  const result = await fetch(`${LOCAL_URL}/${slug}`).then((res) => res.json());
  return result;
};

export const useLocal = (slug) => {
  return useQuery(["single_local", slug], () => getLocal(slug), {
    enabled: !!slug,
  });
};
