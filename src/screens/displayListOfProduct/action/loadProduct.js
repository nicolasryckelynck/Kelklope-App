import * as authAction from "../../../redux/actions/authAction";

const GetProducts = (
  itemId,
  check,
  multiSliderValue,
  offset,
  dispatch,
  informations,
  setInformations,
  setIsLoading,
  brand
) => {
  return new Promise((resolve, reject) => {
    dispatch(
      authAction.GetAllProducts(itemId, check, [], multiSliderValue, offset)
    ).then((response) => {
      const updatedList = [...informations];

      const newArray = response.reduce((acc, item) => {
        // Vérifie si l'élément existe déjà dans la liste en fonction du titre
        if (!informations.find((info) => info.id === item.id)) {
          acc.push(item);
        }
        return acc;
      }, []);

      if (newArray.length > 0) {
        setInformations([...updatedList, ...newArray]);
      }
      setIsLoading(false);
      resolve(newArray);
    });
  });
};

export default GetProducts;
