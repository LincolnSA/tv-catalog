import { useRoute } from "@react-navigation/native";
import { Text, ScrollView } from "react-native";

import styles from "./styles";

const TypeDetails = () => {
  const route = useRoute();
  const { acronyms, description } = route.params.data;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.h2}>Sigla:</Text>
      <Text style={styles.p}>{acronyms}</Text>

      <Text style={styles.h2}>Descrição:</Text>
      <Text style={styles.p}>{description}</Text>
    </ScrollView>
  );
};

export default TypeDetails;
