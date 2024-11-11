package com.margelo.nitro.mediacontroller

import android.content.Context
import android.media.AudioManager
import android.util.Log
import com.margelo.nitro.NitroModules
import com.margelo.nitro.core.Promise
import java.lang.Double.valueOf

class HybridAudioManager : HybridAudioManagerSpec() {
    companion object {
        const val TAG = "HybridChromeCustomTabs"
    }

    override val memorySize: Long
        get() = 0L

    private val context = NitroModules.applicationContext

    private val audioManager = context?.applicationContext?.getSystemService(Context.AUDIO_SERVICE) as AudioManager

    // For whatever reason this value changes between phones
    // they are basically steps,
    // eg. OnePlus 6 on Lineage 21, Android 14 has 25
    // Emulator sdk_gphone64_arm64 on Android 15 has 15
    // Unless we're use a different stream, for now we can just stick to AudioManager.STREAM_MUSIC
    private val maxVolume = audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC)

    override fun setVolume(params: AudioManagerSetVolumeParams): Promise<Unit> {
        Log.d(TAG, "setVolume: ${params.volume}");

        val volume = valueOf(params.volume).times(maxVolume).toInt()

        return Promise.async {
            audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, volume, 0)
        }
    }

    override fun getVolume(): Promise<Double> {
        Log.d(TAG, "getVolume");

        val systemVolume: Int = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC)

        val volume: Double = systemVolume.toDouble().div(maxVolume)

        return Promise.async {
            volume
        }
    }
}