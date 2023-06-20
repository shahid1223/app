const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Onbording from "./screens/Onbording";
import OrderAccepted from "./screens/OrderAccepted";
import Search from "./screens/Search";
import Checkout from "./screens/Checkout";
import Error1 from "./screens/Error1";
import Account from "./screens/Account";
import Favorites from "./screens/Favorites";
import MyCart from "./screens/MyCart";
import Filters from "./screens/Filters";
import StatusBar1 from "./screens/StatusBar1";
import Beverages from "./screens/Beverages";
import Explore from "./screens/Explore";
import ProductDetail from "./screens/ProductDetail";
import Card from "./screens/Card";
import Button1 from "./screens/Button1";
import AddToCarButton from "./screens/AddToCarButton";
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import SelectLocation from "./screens/SelectLocation";
import Verification from "./screens/Verification";
import Number1 from "./screens/Number1";
import SingIn from "./screens/SingIn";
import HomeScreen from "./screens/HomeScreen";
import SplashScreen from "./screens/SplashScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Montserrat_medium: require("./assets/fonts/Montserrat_medium.ttf"),
    "Gilroy-Bold_regular": require("./assets/fonts/Gilroy-Bold_regular.ttf"),
    HKGrotesk_regular: require("./assets/fonts/HKGrotesk_regular.ttf"),
    HKGrotesk_bold: require("./assets/fonts/HKGrotesk_bold.ttf"),
    "Gilroy-Regular_regular": require("./assets/fonts/Gilroy-Regular_regular.ttf"),
    Aclonica_regular: require("./assets/fonts/Aclonica_regular.ttf"),
    "Airbnb Cereal App_medium": require("./assets/fonts/Airbnb_Cereal_App_medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Onbording"
              component={Onbording}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrderAccepted"
              component={OrderAccepted}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Error"
              component={Error1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Account"
              component={Account}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Favorites"
              component={Favorites}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyCart"
              component={MyCart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Filters"
              component={Filters}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StatusBar"
              component={StatusBar1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Beverages"
              component={Beverages}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Explore"
              component={Explore}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Card"
              component={Card}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Button"
              component={Button1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddToCarButton"
              component={AddToCarButton}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectLocation"
              component={SelectLocation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Verification"
              component={Verification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Number"
              component={Number1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SingIn"
              component={SingIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
