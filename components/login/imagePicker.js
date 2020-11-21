import React, { useState, useEffect } from 'react';
import { Image,  Platform } from 'react-native';
import {Button,Text,Item,Right} from "native-base"
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Item  style={styles.con}>
    {image && <Image  source={{ uri: image }} style={{ width: 100, height: 100 ,margin:10}} />}
    <Right>
    <Button transparent onPress={pickImage}><Text>Upload Image</Text></Button>
    </Right>
    </Item>
  );
}
const styles={
    con:{
        margin:20
    }
}