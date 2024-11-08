import { Platform } from 'react-native'
import { MPVolumeViewController } from './MPVolumeController'
import { NO_OP } from '../helpers/utilities'

interface VolumeControllerType {
  setVolume: (volume: number) => void
}

export const VolumeController: VolumeControllerType = {
  setVolume: (volume: number) => {
    const setVolume = Platform.select({
      ios: () => MPVolumeViewController.setVolume({ volume }),
      android: NO_OP,
    })

    if (!setVolume) {
      throw new Error('VolumeController is not supported on this platform')
    }

    setVolume()
  },
}
