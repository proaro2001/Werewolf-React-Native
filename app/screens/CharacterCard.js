import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import characters from "../../config/characters";

function CharacterCard({ name }) {
  const characterObj = findCharacterByName(name);
  // console.log(characterObj);

  if (!characterObj) {
    return <View style={styles.iconContainer} />;
  }

  return (
    <TouchableOpacity
      style={styles.iconContainer}
      onPress={() =>
        console.log("Character", characterObj.name, "Card is Pressed")
      }
    >
      <ImageBackground source={characterObj.image} style={styles.icon}>
        <Text style={styles.nameTag}>{characterObj.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

/**
 * Finds a character by name.
 * @param {string} name - The name of the character to find.
 * @returns {object|null} - The character object if found, or null if not found.
 */
function findCharacterByName(name) {
  for (let key in characters) {
    if (characters[key].name === name) {
      return characters[key];
    }
  }
  return null;
}

export default CharacterCard;

const styles = StyleSheet.create({
  iconContainer: {
    width: 80,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    margin: 10,
  },
  icon: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "center",
    // padding: 10,
  },
  nameTag: {
    backgroundColor: "yellow",
    padding: 2,
    borderRadius: 10,
    overflow: "hidden",
    fontSize: 15,
    fontWeight: "bold",
    width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    textAlign: "center",
  },
});
