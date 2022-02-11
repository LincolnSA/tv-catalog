import { View, ActivityIndicator } from "react-native";

import styles from "./styles";

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

export default LoadingIndicator;
