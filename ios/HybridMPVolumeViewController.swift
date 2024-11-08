import Foundation
import MediaPlayer

class HybridMPVolumeViewController: HybridMPVolumeViewControllerSpec {
    var hybridContext = margelo.nitro.HybridContext()
    
    var memorySize: Int {
      return getSizeOf(self)
    }
    
    func setVolume(params: MPVolumeViewControllerSetVolumeParams) throws -> Void {
        NSLog("HybridMPVolumeViewController.setVolume(volume:%f) is being called", params.volume)
        
        MPVolumeView.setVolume(Float(params.volume))
    }
}
