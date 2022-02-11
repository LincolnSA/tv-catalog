import { useState, useEffect } from "react";
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
  TextInput,
  Modal,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

// icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// components
import TypeItem from "../../components/TypeItem";
import TvItem from "../../components/TvItem";
import LoadingIndicator from "../../components/LoadingIndicator";

// api
import api from "../../services/api";

// styles
import styles from "./styles";

// utils
import compareValues from "../../utils/compareValues";
import removeMutipleValues from "../../utils/removeMultipleValues";

const Home = () => {
  const [types, setTypes] = useState([]);
  const [tvs, setTvs] = useState([]);

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);

  const [typeScreenCollection, setTypeScreenCollection] = useState([]);
  const [brandCollection, setBrandCollection] = useState([]);
  const [priceCollection, setPriceCollection] = useState([]);
  const [selectedTypeScreen, setSelectedTypeScreen] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  //loading API data
  useEffect(() => {
    const loadingApiData = async () => {
      try {
        const { data: responseTypes } = await api.get("/types");
        const { data: responseTvs } = await api.get("/tvs");

        setTypes(responseTypes);
        setTvs(responseTvs);
        setList(responseTvs);

        setTypeScreenCollection(
          removeMutipleValues(responseTvs.map((tv) => tv.type_screen))
        );
        setBrandCollection(
          removeMutipleValues(responseTvs.map((tv) => tv.brand))
        );
        setPriceCollection(
          removeMutipleValues(responseTvs.map((tv) => tv.price.toString()))
        );

        setLoading(false);
      } catch (error) {
        Alert.alert("Deu algum erro.");
      }
    };

    loadingApiData();
    setInput("");
  }, []);

  // search by input
  useEffect(() => {
    if (input === "") {
      setList([...tvs]);
    } else {
      setList(
        tvs.filter(
          ({ name, brand, type_screen, price }) =>
            compareValues(name, input) ||
            compareValues(brand, input) ||
            compareValues(type_screen, input) ||
            compareValues(price, input)
        )
      );
    }
  }, [input]);

  // Action cancel modal
  const handleCancelModal = () => {
    setSelectedTypeScreen("");
    setSelectedBrand("");
    setSelectedPrice("");
    setList([...tvs]);
    setModalVisible(!modalVisible);
  };

  // Action filter modal
  const handleFilterModal = () => {
    if (
      selectedTypeScreen === "" &&
      selectedBrand === "" &&
      selectedPrice === ""
    ) {
      setList([...tvs]);
      setModalVisible(!modalVisible);
    } else {
      setList(
        tvs.filter(
          ({ brand, type_screen, price }) =>
            compareValues(brand, selectedBrand) &&
            compareValues(type_screen, selectedTypeScreen) &&
            compareValues(price, selectedPrice)
        )
      );
      setModalVisible(!modalVisible);
    }
  };

  // loading data
  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Saiba mais</Text>

      <Text style={styles.h2}>Tipos de tecnologias</Text>

      {/* list of types */}
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{ paddingLeft: 24, marginBottom: 16 }}
        >
          {types.map((type, index) => (
            <TypeItem data={type} key={index} />
          ))}
        </ScrollView>
      </View>

      {/* search and filter */}
      <Text style={styles.h2}>Televisores</Text>

      <View style={styles.filterContainer}>
        <View style={styles.filterWrapper}>
          <MaterialIcons name="search" size={28} color="#ccc" />
          <TextInput
            style={styles.filterInput}
            value={input}
            onChangeText={(value) => setInput(value)}
            placeholder="Pesquisar..."
            placeholderTextColor="#ccc"
          />
        </View>

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <MaterialCommunityIcons
            name={
              selectedTypeScreen !== "" ||
              selectedBrand !== "" ||
              selectedPrice !== ""
                ? "filter"
                : "filter-outline"
            }
            size={28}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      {/* list of tvs */}
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TvItem data={item} />}
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 24 }}
      />

      {/* modal filter */}
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={handleCancelModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.wrapper}>
            <Text style={styles.h1Modal}>Filtrar</Text>

            <Text style={styles.h2Modal}>Tipo de tecnologia</Text>
            <Picker
              selectedValue={selectedTypeScreen}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedTypeScreen(itemValue)
              }
            >
              <Picker.Item label="Selecionar" value="" />
              {typeScreenCollection.map((e, index) => (
                <Picker.Item label={e} value={e} key={index} />
              ))}
            </Picker>

            <Text style={styles.h2Modal}>Marca</Text>
            <Picker
              selectedValue={selectedBrand}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedBrand(itemValue)
              }
            >
              <Picker.Item label="Selecionar" value="" />

              {brandCollection.map((e, index) => (
                <Picker.Item label={e} value={e} key={index} />
              ))}
            </Picker>

            <Text style={styles.h2Modal}>Preço</Text>
            <Picker
              selectedValue={selectedPrice}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedPrice(itemValue)
              }
            >
              <Picker.Item label="Selecionar" value="" />
              {priceCollection.map((e, index) => (
                <Picker.Item label={e} value={e} key={index} />
              ))}
            </Picker>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleCancelModal}
              style={{
                ...styles.button,
                backgroundColor: "#ccc",
                marginRight: 8,
              }}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFilterModal} style={styles.button}>
              <Text style={styles.buttonText}>Filtrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Home;
