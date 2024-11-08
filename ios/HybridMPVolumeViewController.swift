import Foundation
import MediaPlayer

class HybridMPVolumeViewController: HybridMPVolumeViewControllerSpec {
    var hybridContext = margelo.nitro.HybridContext()
    
    var memorySize: Int {
      return getSizeOf(self)
    }
    
    func setVolume(params: MPVolumeViewControllerSetVolumeParams) throws -> Void {
        NSLog("HybridMPVolumeViewController.setVolume(volume:%f) is being called", params.volume)
        
        guard params.volume >= 0 && params.volume <= 1 else {
            throw NSError(domain: "HybridMPVolumeViewController", code: 0, userInfo: [NSLocalizedDescriptionKey: "Invalid Volume Value, must be between 0 and 1"])
        }
        
        MPVolumeView.setVolume(Float(params.volume))
    }
}
