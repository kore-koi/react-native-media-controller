import { Platform } from 'react-native'
import { NitroModules } from 'react-native-nitro-modules'
import type { AudioManager as AudioManagerType } from '../specs/AudioManager.nitro'

export * from '../specs/AudioManager.nitro'

let AudioManager: AudioManagerType

const AudioManagerStub: AudioManagerType = {
  name: 'AudioManager',
  equals: () => false,
  dispose: () => {},
  setVolume: async () => {
    console.warn('AudioManager.setVolume is only supported on Android.')
  },
  getVolume: async () => {
    console.warn('AudioManager.getVolume is only supported on Android.')
    return 0
  },
}

if (Platform.OS === 'android') {
  AudioManager =
    NitroModules.createHybridObject<AudioManagerType>('AudioManager')
} else {
  AudioManager = AudioManagerStub
}

export { AudioManager }