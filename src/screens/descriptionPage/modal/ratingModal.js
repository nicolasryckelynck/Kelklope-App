import React, {useCallback} from "react";
import {View, Modal, Alert, Pressable, Text} from "react-native";
import StarRating from "react-native-star-rating-widget";
import {styles} from "../style/middleContentStyle";

import {onGradeChange} from "../api/onGradeChange";

import {CustomToast} from "../../toast/customToast";

const MAX_STARS = 5;
const STAR_SIZE = 55;

const RatingModal = (props) => {
  const {
    modalVisible,
    setModalVisible,
    grade,
    setGrade,
    id,
    data,
    setAvgGrade,
    setTmpAvgGrade,
    avgGrade,
    navigation,
  } = props;

  let timeoutId = null;

  const handleRatingEnd = useCallback(
    (values) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (id) {
          setGrade(values);
          Alert.alert(
            `Êtes-vous sûr de mettre la note de ${grade} / 5 à ${data["titre"]} ?`,
            "",
            [
              {
                text: "Non",
                onPress: () => console.log("Cancel Pressed"),
                style: "Annuler",
              },
              {
                text: "Oui",
                onPress: () => {
                  onGradeChange(
                    grade,
                    id,
                    data,
                    setAvgGrade,
                    setTmpAvgGrade,
                    avgGrade
                  );
                  setModalVisible(!modalVisible);
                },
              },
            ]
          );
        } else {
          CustomToast({
            message: "Connectez-vous afin de déposer une note",
            backgroundColor: "#ff2c41",
          });
        }
      }, 1000);
    },
    [
      id,
      grade,
      data,
      setAvgGrade,
      setTmpAvgGrade,
      avgGrade,
      onGradeChange,
      setModalVisible,
      navigation,
    ]
  );

  const handleRequestClose = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [setModalVisible]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleRequestClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.pressableAbortText}
              onPress={handleRequestClose}
            >
              <Text style={styles.abortText}>Annuler</Text>
            </Pressable>
            <StarRating
              rating={grade}
              maxStars={MAX_STARS}
              starSize={STAR_SIZE}
              onChange={setGrade}
              onRatingEnd={handleRatingEnd}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RatingModal;
