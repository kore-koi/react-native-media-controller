/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Button,
  StyleSheet,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


import { VolumeController } from 'react-native-media-controller';

import Slider from '@react-native-community/slider';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [volume, _setVolume] = React.useState<number>(0);

  const setVolume = async (value: number) => {
    VolumeController.setVolume(value);
    _setVolume(value);
  };

  useEffect(() => {
    VolumeController.getVolume().then(setVolume);
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const textStyle = {
    color: isDarkMode ? Colors.white : Colors.black,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <View style={styles.slider}>
          <Slider
            minimumValue={0}
            maximumValue={1}
            value={volume}
            onValueChange={setVolume}
          />
        </View>

        <Text style={textStyle}>
          {`Volume: ${volume}`}
        </Text>

        <View
          style={[{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }, styles.container]}>
          <Button title="Set Volume to -1" onPress={() => setVolume(-1)} />
          <Button title="Set Volume to 0" onPress={() => setVolume(0)} />
          <Button title="Set Volume to 0.1" onPress={() => setVolume(0.1)} />
          <Button title="Set Volume to 0.45" onPress={() => setVolume(0.45)} />
          <Button title="Set Volume to 0.5" onPress={() => setVolume(0.5)} />
          <Button title="Set Volume to 0.123" onPress={() => setVolume(0.123)} />
          <Button title="Set Volume to 1" onPress={() => setVolume(1)} />
          <Button title="Set Volume to 2" onPress={() => setVolume(2)} />
          <Button title="Get volume" onPress={async () => console.log(await VolumeController.getVolume())} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    flex: 1,
  },
  slider: {
    padding: 16,
  },
});

export default App;
