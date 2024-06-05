import LoadProductWithSort from "./action/loadProductWithSort";
import LoadProduct from "./action/loadProduct";

export const loadMoreData = (
  isLoading,
  itemId,
  check,
  multiSliderValue,
  offset,
  dispatch,
  setInformations,
  setIsLoading,
  informations,
  setOffset
) => {
  if (isLoading) {
    return;
  }

  setIsLoading(true);
  return LoadProduct(
    itemId,
    check,
    multiSliderValue,
    offset,
    dispatch,
    informations,
    setInformations,
    setIsLoading,
    []
  )
    .then((response) => {
      if (response) {
      } else {
        console.log("NO RESPONSE");
      }
    })
    .catch((error) => {
      console.log("error: ", error);
      setIsLoading(false);
    });
};
export const loadMoreDataBySort = (
  isLoading,
  itemId,
  sort,
  totalNameBrand,
  multiSliderValue,
  dispatch,
  setInformationsBySort,
  offset,
  setIsLoading,
  setOffset,
  informationsBySort
) => {
  if (isLoading && itemId !== 9) {
    return;
  }

  setIsLoading(true);
  return LoadProductWithSort(
    itemId,
    sort,
    totalNameBrand,
    multiSliderValue,
    offset,
    dispatch
  )
    .then((response) => {
      if (response) {
        setInformationsBySort([
          ...informationsBySort,
          ...response.filter(
            (item) =>
              !informationsBySort.some(
                (existingItem) => existingItem.id === item.id
              )
          ),
        ]);
        setIsLoading(false);
      } else {
        console.log("NO RESPONSE");
      }
    })
    .catch((error) => {
      console.log("error: ", error);
      setIsLoading(false);
    });
};
