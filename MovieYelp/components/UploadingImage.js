import React, { useState } from "react";
import { View, Button, Image, StyleSheet } from "react-native";

import { launchImageLibrary } from "react-native-image-picker";
import Parse from "parse/react-native.js";

const UploadImage = () => {
  const [image, setImage] = useState(null);

  async function upload() {

    const { base64, fileName } = image;
    const parseFile = new Parse.File(fileName, { base64 });
    try {
      const responseFile = await parseFile.save();
      const Gallery = Parse.Object.extend("Gallery");
      const gallery = new Gallery();
      gallery.set("picture", responseFile);

      await gallery.save();
      Alert.alert("The file has been saved to Back4app.");
    } catch (error) {
      console.log(
        "The file either could not be read, or could not be saved to Back4app."
      );
    }
  }

  function pickImage() {
    launchImageLibrary(
      {
        mediaType: "photo",
        includeBase64: true,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        setImage(response);
      }
    );
  }

  return (
    <View>
      <Button
        onPress={pickImage}
        title="Pick an image from gallery"
        color="#841584"
      />
      {image && (
        <Image source={{ uri: image.uri }} style={styles.currentImage} />
      )}

      {image && <Button title="Upload" color="green" onPress={upload} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  currentImage: {
    width: 250,
    height: 250,
    resizeMode: "cover",
    alignSelf: "center",
  },
});

export default UploadImage;
