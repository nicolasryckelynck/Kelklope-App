import {createDrawerNavigator} from "@react-navigation/drawer";
import BottomTabNavigator from "./bottomTabNavigator";
import AboutScreen from "../screens/AboutScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="Home"
      component={BottomTabNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Drawer.Screen
      name="Settings"
      component={AboutScreen}
      options={{
        headerShown: false,
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
