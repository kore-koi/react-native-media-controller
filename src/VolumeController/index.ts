import { Platform } from 'react-native'
import { MPVolumeViewController } from './MPVolumeController'
import { ASYNC_NO_OP } from '../helpers/utilities'

interface VolumeControllerType {
  setVolume: (volume: number) => Promise<void>
  getVolume: () => Promise<number>
}

export const VolumeController: VolumeControllerType = {
  setVolume: async (volume: number) => {
    const setVolume = Platform.select({
      ios: async () => MPVolumeViewController.setVolume({ volume }),
      android: ASYNC_NO_OP,
    })

    if (!setVolume) {
      throw new Error('VolumeController is not supported on this platform')
    }

    return setVolume()
  },
  getVolume: async () => {
    const getVolume = Platform.select({
      ios: async () => MPVolumeViewController.getVolume(),
      android: async () => 0,
    })

    if (!getVolume) {
      throw new Error('VolumeController is not supported on this platform')
    }

    return getVolume()
  },
}
