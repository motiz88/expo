import { Image, ImageSource } from 'expo-image';
import { useCallback, useEffect, useState } from 'react';
import { Image as RNImage, StyleSheet, View } from 'react-native';

import Button from '../../components/Button';
import { Colors } from '../../constants';

const generateSeed = () => 1 + Math.round(Math.random() * 2137);

export default function ImagePlaceholderScreen() {
  const [source, setSource] = useState<ImageSource | null>({
    uri: getRandomImageUri(),
  });
  const clearCacheAndLoad = useCallback(() => {
    setSource({
      uri: getRandomImageUri(),
    });
  }, [source]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={source}
        placeholder={require('../../../assets/images/exponent-icon.png')}
        defaultSource={require('../../../assets/images/exponent-icon.png')}
      />
      <Button title="Clear cache and load" onPress={clearCacheAndLoad} />
    </View>
  );
}

function getRandomImageUri(): string {
  return `https://picsum.photos/seed/${generateSeed()}/3000/2000`;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    margin: 20,
    borderWidth: 1,
    borderColor: Colors.border,
  },
});
