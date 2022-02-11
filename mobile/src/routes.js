import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Home from "./pages/Home";
import TvDetails from "./pages/TvDetails";
import TypeDetails from "./pages/TypeDetails";
import Welcome from "./pages/Welcome";

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="TvDetails"
        component={TvDetails}
        options={{
          title: "Detalhes",
          headerTitleAlign: "center",
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="TypeDetails"
        component={TypeDetails}
        options={{
          title: "Sobre",
          headerTitleAlign: "center",
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
