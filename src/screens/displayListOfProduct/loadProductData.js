import LoadProductWithSort from "./action/loadProductWithSort";
import LoadProduct from "./action/loadProduct";

export const loadMoreData = (
  itemId,
  check,
  multiSliderValue,
  offset,
  dispatch,
  informations,
  setInformations,
  setOffset,
  setIsLoading,
  isLoading
) => {
  if (isLoading) return;

  setIsLoading(true);
  LoadProduct(
    itemId,
    check,
    multiSliderValue,
    offset + 50,
    dispatch,
    informations,
    setInformations,
    setOffset,
    setIsLoading,
    []
  )
    .then((response) => {
      if (response) {
        setInformations([...informations, ...response]);
        setOffset(offset + 50);
      } else console.log("NO RESPONSE");
    })
    .catch((error) => {
      console.log("error: ", error);
    })
    .finally(() => {
      setIsLoading(false);
    });
};

export const loadMoreDataBySort = (
  itemId,
  sort,
  totalNameBrand,
  multiSliderValue,
  localOffset,
  dispatch,
  setinformationsBySort,
  setLocalOffset,
  setIsLoading,
  isLoading
) => {
  if (isLoading && itemId !== 9) return;

  setIsLoading(true);
  LoadProductWithSort(
    itemId,
    sort,
    totalNameBrand,
    multiSliderValue,
    0,
    dispatch
  )
    .then((response) => {
      if (response) {
        setinformationsBySort([...response]);
        setLocalOffset(localOffset + 5);
        setIsLoading(false);
      } else console.log("NO RESPONSE");
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};
