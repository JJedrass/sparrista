import * as React from "react";
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import AppLoading from "expo-app-loading";

export function CoffeeChoiceScreen({ navigation, route }) {
  const currentUser = route.params.user;

  const coff1 = {
    id: 1,
    title: "Americano",
    coffeeDescription:
      "Prawdopodobnie kawa taka powstała we Włoszech w czasie II wojny światowej, kiedy to żołnierze z USA żądali dolewania wody do espresso, tak aby otrzymać kawę podobną do tej, jaką pili w domach",
    preparationDescription: "Krok 1: xxx \nKrok 2: xxx \nKrok 3: xxx",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/A_cup_of_Americano.JPG/179px-A_cup_of_Americano.JPG",
    preparationTime: 0,
    popularity: 0,
  };

  const coff2 = {
    id: 2,
    title: "Espresso",
    coffeeDescription:
      "Powstaje przez przez przepuszczenie 25-35 ml gorącej (90,5-96 °C) wody pod ciśnieniem 8,5-9,5 bara przez bardzo drobno zmielone i ubite ziarna kawowca",
    preparationDescription: "Krok 1: xxx \nKrok 2: xxx \nKrok 3: xxx",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/220px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg",
    preparationTime: 0,
    popularity: 0,
  };

  const coff3 = {
    id: 3,
    title: "Flat White",
    coffeeDescription:
      "W odróżnieniu od caffe latte jest zazwyczaj podawane w kubku lub dużej filiżance i ma na wierzchu mniej piany z mleka (która na caffè latte tworzy wyraźną osobną warstwę)",
    preparationDescription: "Krok 1: xxx \nKrok 2: xxx \nKrok 3: xxx",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flat_White%2C_New_Zealand.JPG/220px-Flat_White%2C_New_Zealand.JPG",
    preparationTime: 0,
    popularity: 0,
  };

  const coff4 = {
    id: 4,
    title: "Cappuccino",
    coffeeDescription:
      "Włoski napój kawowy z dodatkiem spienionego mleka (rzadziej z bitą śmietaną) i szczyptą sypkiej czekolady lub kakao dla ozdoby",
    preparationDescription: "Krok 1: xxx \nKrok 2: xxx \nKrok 3: xxx",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Cappuccino_as_being_served_at_Ebel_Caf%C3%A9_Prague.jpg/220px-Cappuccino_as_being_served_at_Ebel_Caf%C3%A9_Prague.jpg",
    preparationTime: 0,
    popularity: 0,
  };

  const coff5 = {
    id: 5,
    title: "Caffe Latte",
    coffeeDescription:
      "Wbrew nazwie, latte art (sztuka wykonywania rysunków i wzorów na powierzchni kawy), na tradycyjnej latte nie wykonuje się ozdób na piance",
    preparationDescription: "Krok 1: xxx \nKrok 2: xxx \nKrok 3: xxx",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Glass_of_Coffee_Latte_with_Pastry_%281%29.jpg/220px-Glass_of_Coffee_Latte_with_Pastry_%281%29.jpg",
    preparationTime: 0,
    popularity: 0,
  };

  if (typeof currentUser == "undefined") return <AppLoading />;
  return (
    <View>
      <ImageBackground
        source={require("../assets/Background.png")}
        resizeMode={"stretch"}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <View style={{ flex: 0.5 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 50, fontWeight: "bold" }}>
              WYBIERZ KAWĘ KTÓRĄ CHCESZ ZROBIĆ
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <View style={{ flex: 0.5 }} />
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CoffeeRecipeScreen", {
                    user: currentUser,
                    coffee: coff1,
                  })
                }
              >
                <Image
                  source={require("../assets/Americano.png")}
                  resizeMode={"stretch"}
                  style={{
                    width: 200,
                    height: 200,
                  }}
                ></Image>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CoffeeRecipeScreen", {
                    user: currentUser,
                    coffee: coff2,
                  })
                }
              >
                <Image
                  source={require("../assets/Espresso.png")}
                  resizeMode={"stretch"}
                  style={{
                    width: 200,
                    height: 200,
                  }}
                ></Image>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CoffeeRecipeScreen", {
                    user: currentUser,
                    coffee: coff3,
                  })
                }
              >
                <Image
                  source={require("../assets/FlatWhite.png")}
                  resizeMode={"stretch"}
                  style={{
                    width: 200,
                    height: 200,
                  }}
                ></Image>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CoffeeRecipeScreen", {
                    user: currentUser,
                    coffee: coff4,
                  })
                }
              >
                <Image
                  source={require("../assets/Cappuccino.png")}
                  resizeMode={"stretch"}
                  style={{
                    width: 200,
                    height: 200,
                  }}
                ></Image>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CoffeeRecipeScreen", {
                    user: currentUser,
                    coffee: coff5,
                  })
                }
              >
                <Image
                  source={require("../assets/CaffeLatte.png")}
                  resizeMode={"stretch"}
                  style={{
                    width: 200,
                    height: 200,
                  }}
                ></Image>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.5 }} />
          </View>
          <View style={{ flex: 0.5 }} />
        </View>
      </ImageBackground>
    </View>
  );
}
