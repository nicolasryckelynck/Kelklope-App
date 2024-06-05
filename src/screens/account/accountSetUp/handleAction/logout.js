import {removeUser} from "../../../../redux/actions/authAction";

export const logout = (dispatch, navigation) => {
  dispatch(removeUser());
  navigation.navigate("MyAccount", {setCheckToken: true});
};
