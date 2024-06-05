import React, {useState, useEffect, useCallback} from "react";
import {Switch, View, Text, Dimensions, TouchableOpacity} from "react-native";
import {useDispatch} from "react-redux";

import {styles} from "./styles/parametersStyle";

import {checkNotifications} from "./notification/notificationsHandler";
import {registerForPushNotificationsAsync} from "../notifications";

import {deleteAccount} from "./accountSetUp/handleAction/handleUserActions";

import Header from "./header/headerAccount";

const {height, width} = Dimensions.get("window");

const SwitchItem = ({
  title,
  description,
  value,
  onValueChange,
  disabled,
  style,
}) => (
  <View style={[styles.activeAlertPriceView, style]}>
    <View style={[styles.flexDirectionColumn, {left: 10}]}>
      <Text style={styles.alertPriceTitle}>{title}</Text>
      <Text style={styles.alertPriceDescription}>{description}</Text>
    </View>
    <Switch
      style={{left: width * 0.21, width: "10%"}}
      trackColor={{
        false: "#767577",
        true: "#ff7c00",
      }}
      thumbColor={value ? "#fff" : "#f4f3f4"}
      ios_backgroundColor="#F0F0F0"
      onValueChange={onValueChange}
      value={value}
      disabled={disabled}
    />
  </View>
);

const Parameters = ({route, navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isAlertPriceActive, setIsAlertActive] = useState(true);
  const [evolutionPriceActive, setEvolutionPriceActive] = useState(true);
  const [reductionAlert, setReductionAlert] = useState(false);

  const {decodedInformations} = route.params;

  const dispatch = useDispatch();

  const toggleSwitch = useCallback(async () => {
    if (isActive) {
      setIsEnabled(!isEnabled);
    } else {
      await registerForPushNotificationsAsync();
    }
  }, [isActive, isEnabled]);

  useEffect(() => {
    if (isActive) {
      if (isEnabled) setIsEnabled(false);
      else setIsEnabled(true);
    }
  }, [isActive]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const {isActive, token} = await checkNotifications();
      setIsActive(isActive);
    };
    fetchNotifications();
  }, []);

  const toggleSwitchAlertActive = () =>
    setIsAlertActive((previousState) => !previousState);
  const toggleSwitchEvolutionPrice = () =>
    setEvolutionPriceActive((previousState) => !previousState);
  const toggleSwitchReductionAlert = () =>
    setReductionAlert((previousState) => !previousState);

  return (
    <View>
      <Header navigation={navigation} title="Paramètres" />
      <View style={styles.body}>
        <Text style={styles.pushNotificationsTitle}>Notifications Push</Text>
        <View style={styles.activateNotificationsView}>
          <Text style={styles.activateNotificationsText}>
            Autoriser les notifications
          </Text>
          <Switch
            style={styles.switchActiveNotfications}
            trackColor={{
              false: "#767577",
              true: "#ff7c00",
            }}
            thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#F0F0F0"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{opacity: isEnabled ? 1 : 0.3}}>
          <SwitchItem
            title="Alerte prix"
            description="Notifications sur vos alertes prix"
            value={isAlertPriceActive}
            onValueChange={toggleSwitchAlertActive}
            disabled={!isEnabled}
            style={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
          />
          <SwitchItem
            title="Evolutions de prix"
            description="Notifications sur la baisse de prix des produits regardés"
            value={evolutionPriceActive}
            onValueChange={toggleSwitchEvolutionPrice}
            disabled={!isEnabled}
            style={{height: height * 0.09}}
          />
          <SwitchItem
            title="Réductions"
            description="Notifications sur les soldes et promotions"
            value={reductionAlert}
            onValueChange={toggleSwitchReductionAlert}
            disabled={!isEnabled}
          />
        </View>
        {decodedInformations && (
          <TouchableOpacity
            style={styles.deleteAccount}
            onPress={() => {
              deleteAccount(decodedInformations.id, navigation, dispatch);
            }}
          >
            <Text
              style={[
                styles.textButton,
                {paddingVertical: 8, color: "#CB0000"},
              ]}
            >
              Supprimer le compte
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Parameters;
