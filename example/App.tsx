/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

import { VolumeController } from 'react-native-media-controller';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <Button title="Set Volume to -1" onPress={() => VolumeController.setVolume(-1)}/>
            <Button title="Set Volume to 0" onPress={() => VolumeController.setVolume(0)}/>
            <Button title="Set Volume to 0.1" onPress={() => VolumeController.setVolume(0.1)}/>
            <Button title="Set Volume to 0.45" onPress={() => VolumeController.setVolume(0.45)}/>
            <Button title="Set Volume to 0.123" onPress={() => VolumeController.setVolume(0.123)}/>
            <Button title="Set Volume to 1" onPress={() => VolumeController.setVolume(1)}/>
            <Button title="Set Volume to 2" onPress={() => VolumeController.setVolume(2)}/>
            <Button title="Get volume" onPress={async() => console.log(await VolumeController.getVolume())}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
