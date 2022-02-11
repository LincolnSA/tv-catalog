import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const TypeItem = ({ data }) => {
  const navigation = useNavigation();
  const { acronyms } = data;

  const navigateToTypeDetails = () => {
    navigation.navigate("TypeDetails", { data });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToTypeDetails}>
      <Text style={styles.h1}>{acronyms}</Text>
    </TouchableOpacity>
  );
};

export default TypeItem;
