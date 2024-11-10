import { Platform } from 'react-native'
import { NitroModules } from 'react-native-nitro-modules'
import type { MPVolumeViewController as MPVolumeViewControllerType } from '../specs/MPVolumeViewController.nitro'

export * from '../specs/MPVolumeViewController.nitro'

let MPVolumeViewController: MPVolumeViewControllerType

const MPVolumeViewControllerStub: MPVolumeViewControllerType = {
  name: 'MPVolumeViewController',
  equals: () => false,
  dispose: () => {},
  setVolume: async () => {
    console.warn('MPVolumeViewController.setVolume is only supported on iOS.')
  },
  getVolume: async () => {
    console.warn('MPVolumeViewController.getVolume is only supported on iOS.')
    return 0
  },
}

if (Platform.OS === 'ios') {
  MPVolumeViewController =
    NitroModules.createHybridObject<MPVolumeViewControllerType>(
      'MPVolumeViewController'
    )
} else {
  MPVolumeViewController = MPVolumeViewControllerStub
}

export { MPVolumeViewController }
