import type { HybridObject } from 'react-native-nitro-modules'

export interface AudioManagerSetVolumeParams {
  volume: number
}

export interface AudioManager extends HybridObject<{ android: 'kotlin' }> {
  setVolume(params: AudioManagerSetVolumeParams): Promise<void>
  getVolume(): Promise<number>
}
