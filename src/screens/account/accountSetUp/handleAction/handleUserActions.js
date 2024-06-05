import {CustomToast} from "../../../toast/customToast";
import * as authAction from "../../../../redux/actions/authAction";
import {Alert} from "react-native";

export const handleLogin = async (values, setModal, dispatch) => {
  try {
    dispatch(authAction.loginUser(values)).then((response) => {
      if (response.success) setModal(false);
      else Alert.alert("Identifiants incorrects. Veuillez réessayer.");
    });
  } catch (error) {
    CustomToast({message: "Error: " + error, backgroundColor: "#ff2c41"});
  }
};

export const handleModifyPassword = (
  values,
  password,
  id,
  firstname,
  lastname,
  email,
  dispatch,
  navigation
) => {
  if (
    values.actualpassword === password &&
    values.newPassword === values.newPasswordConfirmation
  ) {
    dispatch(
      authAction.updateUserPassword(id, firstname, lastname, email, values)
    ).then((result) => {
      if (result.success) {
        navigation.navigate("HomeScreen");
        CustomToast({
          message: "Votre mot de passe a été modifié avec succès",
          backgroundColor: "#03AC13",
        });
      } else
        CustomToast({
          message: "Une erreur est survenue, veuillez réessayer",
          backgroundColor: "#ff2c41",
        });
    });
  } else {
    CustomToast({
      message:
        "Veuillez renseigner votre ancien mot de passe correctement et vérifier que les deux nouveaux mots de passe sont identiques",
    });
  }
};

export const handleUpdateInfoUser = (values, id, email, password, dispatch) => {
  dispatch(authAction.updateUser(values, id, email, password))
    .then(async (result) => {
      if (result.success) {
        try {
          CustomToast({
            message: "Mise à jours de vos informations effectuées",
            backgroundColor: "#03AC13",
          });
        } catch {
          (error) => console.log("Error Update: ", error);
        }
      } else
        CustomToast({
          message: "Mise à jours impossible. Vérifiez vos informations.",
          backgroundColor: "#ff2c41",
        });
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const handleRegisterUser = (values, navigation, dispatch) => {
  dispatch(authAction.registerUser(values))
    .then(async (result) => {
      if (result.success) {
        try {
          CustomToast({
            message:
              "Votre compte à été créé ! N'oubliez pas d'activer vos notifications afin de ne rien rater !",
            backgroundColor: "#03AC13",
          });
          navigation.navigate("MyAccount");
        } catch {
          (error) => console.log(error);
        }
      } else
        CustomToast({
          message: result.message + ". Veuillez réessayer.",
          backgroundColor: "#ff2c41",
        });
    })
    .catch((error) => console.log("Erreur : ", error));
};

export const deleteAccount = (id, navigation, dispatch) => {
  Alert.alert(
    "Confirmation",
    "Êtes-vous sûr de vouloir supprimer votre compte Kelklope ?",
    [
      {
        text: "Non",
        style: "cancel",
      },
      {
        text: "Oui",
        onPress: () => {
          dispatch(authAction.deleteAccount(id)).then((result) => {
            if (result.success) {
              CustomToast({
                message: "Votre compte a été supprimé",
                backgroundColor: "#03AC13",
              });
              navigation.navigate("MyAccount");
            } else
              CustomToast({
                message: "Une erreur est survenue, veuillez réessayer",
                backgroundColor: "#ff2c41",
              });
          });
        },
      },
    ]
  );
};
