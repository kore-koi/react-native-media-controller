//
//  MPVolumeView+Extensions.swift
//  Pods
//
//  Created by Andrea Lin on 08/11/24.
//

import Foundation
import MediaPlayer

extension MPVolumeView {
    static func setVolume(_ volume: Float) {
        let volumeView = MPVolumeView()
        let slider = volumeView.subviews.first(where: { $0 is UISlider }) as? UISlider
        
        // https://stackoverflow.com/a/50740234
        // We might need to add a delay to deadline
        // on my phone (iPhone 15 Pro, iOS 18.1) seems to be working fine without though
        DispatchQueue.main.asyncAfter(deadline: DispatchTime.now()) {
            slider?.value = volume
        }
    }
    
    static func getVolume() throws -> Float {
        let sessionInstance = AVAudioSession.sharedInstance()
        
        // https://stackoverflow.com/a/69123079
        // This allows activating the instance without muting other audio sessions
        try sessionInstance.setCategory(.playback, options: .mixWithOthers)
        try sessionInstance.setActive(true)
        
        // https://stackoverflow.com/a/16405677
        return sessionInstance.outputVolume
    }
}
