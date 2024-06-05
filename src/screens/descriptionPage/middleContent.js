import React, {useEffect, useState} from "react";
import {View, Image, TouchableOpacity, Text} from "react-native";
import StarRating from "react-native-star-rating-widget";

import RatingModal from "./modal/ratingModal";

import {styles} from "./style/middleContentStyle";

const DescriptionButton = ({toggleText}) => {
  return (
    <TouchableOpacity onPress={toggleText}>
      <Image
        source={require("../../../assets/images/lister.jpg")}
        style={styles.descriptionImage}
      />
      <Text style={styles.descriptionText}>Descriptif produit</Text>
    </TouchableOpacity>
  );
};

const RatingButton = ({avgGrade, setModalVisible, modalVisible}) => {
  return (
    <TouchableOpacity
      style={styles.starRating}
      onPress={() => setModalVisible(!modalVisible)}
    >
      <View style={{display: "flex", flexDirection: "column"}}>
        <StarRating
          rating={avgGrade["average_rating"]}
          maxStars={5}
          starSize={25}
          onChange={() => {
            setModalVisible(!modalVisible);
          }}
          starStyle={{marginLeft: -7}}
        />
        {avgGrade["rating_count"] > 0 ? (
          <Text style={styles.gradeText}>
            {Math.floor(avgGrade["average_rating"] * 10) / 10} / 5 (
            {avgGrade["rating_count"]} votes)
          </Text>
        ) : (
          <Text style={styles.noneGrade}>Aucun avis</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const MiddleContent = ({
  toggleText,
  avgGrade,
  id,
  setAvgGrade,
  data,
  navigation,
  setTmpAvgGrade,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [grade, setGrade] = useState(avgGrade["average_rating"]);

  useEffect(() => {
    setGrade(avgGrade["average_rating"]);
  }, [avgGrade]);

  return (
    <View style={styles.middleView}>
      <DescriptionButton toggleText={toggleText} />
      <View style={styles.ovaleMiddle}></View>
      <RatingModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        grade={grade}
        setGrade={setGrade}
        id={id}
        data={data}
        setAvgGrade={setAvgGrade}
        setTmpAvgGrade={setTmpAvgGrade}
        avgGrade={avgGrade}
        navigation={navigation}
      />
      <RatingButton
        avgGrade={avgGrade}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
    </View>
  );
};

export default MiddleContent;
