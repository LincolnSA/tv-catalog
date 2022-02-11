import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

const TvItem = ({ data }) => {
  const navigation = useNavigation();
  const { name, brand, type_screen, price, url } = data;

  const navigateToTvDetails = () => {
    navigation.navigate("TvDetails", { data });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToTvDetails}>
      <Image style={styles.img} resizeMode="contain" source={{ uri: url }} />

      <View>
        <Text style={styles.h1} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.p} numberOfLines={1}>
          {brand}
        </Text>
        <Text style={styles.p} numberOfLines={1}>
          {type_screen}
        </Text>
        <Text style={styles.p} numberOfLines={1}>
          R$ {price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TvItem;
