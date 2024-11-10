///
/// HybridMPVolumeViewControllerSpec.cpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2024 Marc Rousavy @ Margelo
///

#include "HybridMPVolumeViewControllerSpec.hpp"

namespace margelo::nitro::mediacontroller {

  void HybridMPVolumeViewControllerSpec::loadHybridMethods() {
    // load base methods/properties
    HybridObject::loadHybridMethods();
    // load custom methods/properties
    registerHybrids(this, [](Prototype& prototype) {
      prototype.registerHybridMethod("setVolume", &HybridMPVolumeViewControllerSpec::setVolume);
      prototype.registerHybridMethod("getVolume", &HybridMPVolumeViewControllerSpec::getVolume);
    });
  }

} // namespace margelo::nitro::mediacontroller
