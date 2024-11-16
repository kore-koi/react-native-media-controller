import { Platform } from 'react-native'
import { MPVolumeViewController } from './MPVolumeController'
import { AudioManager } from './AudioManager'
import { NO_OP } from '../helpers/utilities'

interface VolumeControllerType {
  setVolume: (volume: number) => Promise<void>
  getVolume: () => Promise<number>
  addListener: (onChange: (volume: number) => void) => void
}

export const VolumeController: VolumeControllerType = {
  setVolume: async (volume: number) => {
    const setVolume = Platform.select({
      ios: async () => MPVolumeViewController.setVolume({ volume }),
      android: async () => AudioManager.setVolume({ volume }),
    })

    if (!setVolume) {
      throw new Error('VolumeController is not supported on this platform')
    }

    return setVolume()
  },
  getVolume: async () => {
    const getVolume = Platform.select({
      ios: async () => MPVolumeViewController.getVolume(),
      android: async () => AudioManager.getVolume(),
    })

    if (!getVolume) {
      throw new Error('VolumeController is not supported on this platform')
    }

    return getVolume()
  },
  addListener: (onChange) => {
    const addListener = Platform.select({
      ios: () => MPVolumeViewController.addListener(onChange),
      android: NO_OP,
    })

    if (!addListener) {
      throw new Error('VolumeController is not supported on this platform')
    }

    return addListener()
  },
}
