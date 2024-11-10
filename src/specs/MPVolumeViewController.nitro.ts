import type { HybridObject } from 'react-native-nitro-modules'

export interface MPVolumeViewControllerSetVolumeParams {
  volume: number
}

export interface MPVolumeViewController extends HybridObject<{ ios: 'swift' }> {
  setVolume(params: MPVolumeViewControllerSetVolumeParams): Promise<void>
  getVolume(): Promise<number>
}
