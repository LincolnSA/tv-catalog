import { useRoute } from "@react-navigation/native";
import { Text, Image, ScrollView } from "react-native";

import styles from "./styles";

const TvDetails = () => {
  const route = useRoute();
  const { url, name, brand, type_screen, inches, price, description } =
    route.params.data;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
        style={styles.img}
        resizeMode="contain"
        source={{
          uri: url,
        }}
      />

      <Text style={styles.h2}>Nome:</Text>
      <Text style={styles.p}>{name}</Text>

      <Text style={styles.h2}>Marca:</Text>
      <Text style={styles.p}>{brand}</Text>

      <Text style={styles.h2}>Tipo de tela:</Text>
      <Text style={styles.p}>{type_screen}</Text>

      <Text style={styles.h2}>Polegadas:</Text>
      <Text style={styles.p}>{inches}</Text>

      <Text style={styles.h2}>Preço:</Text>
      <Text style={styles.p}>R$ {price}</Text>

      <Text style={styles.h2}>Descrição:</Text>
      <Text style={styles.p}>{description}</Text>
    </ScrollView>
  );
};

export default TvDetails;
