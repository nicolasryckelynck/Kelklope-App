import * as authAction from "../../../redux/actions/authAction";

const GetBrandName = (
  name,
  id,
  selectedBrands,
  totalNameBrand,
  setSelectedBrands,
  setTotalNameBrand
) => {
  if (selectedBrands.includes(name)) {
    setSelectedBrands(selectedBrands.filter((n) => n !== name));
    setTotalNameBrand(totalNameBrand.filter((n) => n !== name));
  } else {
    setSelectedBrands([...selectedBrands, name]);
    setTotalNameBrand([...totalNameBrand, name]);
  }
};

export const GetBrands = (itemId, dispatch, setTmpBrands, setBrands) => {
  dispatch(authAction.GetAllBrands(itemId)).then((response) => {
    const arrayBrand = response.brands;
    setTmpBrands(arrayBrand);

    // enlevez les mots indésirables et créez un nouveau tableau avec des objets filtrés
    const filteredArrayBrand = arrayBrand
      .map((item) => {
        const name = item.name
          .replace(
            /E-liquides|E-Liquides|E-Liquide|E-liquide|Clearomiseurs|Clearomiseur|Résistances|Arôme|Concentrés|Pods/g,
            ""
          )
          .trim();
        return {
          name: name,
          id: item.id,
        };
      })
      .filter((item) => item.name !== "");
    setBrands(filteredArrayBrand);
  });
};

export default GetBrandName;
