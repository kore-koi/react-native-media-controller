import Foundation
import MediaPlayer
import NitroModules

class HybridMPVolumeViewController: HybridMPVolumeViewControllerSpec {
    var hybridContext = margelo.nitro.HybridContext()
    
    let sessionInstance = AVAudioSession.sharedInstance()
    var volumeView: MPVolumeView?
    var slider: UISlider?
    
    var outputVolumeObservation: NSKeyValueObservation?
    var volumeListeners: [(Double) -> Void] = []
    
    var memorySize: Int {
      return getSizeOf(self)
    }

    public init() {
        print("⏳ Initializing HybridMPVolumeViewController...")
        
        DispatchQueue.main.async {
            // -[UIView init] must be used from main thread only
            // Make sure you're on the main thread here
            self.volumeView = MPVolumeView()
            self.slider = self.volumeView?.subviews.first(where: { $0 is UISlider }) as? UISlider
        }
        
        do {
            // https://stackoverflow.com/a/69123079
            // This allows activating the instance without muting other audio sessions
            try self.sessionInstance.setCategory(.playback, options: .mixWithOthers)
            
            // This also allows other things to work such as
            try self.sessionInstance.setActive(true)
        } catch let error {
            print(error.localizedDescription)
        }
                
        print("✅ HybridMPVolumeViewController initialized!")
    }
    
    deinit {
        print("❌ Destroying HybridMPVolumeViewController...")
        // This might not be the way to deinit a observation (?)
        // might need to check removeObserver
        self.outputVolumeObservation = nil
    }
    
    func setVolume(params: MPVolumeViewControllerSetVolumeParams) throws -> Promise<Void> {
        print("HybridMPVolumeViewController.setVolume(volume:%f) is being called", params.volume)
        return Promise.async {
            // https://stackoverflow.com/a/50740234
            DispatchQueue.main.asyncAfter(deadline: DispatchTime.now() + 0.01) {
                self.slider?.value = Float(params.volume)
            }
        }
    }
    
    func getVolume() throws -> Promise<Double> {
        print("HybridMPVolumeViewController.getVolume() is being called")
        
        // https://stackoverflow.com/a/16405677
        return Promise.async {
            Double(self.sessionInstance.outputVolume)
        }
    }
    
    func addListener(onChange: @escaping (Double) -> Void) {
        print("HybridMPVolumeViewController.addListener() is being called \(String(describing: onChange))")
        
        if (self.outputVolumeObservation == nil) {
            // There's no observation active, start one
            self.outputVolumeObservation = self.sessionInstance.observe(\.outputVolume) { audioSession, _ in
                self.onVolumeChange(volume: audioSession.outputVolume)
            }
        }
        
        self.volumeListeners.append(onChange)
    }
    
    func onVolumeChange(volume: Float) {
        for listener in self.volumeListeners {
            listener(Double(volume))
        }
    }
}
