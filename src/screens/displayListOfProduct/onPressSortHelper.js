import {loadMoreData, loadMoreDataBySort} from "./productHelper";

export const getSortValue = (trie, selectedBrands) => {
  if (trie > 0) {
    return selectedBrands.length > 0 ? trie : trie + 5;
  } else {
    return selectedBrands.length > 0 ? 1 : undefined;
  }
};

export const onPressSortButton = (
  trie,
  selectedBrands,
  itemId,
  search,
  totalNameBrand,
  multiSliderValue,
  isLoading,
  check,
  offset,
  dispatch,
  setInformations,
  setinformationsBySort,
  setLocalOffset,
  setIsLoading,
  setCheckSort,
  informations,
  setOffset,
  informationsBySort
) => {
  const sort = getSortValue(trie, selectedBrands);
  const data = itemId === 9 ? search : totalNameBrand;

  if (sort) {
    loadMoreDataBySort(
      isLoading,
      itemId,
      sort,
      data,
      multiSliderValue,
      dispatch,
      setinformationsBySort,
      offset,
      setIsLoading,
      setOffset,
      informationsBySort
    );
    setCheckSort(true);
    setIsLoading(false);
  } else {
    loadMoreData(
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
    );
    setIsLoading(false);
  }
};
