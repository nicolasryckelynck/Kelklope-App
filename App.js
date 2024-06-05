import React from "react";
import {AppRegistry} from "react-native";
import {Provider} from "react-redux";

import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "./src/redux/store";

import AccountSetUp from "./src/screens/firstPage/accountSetUp";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AccountSetUp />
      </PersistGate>
    </Provider>
  );
}

AppRegistry.registerComponent("MyApp", () => App);
