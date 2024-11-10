import Foundation
import MediaPlayer
import NitroModules

class HybridMPVolumeViewController: HybridMPVolumeViewControllerSpec {
    var hybridContext = margelo.nitro.HybridContext()
    
    var memorySize: Int {
      return getSizeOf(self)
    }
    
    func setVolume(params: MPVolumeViewControllerSetVolumeParams) throws -> Promise<Void> {
        NSLog("HybridMPVolumeViewController.setVolume(volume:%f) is being called", params.volume)
        
        return Promise.async {
            return await MPVolumeView.setVolume(Float(params.volume))
        }
    }
    
    func getVolume() throws -> Promise<Double> {
        NSLog("HybridMPVolumeViewController.getVolume() is being called")
        
        return Promise.async {
            return await Double(try MPVolumeView.getVolume())
        }
    }
}
