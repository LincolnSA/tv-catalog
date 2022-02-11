import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Tecnologias e valores que você precisa saber sobre os televisores
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <MaterialIcons name="keyboard-arrow-right" size={48} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
