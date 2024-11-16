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
    throw new Error(
      'MPVolumeViewController.setVolume is only supported on iOS.'
    )
  },
  getVolume: async () => {
    throw new Error(
      'MPVolumeViewController.getVolume is only supported on iOS.'
    )
  },
  addListener: () => {
    throw new Error(
      'MPVolumeViewController.listenToVolumeChange is only supported on iOS.'
    )
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
