import {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalViewFilter: {
    margin: 20,
    backgroundColor: "#F0F0F0",
    width: "85%",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: "110%",
    width: "110%",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  priceInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  AndWord: {
    fontSize: 18,
    top: "2%",
    left: "10%",
    color: "grey",
  },
  inputText1: {
    left: "70%",
    width: "30%",
    height: "130%",
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 7,
    marginRight: 40,
    textAlign: "center",
  },
  inputText2: {
    right: "70%",
    width: "30%",
    height: "130%",
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 7,
    marginLeft: 50,
    textAlign: "center",
  },
  borderFilter: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    backgroundColor: "#E4E4E4",
    textAlign: "center",
    height: "90%",
    width: "40%",
  },
  card: {
    height: 30,
    justifyContent: "center",
    backgroundColor: "#E4E4E4",
    margin: 5,
    borderRadius: 10,
  },

  text: {
    paddingRight: "2%",
    textAlign: "center",
    width: "100%",
    fontSize: 12,
    color: "black",
  },
  applicate: {
    left: "33%",
    bottom: height * 0.05,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ff7b0d",
    backgroundColor: "#ff7b0d",
    width: width * 0.3,
    height: height * 0.05,
  },
  moreButton: {
    opacity: 1,
  },
  lessButton: {
    opacity: 0,
  },
  goBackArrow: {
    height: height * 0.05,
    width: width * 0.1,
  },
  animatedView: {
    zIndex: 15,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#F0F0F0",
    position: "absolute",
  },
  filterButton: {
    zIndex: 10,
    left: width * 0.07,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: width * 0.22,
    height: height * 0.035,
    bottom: 4,
  },
  sortButton: {
    zIndex: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    left: width * 0.48,
    width: width * 0.2,
    height: height * 0.035,
    bottom: 4,
  },
  filterText: {
    right: width * 0.04,
    textAlign: "center",
    paddingVertical: 5,
    color: "#436B92",
  },
  filterLogo: {
    left: width * 0.15,
    bottom: height * 0.025,
  },
  sortText: {
    color: "#436B92",
    padding: 6,
  },
  sortLogo: {
    left: width * 0.14,
    bottom: height * 0.029,
  },
  deleteBrands: {
    height: "28%",
    borderRadius: 10,
    borderColor: "#436B92",
    borderWidth: 1,
    backgroundColor: "#436B92",
    margin: 2,
    left: 35,
    display: "flex",
    justifyContent: "center",
  },
  sortContainer: {
    flexDirection: "column",
    left: 35,
    width: width * 1.4,
  },
  touchableSort: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#E4E4E4",
    textAlign: "center",
    width: "55%",
    margin: 10,
    left: width * 0.2,
    height: height * 0.05,
  },
  sortLabel: {
    textAlign: "center",
    paddingVertical: "4%",
    fontFamily: "ManropeRegular",
  },
  sortButtonInModal: {
    top: height * 0.025,
    width: width * 0.22,
    height: height * 0.03,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  viewSelectedBrands: {
    right: width * 0.45,
    height: height * 0.1,
    zIndex: 10,
    top: 35,
  },
  elementSelectedBrands: {
    color: "#fff",
    paddingHorizontal: 10,
  },
  filterView: {
    width: "110%",
    top: height * 0.06,
  },
  headerFilterModal: {
    display: "flex",
    flexDirection: "row",
    left: 25,
  },
  filterTitle: {
    fontSize: 18,
    top: "3%",
    fontWeight: "bold",
  },
  cptSelected: {
    top: "2%",
    left: "25%",
    color: "#ff7b0d",
    fontSize: 22,
  },
  titlePrice: {
    fontSize: 22,
    fontFamily: "ManropeBold",
    left: width * 0.07,
    marginVertical: 20,
  },
  multiSliderView: {
    display: "flex",
    flexDirection: "row",
    top: "5%",
    justifyContent: "space-around",
  },
  filterOptionsText: {
    bottom: 25,
    fontSize: 18,
    fontFamily: "ManropeBold",
    left: 30,
  },
  sortInFilterModalView: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    left: 20,
    width: "90%",
  },
  touchableSortInFilter: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  selectLabelText: {
    textAlign: "center",
    paddingVertical: "2%",
    fontFamily: "ManropeRegular",
  },
  seeLessButton: {
    width: width * 0.12,
    left: width * 0.35,
    top: height * 0.02,
  },
  seeLessText: {
    fontSize: 15,
    color: "#ff7b0d",
    textAlign: "center",
    paddingVertical: 6,
    fontFamily: "ManropeRegular",
  },
  totalBrandItemId: {
    height: 200,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  seeMoreButton: {bottom: height * 0.15, left: width * 0.29},
  seeMoreText: {
    fontSize: 15,
    color: "#ff7b0d",
    width: 100,
    textAlign: "center",
    paddingVertical: 6,
    fontFamily: "ManropeRegular",
  },
  applicateFilter: {
    textAlign: "center",
    color: "#fff",
    paddingVertical: 8,
    fontSize: 18,
  },
  viewBrand: {
    display: "flex",
    flexDirection: "row",
  },
  brandText: {
    fontSize: 18,
    fontFamily: "ManropeBold",
    left: "15%",
    marginBottom: 10,
  },
  allBrands: {
    left: "0.2%",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "90%",
  },
  elementBrandName: {
    padding: 5,
    fontFamily: "ManropeRegular",
  },
  bestBrandNameText: {
    fontFamily: "ManropeRegular",
  },
});