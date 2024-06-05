import * as authAction from "../../../redux/actions/authAction";

const getProductsBySort = (
  itemId,
  check,
  brand,
  multiSliderValue,
  offset,
  dispatch
) => {
  return new Promise((resolve, reject) => {
    dispatch(
      authAction.GetAllProducts(itemId, check, brand, multiSliderValue, offset)
    )
      .then((response) => resolve(response))
      .catch((error) => {
        reject(error);
      });
  });
};

export default getProductsBySort;
